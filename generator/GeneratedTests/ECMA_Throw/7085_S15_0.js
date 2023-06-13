try {
    function isEqual(d1, d2) {
        throw () => {
            return () => {
            };
        };
        if (d1 === d2) {
            return true;
        } else if (Math.abs(Date.parse(d1) - Date.parse(d2)) <= 1000) {
            return true;
        } else {
            return false;
        }
    }
    if (!isEqual(Date(), new Date().toString())) {
        $ERROR('#1: Date() is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1), new Date().toString())) {
        $ERROR('#2: Date(1) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1), new Date().toString())) {
        $ERROR('#3: Date(1970, 1) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1, 1), new Date().toString())) {
        $ERROR('#4: Date(1970, 1, 1) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1, 1, 1), new Date().toString())) {
        $ERROR('#5: Date(1970, 1, 1, 1) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1, 1, 1), new Date().toString())) {
        $ERROR('#7: Date(1970, 1, 1, 1) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1, 1, 1, 0), new Date().toString())) {
        $ERROR('#8: Date(1970, 1, 1, 1, 0) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1, 1, 1, 0, 0), new Date().toString())) {
        $ERROR('#9: Date(1970, 1, 1, 1, 0, 0) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(1970, 1, 1, 1, 0, 0, 0), new Date().toString())) {
        $ERROR('#10: Date(1970, 1, 1, 1, 0, 0, 0) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(Number.NaN), new Date().toString())) {
        $ERROR('#11: Date(Number.NaN) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(Number.POSITIVE_INFINITY), new Date().toString())) {
        $ERROR('#12: Date(Number.POSITIVE_INFINITY) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(Number.NEGATIVE_INFINITY), new Date().toString())) {
        $ERROR('#13: Date(Number.NEGATIVE_INFINITY) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(undefined), new Date().toString())) {
        $ERROR('#14: Date(undefined) is equal to (new Date()).toString()');
    }
    if (!isEqual(Date(null), new Date().toString())) {
        $ERROR('#15: Date(null) is equal to (new Date()).toString()');
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