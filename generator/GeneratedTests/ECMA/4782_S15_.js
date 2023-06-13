try {
    if (typeof Date() !== 'string') {
        $ERROR('#1: typeof Date() should be "string", actual is ' + typeof Date());
    }
    if (typeof Date(1) !== 'string') {
        $ERROR('#2: typeof Date(1) should be "string", actual is ' + typeof Date(1));
    }
    if (typeof Date(1970, 1) !== 'string') {
        $ERROR('#3: typeof Date(1970, 1) should be "string", actual is ' + typeof Date(1970, 1));
    }
    if (typeof Date(1970, 1, 1) !== 'string') {
        $ERROR('#4: typeof Date(1970, 1, 1) should be "string", actual is ' + typeof Date(1970, 1, 1));
    }
    if (typeof Date(1970, 1, 1, 1) !== 'string') {
        $ERROR('#5: typeof Date(1970, 1, 1, 1) should be "string", actual is ' + typeof Date(1970, 1, 1, 1));
    }
    if (typeof Date(1970, 1, 1, 1) !== 'string') {
        $ERROR('#7: typeof Date(1970, 1, 1, 1) should be "string", actual is ' + typeof Date(1970, 1, 1, 1));
    }
    if (typeof Date(1970, 1, 1, 1, 0) !== 'string') {
        $ERROR('#8: typeof Date(1970, 1, 1, 1, 0) should be "string", actual is ' + typeof Date(1970, 1, 1, 1, 0));
    }
    if (typeof Date(1970, 1, 1, 1, 0, 0) !== 'string') {
        $ERROR('#9: typeof Date(1970, 1, 1, 1, 0, 0) should be "string", actual is ' + typeof Date(1970, 1, 1, 1, 0, 0));
    }
    if (typeof Date(1970, 1, 1, 1, 0, 0, 0) !== 'string') {
        $ERROR('#10: typeof Date(1970, 1, 1, 1, 0, 0, 0) should be "string", actual is ' + typeof Date(1970, 1, 1, 1, 0, 0, 0));
    }
    if (typeof Date(Number.NaN) !== 'string') {
        $ERROR('#11: typeof Date(Number.NaN) should be "string", actual is ' + typeof Date(Number.NaN));
    }
    if (typeof Date(Number.POSITIVE_INFINITY) !== 'string') {
        $ERROR('#12: typeof Date(Number.POSITIVE_INFINITY) should be "string", actual is ' + typeof Date(Number.POSITIVE_INFINITY));
    }
    if (typeof Date(Number.NEGATIVE_INFINITY) !== 'string') {
        $ERROR('#13: typeof Date(Number.NEGATIVE_INFINITY) should be "string", actual is ' + typeof Date(Number.NEGATIVE_INFINITY));
    }
    if (typeof Date(undefined) !== 'string') {
        $ERROR('#14: typeof Date(undefined) should be "string", actual is ' + typeof Date(undefined));
    }
    if (typeof Date(null) !== 'string') {
        $ERROR('#15: typeof Date(null) should be "string", actual is ' + typeof Date(null));
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