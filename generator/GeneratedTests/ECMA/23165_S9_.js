try {
    if (isNaN(+Number.NaN) !== true) {
        $ERROR('#1: +(NaN) === Not-a-Number. Actual: ' + +NaN);
    }
    if (+ +0 !== +0) {
        $ERROR('#2.1: +(+0) === 0. Actual: ' + + +0);
    } else {
        if (1 / + +0 !== Number.POSITIVE_INFINITY) {
            $ERROR('#2.2: +(+0) === +0. Actual: -0');
        }
    }
    if (+-0 !== -0) {
        $ERROR('#3.1: +(-0) === 0. Actual: ' + +-0);
    } else {
        if (1 / +-0 !== Number.NEGATIVE_INFINITY) {
            $ERROR('#3.2: +(-0) === -0. Actual: +0');
        }
    }
    if (+Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
        $ERROR('#4: +(+Infinity) === +Infinity. Actual: ' + + +Infinity);
    }
    if (+Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
        $ERROR('#5: +(-Infinity) === -Infinity. Actual: ' + +-Infinity);
    }
    if (+Number.MAX_VALUE !== Number.MAX_VALUE) {
        $ERROR('#6: +(Number.MAX_VALUE) === Number.MAX_VALUE. Actual: ' + +Number.MAX_VALUE);
    }
    if (+Number.MIN_VALUE !== Number.MIN_VALUE) {
        $ERROR('#7: +(Number.MIN_VALUE) === Number.MIN_VALUE. Actual: ' + +Number.MIN_VALUE);
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