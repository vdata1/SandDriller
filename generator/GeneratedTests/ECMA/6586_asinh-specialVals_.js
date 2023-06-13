try {
    assert.sameValue(Math.asinh(NaN), Number.NaN, 'Math.asinh produces incorrect output for NaN');
    assert.sameValue(Math.asinh(Number.NEGATIVE_INFINITY), Number.NEGATIVE_INFINITY, 'Math.asinh should produce negative infinity for Number.NEGATIVE_INFINITY');
    assert.sameValue(Math.asinh(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, 'Math.asinh should produce positive infinity for Number.POSITIVE_INFINITY');
    assert.sameValue(1 / Math.asinh(-0), Number.NEGATIVE_INFINITY, 'Math.asinh should produce -0 for -0');
    assert.sameValue(1 / Math.asinh(0), Number.POSITIVE_INFINITY, 'Math.asinh should produce +0 for +0');
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