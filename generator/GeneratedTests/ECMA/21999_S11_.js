try {
    if (0 % 1 !== 0) {
        $ERROR('#1.1: 0 % 1 === 0. Actual: ' + 0 % 1);
    } else {
        if (1 / (0 % 1) !== Number.POSITIVE_INFINITY) {
            $ERROR('#1.2: 0 % 1 === + 0. Actual: -0');
        }
    }
    if (0 % -1 !== 0) {
        $ERROR('#2.1: 0 % -1 === 0. Actual: ' + 0 % -1);
    } else {
        if (1 / (0 % -1) !== Number.POSITIVE_INFINITY) {
            $ERROR('#2.2: 0 % -1 === + 0. Actual: -0');
        }
    }
    if (-0 % 1 !== -0) {
        $ERROR('#3.1: -0 % 1 === 0. Actual: ' + -0 % 1);
    } else {
        if (1 / (-0 % 1) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#3.2: -0 % 1 === - 0. Actual: +0');
        }
    }
    if (-0 % -1 !== -0) {
        $ERROR('#4.1: -0 % -1 === 0. Actual: ' + -0 % -1);
    } else {
        if (1 / (-0 % -1) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#4.2: 0 % -1 === - 0. Actual: +0');
        }
    }
    if (0 % Number.MAX_VALUE !== 0) {
        $ERROR('#5.1: 0 % Number.MAX_VALUE === 0. Actual: ' + 0 % Number.MAX_VALUE);
    } else {
        if (1 / (0 % Number.MAX_VALUE) !== Number.POSITIVE_INFINITY) {
            $ERROR('#5.2: 0 % Number.MAX_VALUE === + 0. Actual: -0');
        }
    }
    if (0 % Number.MIN_VALUE !== 0) {
        $ERROR('#6.1: 0 % Number.MIN_VALUE === 0. Actual: ' + 0 % Number.MIN_VALUE);
    } else {
        if (1 / (0 % Number.MIN_VALUE) !== Number.POSITIVE_INFINITY) {
            $ERROR('#6.2: 0 % Number.MIN_VALUE === + 0. Actual: -0');
        }
    }
    if (-0 % Number.MAX_VALUE !== -0) {
        $ERROR('#7.1: -0 % Number.MAX_VALUE === 0. Actual: ' + -0 % Number.MAX_VALUE);
    } else {
        if (1 / (-0 % Number.MAX_VALUE) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#7.2: -0 % Number.MAX_VALUE === - 0. Actual: +0');
        }
    }
    if (-0 % Number.MIN_VALUE !== -0) {
        $ERROR('#8.1: -0 % Number.MIN_VALUE === 0. Actual: ' + -0 % Number.MIN_VALUE);
    } else {
        if (1 / (-0 % Number.MIN_VALUE) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#8.2: 0 % Number.MIN_VALUE === - 0. Actual: +0');
        }
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