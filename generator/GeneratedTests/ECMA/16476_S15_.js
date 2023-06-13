try {
    if (decodeURI('%3B') !== '%3B') {
        $ERROR('#1: decodeURI("%3B") equal "%3B", not ";"');
    }
    if (decodeURI('%2F') !== '%2F') {
        $ERROR('#2: decodeURI("%2F") equal "%2F", not "/"');
    }
    if (decodeURI('%3F') !== '%3F') {
        $ERROR('#3: decodeURI("%3F") equal "%3F", not "?"');
    }
    if (decodeURI('%3A') !== '%3A') {
        $ERROR('#4: decodeURI("%3A") equal "%3A", not ":"');
    }
    if (decodeURI('%40') !== '%40') {
        $ERROR('#5: decodeURI("%40") equal "%40", not "@"');
    }
    if (decodeURI('%26') !== '%26') {
        $ERROR('#6: decodeURI("%26") equal "%26", not "&"');
    }
    if (decodeURI('%3D') !== '%3D') {
        $ERROR('#7.1: decodeURI("%3D") equal "%3D", not "="');
    }
    if (decodeURI('%2B') !== '%2B') {
        $ERROR('#8.1: decodeURI("%2B") equal "%2B", not "+"');
    }
    if (decodeURI('%24') !== '%24') {
        $ERROR('#9: decodeURI("%24") equal "%24", not "$"');
    }
    if (decodeURI('%2C') !== '%2C') {
        $ERROR('#10: decodeURI("%2C") equal "%2C", not ","');
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