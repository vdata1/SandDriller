try {
    var array = new Int8Array([
        3,
        1,
        2
    ]);
    var iterator = array[Symbol.iterator]();
    var result;
    result = iterator.next();
    assert.sameValue(result.value, 3, 'first result `value`');
    assert.sameValue(result.done, false, 'first result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, 1, 'second result `value`');
    assert.sameValue(result.done, false, 'second result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, 2, 'third result `value`');
    assert.sameValue(result.done, false, 'third result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'exhausted result `value`');
    assert.sameValue(result.done, true, 'exhausted result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'exhausted result `value` (repeated request)');
    assert.sameValue(result.done, true, 'exhausted result `done` flag (repeated request)');
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