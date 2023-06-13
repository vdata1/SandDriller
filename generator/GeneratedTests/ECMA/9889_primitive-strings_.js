try {
    var result = Object.getOwnPropertyDescriptors('abc');
    assert.sameValue(Object.keys(result).length, 4, 'string has 4 descriptors');
    assert.sameValue(result.length.configurable, false, 'length is not configurable');
    assert.sameValue(result.length.enumerable, false, 'length is not enumerable');
    assert.sameValue(result.length.writable, false, 'length is not writable');
    assert.sameValue(result.length.value, 3, 'length is 3');
    assert.sameValue(result[0].configurable, false, 'index 0 is not configurable');
    assert.sameValue(result[0].enumerable, true, 'index 0 is enumerable');
    assert.sameValue(result[0].writable, false, 'index 0 is not writable');
    assert.sameValue(result[0].value, 'a', 'index 0 is "a"');
    assert.sameValue(result[1].configurable, false, 'index 1 is not configurable');
    assert.sameValue(result[1].enumerable, true, 'index 1 is enumerable');
    assert.sameValue(result[1].writable, false, 'index 1 is not writable');
    assert.sameValue(result[1].value, 'b', 'index 1 is "b"');
    assert.sameValue(result[2].configurable, false, 'index 2 is not configurable');
    assert.sameValue(result[2].enumerable, true, 'index 2 is enumerable');
    assert.sameValue(result[2].writable, false, 'index 2 is not writable');
    assert.sameValue(result[2].value, 'c', 'index 2 is "c"');
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