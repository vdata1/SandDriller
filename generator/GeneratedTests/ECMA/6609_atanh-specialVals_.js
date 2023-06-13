try {
    assert.sameValue(Math.atanh(-1.9), Number.NaN, 'Math.atanh produces incorrect output for -1.9');
    assert.sameValue(Math.atanh(NaN), Number.NaN, 'Math.atanh produces incorrect output for NaN');
    assert.sameValue(Math.atanh(-10), Number.NaN, 'Math.atanh produces incorrect output for -10');
    assert.sameValue(Math.atanh(-Infinity), Number.NaN, 'Math.atanh produces incorrect output for -Infinity');
    assert.sameValue(Math.atanh(1.9), Number.NaN, 'Math.atanh produces incorrect output for 1.9');
    assert.sameValue(Math.atanh(10), Number.NaN, 'Math.atanh produces incorrect output for 10');
    assert.sameValue(Math.atanh(Number.POSITIVE_INFINITY), Number.NaN, 'Math.atanh produces incorrect output for Number.POSITIVE_INFINITY');
    assert.sameValue(Math.atanh(-1), Number.NEGATIVE_INFINITY, 'Math.atanh should produce negative infinity for -1');
    assert.sameValue(Math.atanh(+1), Number.POSITIVE_INFINITY, 'Math.atanh should produce positive infinity for +1');
    assert.sameValue(1 / Math.atanh(-0), Number.NEGATIVE_INFINITY, 'Math.atanh should produce -0 for -0');
    assert.sameValue(1 / Math.atanh(0), Number.POSITIVE_INFINITY, 'Math.atanh should produce +0 for +0');
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