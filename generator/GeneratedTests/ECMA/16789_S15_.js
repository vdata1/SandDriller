try {
    assert.sameValue(parseInt('0x1', 16), 1, 'parseInt("0x1", 16) must return 1');
    assert.sameValue(parseInt('0X10', 16), 16, 'parseInt("0X10", 16) must return 16');
    assert.sameValue(parseInt('0x100', 16), 256, 'parseInt("0x100", 16) must return 256');
    assert.sameValue(parseInt('0X1000', 16), 4096, 'parseInt("0X1000", 16) must return 4096');
    assert.sameValue(parseInt('0x10000', 16), 65536, 'parseInt("0x10000", 16) must return 65536');
    assert.sameValue(parseInt('0X100000', 16), 1048576, 'parseInt("0X100000", 16) must return 1048576');
    assert.sameValue(parseInt('0x1000000', 16), 16777216, 'parseInt("0x1000000", 16) must return 16777216');
    assert.sameValue(parseInt('0x10000000', 16), 268435456, 'parseInt("0x10000000", 16) must return 268435456');
    assert.sameValue(parseInt('0x100000000', 16), 4294967296, 'parseInt("0x100000000", 16) must return 4294967296');
    assert.sameValue(parseInt('0x1000000000', 16), 68719476736, 'parseInt("0x1000000000", 16) must return 68719476736');
    assert.sameValue(parseInt('0x10000000000', 16), 1099511627776, 'parseInt("0x10000000000", 16) must return 1099511627776');
    assert.sameValue(parseInt('0x100000000000', 16), 17592186044416, 'parseInt("0x100000000000", 16) must return 17592186044416');
    assert.sameValue(parseInt('0x1000000000000', 16), 281474976710656, 'parseInt("0x1000000000000", 16) must return 281474976710656');
    assert.sameValue(parseInt('0x10000000000000', 16), 4503599627370496, 'parseInt("0x10000000000000", 16) must return 4503599627370496');
    assert.sameValue(parseInt('0x100000000000000', 16), 72057594037927940, 'parseInt("0x100000000000000", 16) must return 72057594037927936');
    assert.sameValue(parseInt('0x1000000000000000', 16), 1152921504606847000, 'parseInt("0x1000000000000000", 16) must return 1152921504606846976');
    assert.sameValue(parseInt('0x10000000000000000', 16), 18446744073709552000, 'parseInt("0x10000000000000000", 16) must return 18446744073709551616');
    assert.sameValue(parseInt('0x100000000000000000', 16), 295147905179352830000, 'parseInt("0x100000000000000000", 16) must return 295147905179352825856');
    assert.sameValue(parseInt('0x1000000000000000000', 16), 4.722366482869645e+21, 'parseInt("0x1000000000000000000", 16) must return 4722366482869645213696');
    assert.sameValue(parseInt('0x10000000000000000000', 16), 7.555786372591432e+22, 'parseInt("0x10000000000000000000", 16) must return 75557863725914323419136');
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