if (!window.location.host.split('.')[0].includes('snowstorm') &&
    !window.location.host.split('.')[0].includes('authoring') &&
    !window.location.host.split('.')[0].includes('local')) {

    var _iub = _iub || [];
    _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"consentOnContinuedBrowsing":false,"cookiePolicyInOtherWindow":true,"countryDetection":true,"enableLgpd":true,"invalidateConsentWithoutLog":true,"lang":"en","lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":1104087,"whitelabel":false,"cookiePolicyId":46600952, "banner":{ "acceptButtonDisplay":true,"backgroundColor":"black","closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"rejectButtonDisplay":true,"textColor":"white" }};

    !function(e) {
        "use strict";
        var r = 0;
        function t() {
            var e;
            e = "https://cdn.iubenda.com/cookie_solution/iubenda_cs/1.44.8/core-" + _iub.csConfiguration.lang + ".js";
            var o = document.querySelector('script[src="' + e + '"]');
            if (!o) {
                o = document.createElement("script");
                var c = document.querySelector("script");
                o.src = e,
                    o.addEventListener("error", (function() {
                            ++r < 5 && (o.parentNode.removeChild(o),
                                setTimeout(t, 10))
                        }
                    )),
                    c.parentNode.insertBefore(o, c)
            }
        }
        _iub.invTcfC = Date.now() - 31104e6;
        _iub.csConfigLegacy = !1,
            _iub.GVL2 = _iub.GVL2 || 179;
        _iub.cc = 'EU',
            t(),
            e.loadCore = t,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
    }({});
}


