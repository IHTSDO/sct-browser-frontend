// Issues and verifies the SNOMED CT licence acceptance cookie.
//
// Token format: v1.<expiry epoch seconds>.<random nonce>.<HMAC-SHA256 signature>
// The signature covers "v1.<expiry>.<nonce>" and is keyed with LICENSE_COOKIE_SECRET, which must be
// identical on every instance behind the same load balancer.

import cryptoModule from 'crypto';

var COOKIE_NAME = 'licenseCookie';
var VERSION = 'v1';
var MAX_AGE_SECONDS = 2 * 24 * 60 * 60;
var MIN_SECRET_LENGTH = 32;

function getSecret() {
    var secret = process.env.LICENSE_COOKIE_SECRET || '';
    return secret.length >= MIN_SECRET_LENGTH ? secret : null;
}

function sign(payload, secret) {
    return cryptoModule.createHmac('sha256', secret).update(payload).digest('base64url');
}

function constantTimeEquals(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    var diff = 0;
    for (var i = 0; i < a.length; i++) {
        diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return diff === 0;
}

function createToken(secret) {
    var expiry = Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS;
    var nonce = Buffer.from(crypto.getRandomValues(new Uint8Array(12))).toString('base64url');
    var payload = VERSION + '.' + expiry + '.' + nonce;
    return payload + '.' + sign(payload, secret);
}

function isValidToken(token, secret) {
    var parts = token.split('.');
    if (parts.length !== 4 || parts[0] !== VERSION || !/^\d{1,12}$/.test(parts[1])) {
        return false;
    }
    if (Number(parts[1]) <= Math.floor(Date.now() / 1000)) {
        return false;
    }
    var payload = parts[0] + '.' + parts[1] + '.' + parts[2];
    return constantTimeEquals(parts[3], sign(payload, secret));
}

// "none" when no licence cookie is sent, "valid" for a genuine unexpired token, "invalid" otherwise
// (forged, tampered, expired, legacy "true" value, or signed with a different secret).
function state(r) {
    var token = r.variables['cookie_' + COOKIE_NAME];
    if (!token) {
        return 'none';
    }
    var secret = getSecret();
    return secret && isValidToken(token, secret) ? 'valid' : 'invalid';
}

function isSecureRequest(r) {
    return r.variables.scheme === 'https' || r.headersIn['X-Forwarded-Proto'] === 'https';
}

function cookieHeader(r, value, maxAge) {
    return COOKIE_NAME + '=' + value + '; Path=/; Max-Age=' + maxAge + '; HttpOnly; SameSite=Lax'
        + (isSecureRequest(r) ? '; Secure' : '');
}

function clearCookieHeader(r) {
    return cookieHeader(r, '', 0);
}

function sendJson(r, status, body) {
    r.headersOut['Content-Type'] = 'application/json';
    r.headersOut['Cache-Control'] = 'no-store';
    r.return(status, JSON.stringify(body));
}

function accept(r) {
    if (r.method !== 'POST') {
        r.headersOut['Allow'] = 'POST';
        sendJson(r, 405, { error: 'Method not allowed' });
        return;
    }
    var secret = getSecret();
    if (!secret) {
        r.error('LICENSE_COOKIE_SECRET is not set or shorter than ' + MIN_SECRET_LENGTH + ' characters');
        sendJson(r, 500, { error: 'Licence acceptance is not configured' });
        return;
    }
    r.headersOut['Set-Cookie'] = cookieHeader(r, createToken(secret), MAX_AGE_SECONDS);
    sendJson(r, 200, { accepted: true, maxAge: MAX_AGE_SECONDS });
}

function status(r) {
    var current = state(r);
    if (current === 'invalid') {
        r.headersOut['Set-Cookie'] = clearCookieHeader(r);
    }
    sendJson(r, 200, { accepted: current === 'valid' });
}

export default { state, accept, status };
