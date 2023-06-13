try {
    if (1 % 1 !== 0) {
        $ERROR('#1.1: 1 % 1 === 0. Actual: ' + 1 % 1);
    } else {
        if (1 / (1 % 1) !== Number.POSITIVE_INFINITY) {
            $ERROR('#1.2: 1 % 1 === + 0. Actual: -0');
        }
    }
    if (-1 % -1 !== -0) {
        $ERROR('#2.1: -1 % -1 === 0. Actual: ' + -1 % -1);
    } else {
        if (1 / (-1 % -1) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#2.2: -1 % -1 === - 0. Actual: +0');
        }
    }
    if (-1 % 1 !== -0) {
        $ERROR('#3.1: -1 % 1 === 0. Actual: ' + -1 % 1);
    } else {
        if (1 / (-1 % 1) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#3.2: -1 % 1 === - 0. Actual: +0');
        }
    }
    if (1 % -1 !== 0) {
        $ERROR('#4.1: 1 % -1 === 0. Actual: ' + 1 % -1);
    } else {
        if (1 / (1 % -1) !== Number.POSITIVE_INFINITY) {
            $ERROR('#4.2: 1 % -1 === + 0. Actual: -0');
        }
    }
    if (101 % 51 !== 50) {
        $ERROR('#5: 101 % 51 === 50. Actual: ' + 101 % 51);
    }
    if (101 % -51 !== 50) {
        $ERROR('#6: 101 % -51 === 50. Actual: ' + 101 % -51);
    }
    if (-101 % 51 !== -50) {
        $ERROR('#7: -101 % 51 === -50. Actual: ' + -101 % 51);
    }
    if (-101 % -51 !== -50) {
        $ERROR('#8: -101 % -51 === -50. Actual: ' + -101 % -51);
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