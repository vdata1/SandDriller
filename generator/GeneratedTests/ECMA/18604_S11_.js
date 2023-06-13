try {
    if (isNaN(Number.NaN + 1) !== true) {
        $ERROR('#1: NaN + 1 === Not-a-Number. Actual: ' + (NaN + 1));
    }
    if (isNaN(1 + Number.NaN) !== true) {
        $ERROR('#2: 1 + NaN === Not-a-Number. Actual: ' + (1 + NaN));
    }
    if (isNaN(Number.NaN + Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#3: NaN + Infinity === Not-a-Number. Actual: ' + (NaN + Infinity));
    }
    if (isNaN(Number.POSITIVE_INFINITY + Number.NaN) !== true) {
        $ERROR('#4: Infinity + NaN === Not-a-Number. Actual: ' + (Infinity + NaN));
    }
    if (isNaN(Number.NaN + Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#5: NaN + Infinity === Not-a-Number. Actual: ' + (NaN + Infinity));
    }
    if (isNaN(Number.NEGATIVE_INFINITY + Number.NaN) !== true) {
        $ERROR('#6: Infinity + NaN === Not-a-Number. Actual: ' + (Infinity + NaN));
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