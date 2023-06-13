try {
    var map = new Map();
    map.set(1, 11);
    map.set(2, 22);
    var iterator = map[Symbol.iterator]();
    var result;
    result = iterator.next();
    assert.sameValue(result.value[0], 1, 'First result `value` (map key)');
    assert.sameValue(result.value[1], 11, 'First result `value` (map value)');
    assert.sameValue(result.value.length, 2, 'First result `value` (length)');
    assert.sameValue(result.done, false, 'First result `done` flag');
    map.set(3, 33);
    result = iterator.next();
    assert.sameValue(result.value[0], 2, 'Second result `value` (map key)');
    assert.sameValue(result.value[1], 22, 'Second result `value` (map value)');
    assert.sameValue(result.value.length, 2, 'Second result `value` (length)');
    assert.sameValue(result.done, false, 'Second result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value[0], 3, 'Third result `value` (map key)');
    assert.sameValue(result.value[1], 33, 'Third result `value` (map value)');
    assert.sameValue(result.value.length, 2, 'Third result `value` (length)');
    assert.sameValue(result.done, false, 'Third result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'Exhausted result `value`');
    assert.sameValue(result.done, true, 'Exhausted result `done` flag');
    map.set(4, 44);
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'Exhausted result `value` (repeated request)');
    assert.sameValue(result.done, true, 'Exhausted result `done` flag (repeated request)');
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