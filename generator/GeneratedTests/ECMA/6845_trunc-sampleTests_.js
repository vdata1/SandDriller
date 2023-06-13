try {
    assert.sameValue(1 / Math.trunc(0.02047410048544407), Number.POSITIVE_INFINITY, 'Math.trunc should produce +0 for values between 0 and 1');
    assert.sameValue(1 / Math.trunc(1e-17), Number.POSITIVE_INFINITY, 'Math.trunc should produce +0 for values between 0 and 1');
    assert.sameValue(1 / Math.trunc(0.9999999999999999), Number.POSITIVE_INFINITY, 'Math.trunc should produce +0 for values between 0 and 1');
    assert.sameValue(1 / Math.trunc(Number.EPSILON), Number.POSITIVE_INFINITY, 'Math.trunc should produce +0 for values between 0 and 1');
    assert.sameValue(1 / Math.trunc(Number.MIN_VALUE), Number.POSITIVE_INFINITY, 'Math.trunc should produce +0 for values between 0 and 1');
    assert.sameValue(1 / Math.trunc(-0.02047410048544407), Number.NEGATIVE_INFINITY, 'Math.trunc should produce -0 for values between -1 and 0');
    assert.sameValue(1 / Math.trunc(-1e-17), Number.NEGATIVE_INFINITY, 'Math.trunc should produce -0 for values between -1 and 0');
    assert.sameValue(1 / Math.trunc(-0.9999999999999999), Number.NEGATIVE_INFINITY, 'Math.trunc should produce -0 for values between -1 and 0');
    assert.sameValue(1 / Math.trunc(-Number.EPSILON), Number.NEGATIVE_INFINITY, 'Math.trunc should produce -0 for values between -1 and 0');
    assert.sameValue(1 / Math.trunc(-Number.MIN_VALUE), Number.NEGATIVE_INFINITY, 'Math.trunc should produce -0 for values between -1 and 0');
    assert.sameValue(Math.trunc(Number.MAX_VALUE), Math.floor(Number.MAX_VALUE), 'Math.trunc produces incorrect result for Number.MAX_VALUE');
    assert.sameValue(Math.trunc(10), Math.floor(10), 'Math.trunc produces incorrect result for 10');
    assert.sameValue(Math.trunc(3.9), Math.floor(3.9), 'Math.trunc produces incorrect result for 3.9');
    assert.sameValue(Math.trunc(4.9), Math.floor(4.9), 'Math.trunc produces incorrect result for 4.9');
    assert.sameValue(Math.trunc(-Number.MAX_VALUE), Math.ceil(-Number.MAX_VALUE), 'Math.trunc produces incorrect result for -Number.MAX_VALUE');
    assert.sameValue(Math.trunc(-10), Math.ceil(-10), 'Math.trunc produces incorrect result for -10');
    assert.sameValue(Math.trunc(-3.9), Math.ceil(-3.9), 'Math.trunc produces incorrect result for -3.9');
    assert.sameValue(Math.trunc(-4.9), Math.ceil(-4.9), 'Math.trunc produces incorrect result for -4.9');
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