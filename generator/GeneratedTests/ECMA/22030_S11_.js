try {
    if (isNaN(Number.NEGATIVE_INFINITY * 0) !== true) {
        $ERROR('#1: Infinity * 0 === Not-a-Number. Actual: ' + Infinity * 0);
    }
    if (isNaN(-0 * Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#2: -0 * -Infinity === Not-a-Number. Actual: ' + -0 * -Infinity);
    }
    if (isNaN(Number.POSITIVE_INFINITY * -0) !== true) {
        $ERROR('#3: Infinity * -0 === Not-a-Number. Actual: ' + Infinity * -0);
    }
    if (isNaN(0 * Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#4: 0 * Infinity === Not-a-Number. Actual: ' + 0 * Infinity);
    }
    if (isNaN(Number.NEGATIVE_INFINITY * -0) !== true) {
        $ERROR('#5: Infinity * -0 === Not-a-Number. Actual: ' + Infinity * -0);
    }
    if (isNaN(0 * Number.NEGATIVE_INFINITY) !== true) {
        $ERROR('#6: 0 * -Infinity === Not-a-Number. Actual: ' + 0 * -Infinity);
    }
    if (isNaN(Number.POSITIVE_INFINITY * 0) !== true) {
        $ERROR('#7: Infinity * 0 === Not-a-Number. Actual: ' + Infinity * 0);
    }
    if (isNaN(-0 * Number.POSITIVE_INFINITY) !== true) {
        $ERROR('#8: -0 * Infinity === Not-a-Number. Actual: ' + -0 * Infinity);
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