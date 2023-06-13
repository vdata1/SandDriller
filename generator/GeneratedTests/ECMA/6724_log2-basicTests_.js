try {
    assert.sameValue(Math.log2(-0), Number.NEGATIVE_INFINITY, 'Math.log2 produces incorrect output for -0');
    assert.sameValue(Math.log2(+0), Number.NEGATIVE_INFINITY, 'Math.log2 produces incorrect output for +0');
    assert.sameValue(Math.log2(-0.9), NaN, 'Math.log2 produces incorrect output for -0.9');
    assert.sameValue(Math.log2(NaN), NaN, 'Math.log2 produces incorrect output for NaN');
    assert.sameValue(Math.log2(-10), NaN, 'Math.log2 produces incorrect output for -10');
    assert.sameValue(Math.log2(-Infinity), NaN, 'Math.log2 produces incorrect output for -Infinity');
    assert.sameValue(Math.log2(null), Number.NEGATIVE_INFINITY, 'Math.log2 produces incorrect output for null');
    assert.sameValue(Math.log2(undefined), NaN, 'Math.log2 produces incorrect output for undefined');
    assert.sameValue(Math.log2(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, 'Math.log2 produces incorrect output for Number.POSITIVE_INFINITY');
    assert.sameValue(Math.log2(1), 0, 'Math.log2 produces incorrect output for 1');
    assert.sameValue(Math.log2(2), 1, 'Math.log2 produces incorrect output for 2.00');
    assert.sameValue(Math.log2(4), 2, 'Math.log2 produces incorrect output for 4.00');
    assert.sameValue(Math.log2(8), 3, 'Math.log2 produces incorrect output for 8.00');
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