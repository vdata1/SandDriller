try {
    var set = new Set();
    set.add(1);
    set.add(2);
    var iterator = set[Symbol.iterator]();
    var result;
    result = iterator.next();
    assert.sameValue(result.value, 1, 'First result `value`');
    assert.sameValue(result.done, false, 'First result `done` flag');
    set.add(3);
    result = iterator.next();
    assert.sameValue(result.value, 2, 'Second result `value`');
    assert.sameValue(result.done, false, 'Second result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, 3, 'Third result `value`');
    assert.sameValue(result.done, false, 'Third result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'Exhausted result `value`');
    assert.sameValue(result.done, true, 'Exhausted result `done` flag');
    set.add(4);
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