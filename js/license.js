// Licence acceptance is recorded in a signed, HttpOnly "licenseCookie" issued by the server
// (see docker/license-cookie.js), so it can neither be read nor set from JavaScript.

var License = (function () {
    var ENDPOINT = '/license/';
    var COOKIE_NAME = 'licenseCookie';

    // Older versions set an unsigned "licenseCookie=true" from JavaScript. The API proxy rejects it,
    // so it has to be gone before the first API request is made.
    (function removeLegacyCookie() {
        var visibleToScript = document.cookie.split(/;\s*/).some(function (cookie) {
            return cookie.indexOf(COOKIE_NAME + '=') === 0;
        });
        if (visibleToScript) {
            document.cookie = COOKIE_NAME + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }
    })();

    function isAccepted() {
        return fetch(ENDPOINT + 'status', { credentials: 'same-origin', cache: 'no-store' })
            .then(function (response) {
                return response.ok ? response.json() : { accepted: false };
            })
            .then(function (body) {
                return body.accepted === true;
            })
            .catch(function () {
                return false;
            });
    }

    function accept() {
        return fetch(ENDPOINT + 'accept', { method: 'POST', credentials: 'same-origin' })
            .then(function (response) {
                if (!response.ok) {
                    console.warn('Licence acceptance could not be recorded (HTTP ' + response.status + ')');
                }
                return response.ok;
            })
            .catch(function () {
                return false;
            });
    }

    return {
        isAccepted: isAccepted,
        accept: accept
    };
})();
