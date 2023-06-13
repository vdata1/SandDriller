try {
    assert.sameValue(Math.clz32(4294967295), 0, '2**32-1');
    assert.sameValue(Math.clz32(4294967296), 32, '2**32');
    assert.sameValue(Math.clz32(4294967297), 31, '2**32+1');
    assert.sameValue(Math.clz32(65535), 16, '2**16-1');
    assert.sameValue(Math.clz32(65536), 15, '2**16');
    assert.sameValue(Math.clz32(65537), 15, '2**16+1');
    assert.sameValue(Math.clz32(255), 24, '2**8-1');
    assert.sameValue(Math.clz32(256), 23, '2**8');
    assert.sameValue(Math.clz32(257), 23, '2**8+1');
    assert.sameValue(Math.clz32(-4294967295), 31, '-(2**32-1)');
    assert.sameValue(Math.clz32(-4294967296), 32, '-(2**32)');
    assert.sameValue(Math.clz32(-4294967297), 0, '-(2**32+1)');
    assert.sameValue(Math.clz32(-65535), 0, '-(2**16-1)');
    assert.sameValue(Math.clz32(-65536), 0, '-(2**16)');
    assert.sameValue(Math.clz32(-65537), 0, '-(2**16+1)');
    assert.sameValue(Math.clz32(-255), 0, '-(2**8-1)');
    assert.sameValue(Math.clz32(-256), 0, '-(2**8)');
    assert.sameValue(Math.clz32(-257), 0, '-(2**8+1)');
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