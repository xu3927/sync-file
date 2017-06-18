var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+\u81ea\u52a8\u5207\u6362", {
    "+\u81ea\u52a8\u5207\u6362": function(url, host, scheme) {
        "use strict";
        if (/:\/\/sub\.localhost\.com\//.test(url)) return "+127.0.0.1:3001";
        if (/:\/\/localhost\.com\//.test(url)) return "+127.0.0.1:3000";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+ss";
        if (/google/.test(url)) return "+ss";
        if (/tumblr/.test(url)) return "+ss";
        if (/youtube/.test(url)) return "+ss";
        if (/fbcdn\.net/.test(url)) return "+ss";
        if (/facebook/.test(url)) return "+ss";
        if (/messenger\.com/.test(url)) return "+ss";
        if (/glgnltks\.xyz/.test(url)) return "+ss";
        if (/angularjs\.org/.test(url)) return "+ss";
        if (/npmjs\.com\/$/.test(url)) return "+ss";
        if (/gist\.github\.com\//.test(url)) return "+ss";
        if (/^http:\/\/localhost\.com:3000.*/.test(url)) return "+http://localhost:3000";
        if (/wikipedia\.org/.test(host)) return "+ss";
        if (/twitter\.com/.test(host)) return "+ss";
        if (/html5rocks\.com\//.test(host)) return "+ss";
        return "DIRECT";
    },
    "+127.0.0.1:3001": function(url, host, scheme) {
        "use strict";
        return "PROXY 127.0.0.1:3001";
    },
    "+127.0.0.1:3000": function(url, host, scheme) {
        "use strict";
        return "PROXY 127.0.0.1:3000";
    },
    "+ss": function(url, host, scheme) {
        "use strict";
        if (host === "127.0.0.1" || host === "::1" || host.indexOf(".") < 0 || /^[^:]+:\/\/localhost:*\//.test(url)) return "DIRECT";
        return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
    },
    "+http://localhost:3000": function(url, host, scheme) {
        "use strict";
        return "PROXY localhost:3000";
    }
});