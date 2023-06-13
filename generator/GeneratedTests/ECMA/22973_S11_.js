try {
    if (1 - -0 !== 1) {
        $ERROR('#1: 1 - -0 === 1. Actual: ' + (1 - -0));
    }
    if (1 - 0 !== 1) {
        $ERROR('#2: 1 - 0 === 1. Actual: ' + (1 - 0));
    }
    if (-0 - 1 !== -1) {
        $ERROR('#3: -0 - 1 === -1. Actual: ' + (-0 - 1));
    }
    if (0 - 1 !== -1) {
        $ERROR('#4: 0 - 1 === -1. Actual: ' + (0 - 1));
    }
    if (Number.MAX_VALUE - -0 !== Number.MAX_VALUE) {
        $ERROR('#5: Number.MAX_VALUE - -0 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE - -0));
    }
    if (Number.MAX_VALUE - 0 !== Number.MAX_VALUE) {
        $ERROR('#6: Number.MAX_VALUE - 0 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE - 0));
    }
    if (-0 - Number.MIN_VALUE !== -Number.MIN_VALUE) {
        $ERROR('#7: -0 - Number.MIN_VALUE === -Number.MIN_VALUE. Actual: ' + (-0 - Number.MIN_VALUE));
    }
    if (0 - Number.MIN_VALUE !== -Number.MIN_VALUE) {
        $ERROR('#8: 0 - Number.MIN_VALUE === -Number.MIN_VALUE. Actual: ' + (0 - Number.MIN_VALUE));
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