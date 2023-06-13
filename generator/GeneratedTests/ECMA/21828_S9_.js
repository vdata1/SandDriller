try {
    if (Number.NaN << 0 !== +0) {
        $ERROR('#1.1: (Number.NaN << 0) === 0. Actual: ' + (Number.NaN << 0));
    } else if (1 / (Number.NaN << 0) !== Number.POSITIVE_INFINITY) {
        $ERROR('#1.2: (Number.NaN << 0) === +0. Actual: -0');
    }
    if (Number('abc') << 0 !== +0) {
        $ERROR('#2.1: (Number("abc") << 0) === 0. Actual: ' + (Number('abc') << 0));
    } else if (1 / (0 << 0) !== Number.POSITIVE_INFINITY) {
        $ERROR('#2.2: (0 << 0) === +0. Actual: -0');
    }
    if (0 << 0 !== +0) {
        $ERROR('#3.1: (0 << 0) === 0. Actual: ' + (0 << 0));
    } else if (1 / (0 << 0) !== Number.POSITIVE_INFINITY) {
        $ERROR('#3.2: (0 << 0) === +0. Actual: -0');
    }
    if (-0 << 0 !== +0) {
        $ERROR('#4.1: (-0 << 0) === 0');
    } else if (1 / (-0 << 0) !== Number.POSITIVE_INFINITY) {
        $ERROR('#4.2: (-0 << 0) === +0. Actual: -0');
    }
    if (Number.POSITIVE_INFINITY << 0 !== +0) {
        $ERROR('#5.1: (Number.POSITIVE_INFINITY << 0) === 0. Actual: ' + (Number.POSITIVE_INFINITY << 0));
    } else if (1 / (Number.POSITIVE_INFINITY << 0) !== Number.POSITIVE_INFINITY) {
        $ERROR('#5.2: (Number.POSITIVE_INFINITY << 0) === +0. Actual: -0');
    }
    if (Number.NEGATIVE_INFINITY << 0 !== +0) {
        $ERROR('#6.1: (Number.NEGATIVE_INFINITY << 0) === 0');
    } else if (1 / (Number.NEGATIVE_INFINITY << 0) !== Number.POSITIVE_INFINITY) {
        $ERROR('#6.2: (Number.NEGATIVE_INFINITY << 0) === +0. Actual: -0');
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