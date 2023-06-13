try {
    if (~0.1 !== -1) {
        $ERROR('#1: ~0.1 === -1. Actual: ' + ~0.1);
    }
    if (~new Number(-0.1) !== -1) {
        $ERROR('#2: ~new Number(-0.1) === -1. Actual: ' + ~new Number(-0.1));
    }
    if (~NaN !== -1) {
        $ERROR('#3: ~NaN === -1. Actual: ' + ~NaN);
    }
    if (~new Number(NaN) !== -1) {
        $ERROR('#4: ~new Number(NaN) === -1. Actual: ' + ~new Number(NaN));
    }
    if (~1 !== -2) {
        $ERROR('#5: ~1 === -2. Actual: ' + ~1);
    }
    if (~new Number(-2) !== 1) {
        $ERROR('#6: ~new Number(-2) === 1. Actual: ' + ~new Number(-2));
    }
    if (~Infinity !== -1) {
        $ERROR('#7: ~Infinity === -1. Actual: ' + ~Infinity);
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