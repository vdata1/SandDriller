try {
    assert.sameValue(Math.log10(-0), Number.NEGATIVE_INFINITY, 'Math.log10 produces incorrect output for -0');
    assert.sameValue(Math.log10(+0), Number.NEGATIVE_INFINITY, 'Math.log10 produces incorrect output for +0');
    assert.sameValue(Math.log10(-0.9), Number.NaN, 'Math.log10 produces incorrect output for -0.9');
    assert.sameValue(Math.log10(NaN), Number.NaN, 'Math.log10 produces incorrect output for NaN');
    assert.sameValue(Math.log10(-10), Number.NaN, 'Math.log10 produces incorrect output for -10');
    assert.sameValue(Math.log10(null), Number.NEGATIVE_INFINITY, 'Math.log10 produces incorrect output for null');
    assert.sameValue(Math.log10(undefined), Number.NaN, 'Math.log10 produces incorrect output for undefined');
    assert.sameValue(Math.log10(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, 'Math.log10 produces incorrect output for Number.POSITIVE_INFINITY');
    assert.sameValue(Math.log10(1), 0, 'Math.log10 produces incorrect output for 1');
    assert.sameValue(Math.log10(10), 1, 'Math.log10 produces incorrect output for 10.00');
    assert.sameValue(Math.log10(100), 2, 'Math.log10 produces incorrect output for 100.00');
    assert.sameValue(Math.log10(1000), 3, 'Math.log10 produces incorrect output for 1000.00');
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