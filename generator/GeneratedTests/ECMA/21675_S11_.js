try {
    if (Number.NaN > 0 !== false) {
        $ERROR('#1: (NaN > 0) === false');
    }
    if (Number.NaN > 1.1 !== false) {
        $ERROR('#2: (NaN > 1.1) === false');
    }
    if (Number.NaN > -1.1 !== false) {
        $ERROR('#3: (NaN > -1.1) === false');
    }
    if (Number.NaN > Number.NaN !== false) {
        $ERROR('#4: (NaN > NaN) === false');
    }
    if (Number.NaN > Number.POSITIVE_INFINITY !== false) {
        $ERROR('#5: (NaN > +Infinity) === false');
    }
    if (Number.NaN > Number.NEGATIVE_INFINITY !== false) {
        $ERROR('#6: (NaN > -Infinity) === false');
    }
    if (Number.NaN > Number.MAX_VALUE !== false) {
        $ERROR('#7: (NaN > Number.MAX_VALUE) === false');
    }
    if (Number.NaN > Number.MIN_VALUE !== false) {
        $ERROR('#8: (NaN > Number.MIN_VALUE) === false');
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