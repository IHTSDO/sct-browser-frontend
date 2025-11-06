// Lightweight global HTTP interceptor for fetch, XMLHttpRequest and jQuery.ajax.
// Redirects to sign-in.html on HTTP 401/403 and likely opaque cross-origin redirects to IMS.

(function () {
    var SIGN_IN_URL = 'sign-in.html';

    function getImsBaseUrl() {
        try {
            if (window.__CONFIG && window.__CONFIG.imsUrl) { return String(window.__CONFIG.imsUrl); }
        } catch (_) {}
        return '';
    }


    function isImsUrl(u) {
        var ims = getImsBaseUrl();
        if (!ims) { return false; }
        try {
            return String(u || '').indexOf(ims) === 0;
        } catch (_) { return false; }
    }

    function redirectToSignIn() {
        if (typeof window !== 'undefined' && window.location) {
            if (!/sign-in\.html$/i.test(window.location.pathname)) {
                window.location.href = SIGN_IN_URL;
            }
        }
    }

    // Intercept window.fetch
    if (typeof window !== 'undefined' && window.fetch) {
        var originalFetch = window.fetch;
        window.fetch = function () {
            var args = arguments;
            var reqUrl = '';
            try {
                var input = args[0];
                reqUrl = (typeof input === 'string') ? input : (input && input.url) || '';
            } catch (_) {}

            return originalFetch.apply(this, args).then(function (response) {
                try {
                    if (!response) { return response; }
                    if (response.status === 401 || response.status === 403) {
                        redirectToSignIn();
                    }
                } catch (_) {}
                return response;
            });
        };
    }

    // Intercept XMLHttpRequest
    (function () {
        if (typeof window === 'undefined' || !window.XMLHttpRequest) { return; }
        var OriginalXHR = window.XMLHttpRequest;
        function InterceptedXHR() {
            var xhr = new OriginalXHR();
            var _url = '';
            var _open = xhr.open;
            xhr.open = function (method, url) {
                try { _url = url || ''; } catch (_) { _url = ''; }
                return _open.apply(xhr, arguments);
            };
            function maybeRedirect() {
                try {
                    if (xhr.status === 401 || xhr.status === 403) {
                        redirectToSignIn();
                    }
                } catch (_) {}
            }
            xhr.addEventListener('load', maybeRedirect);
            xhr.addEventListener('error', maybeRedirect);
            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState === 4) { maybeRedirect(); }
            });
            return xhr;
        }
        // Preserve prototype to keep methods like open/send available
        InterceptedXHR.prototype = OriginalXHR.prototype;
        window.XMLHttpRequest = InterceptedXHR;
    })();

    // jQuery AJAX global hooks (if jQuery is present)
    (function () {
        if (typeof window === 'undefined' || !window.jQuery) { return; }
        try {
            var $doc = jQuery(document);
            $doc.on('ajaxComplete', function (_e, xhr) {
                try {
                    if (xhr && (xhr.status === 401 || xhr.status === 403)) {
                        redirectToSignIn();
                    }
                } catch (_) {}
            });
            $doc.on('ajaxError', function (_e, xhr, settings) {
                try {
                    // CORS error handling removed
                } catch (_) {}
            });
        } catch (_) {}
    })();
})();


