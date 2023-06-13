try {
    assert.sameValue(parseInt('1', 2), 1, 'parseInt("1", 2) must return 1');
    assert.sameValue(parseInt('11', 2), 3, 'parseInt("11", 2) must return 3');
    assert.sameValue(parseInt('111', 2), 7, 'parseInt("111", 2) must return 7');
    assert.sameValue(parseInt('1111', 2), 15, 'parseInt("1111", 2) must return 15');
    assert.sameValue(parseInt('11111', 2), 31, 'parseInt("11111", 2) must return 31');
    assert.sameValue(parseInt('111111', 2), 63, 'parseInt("111111", 2) must return 63');
    assert.sameValue(parseInt('1111111', 2), 127, 'parseInt("1111111", 2) must return 127');
    assert.sameValue(parseInt('11111111', 2), 255, 'parseInt("11111111", 2) must return 255');
    assert.sameValue(parseInt('111111111', 2), 511, 'parseInt("111111111", 2) must return 511');
    assert.sameValue(parseInt('1111111111', 2), 1023, 'parseInt("1111111111", 2) must return 1023');
    assert.sameValue(parseInt('11111111111', 2), 2047, 'parseInt("11111111111", 2) must return 2047');
    assert.sameValue(parseInt('111111111111', 2), 4095, 'parseInt("111111111111", 2) must return 4095');
    assert.sameValue(parseInt('1111111111111', 2), 8191, 'parseInt("1111111111111", 2) must return 8191');
    assert.sameValue(parseInt('11111111111111', 2), 16383, 'parseInt("11111111111111", 2) must return 16383');
    assert.sameValue(parseInt('111111111111111', 2), 32767, 'parseInt("111111111111111", 2) must return 32767');
    assert.sameValue(parseInt('1111111111111111', 2), 65535, 'parseInt("1111111111111111", 2) must return 65535');
    assert.sameValue(parseInt('11111111111111111', 2), 131071, 'parseInt("11111111111111111", 2) must return 131071');
    assert.sameValue(parseInt('111111111111111111', 2), 262143, 'parseInt("111111111111111111", 2) must return 262143');
    assert.sameValue(parseInt('1111111111111111111', 2), 524287, 'parseInt("1111111111111111111", 2) must return 524287');
    assert.sameValue(parseInt('11111111111111111111', 2), 1048575, 'parseInt("11111111111111111111", 2) must return 1048575');
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