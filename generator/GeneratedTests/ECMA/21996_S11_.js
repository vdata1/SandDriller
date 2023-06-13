try {
    if (isNaN(Number.NEGATIVE_INFINITY % Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#1: -Infinity % Infinity === Not-a-Number. Actual: ' + -Infinity % Infinity);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#2: -Infinity % -Infinity === Not-a-Number. Actual: ' + -Infinity % -Infinity);
    }
    if (isNaN(Number.POSITIVE_INFINITY % Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#3: Infinity % Infinity === Not-a-Number. Actual: ' + Infinity % Infinity);
    }
    if (isNaN(Number.POSITIVE_INFINITY % Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#4: Infinity % -Infinity === Not-a-Number. Actual: ' + Infinity % -Infinity);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % 1) !== true) {
        $ERROR('#5: Infinity % 1 === Not-a-Number. Actual: ' + Infinity % 1);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % -1) !== true) {
        $ERROR('#6: -Infinity % -1 === Not-a-Number. Actual: ' + -Infinity % -1);
    }
    if (isNaN(Number.POSITIVE_INFINITY % 1) !== true) {
        $ERROR('#7: Infinity % 1 === Not-a-Number. Actual: ' + Infinity % 1);
    }
    if (isNaN(Number.POSITIVE_INFINITY % -1) !== true) {
        $ERROR('#8: Infinity % -1 === Not-a-Number. Actual: ' + Infinity % -1);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % Number.MAX_VALUE) !== true) {
        $ERROR('#9: Infinity % Number.MAX_VALUE === Not-a-Number. Actual: ' + Infinity % Number.MAX_VALUE);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % -Number.MAX_VALUE) !== true) {
        $ERROR('#10: -Infinity % -Number.MAX_VALUE === Not-a-Number. Actual: ' + -Infinity % -Number.MAX_VALUE);
    }
    if (isNaN(Number.POSITIVE_INFINITY % Number.MAX_VALUE) !== true) {
        $ERROR('#11: Infinity % Number.MAX_VALUE === Not-a-Number. Actual: ' + Infinity % Number.MAX_VALUE);
    }
    if (isNaN(Number.POSITIVE_INFINITY % -Number.MAX_VALUE) !== true) {
        $ERROR('#12: Infinity % -Number.MAX_VALUE === Not-a-Number. Actual: ' + Infinity % -Number.MAX_VALUE);
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