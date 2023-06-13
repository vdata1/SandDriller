try {
    var lo = '\uD834';
    var hi = '\uDF06';
    var pair = lo + hi;
    var string = 'a' + pair + 'b' + lo + pair + hi + lo;
    var iterator = string[Symbol.iterator]();
    var result;
    result = iterator.next();
    assert.sameValue(result.value, 'a', 'First normal code point `value`');
    assert.sameValue(result.done, false, 'First normal code point `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, pair, 'Surrogate pair `value` (between normal code points)');
    assert.sameValue(result.done, false, 'Surrogate pair `done` flag (between normal code points)');
    result = iterator.next();
    assert.sameValue(result.value, 'b', 'Second normal code point `value`');
    assert.sameValue(result.done, false, 'Second normal code point `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, lo, 'Lone lower code point `value` (following normal code point)');
    assert.sameValue(result.done, false, 'Lone lower code point `done` flag (following normal code point)');
    result = iterator.next();
    assert.sameValue(result.value, pair, 'Surrogate pair `value` (between lone lower- and upper- code points)');
    assert.sameValue(result.done, false, 'Surrogate pair `done` flag (between lone lower- and upper- code points)');
    result = iterator.next();
    assert.sameValue(result.value, hi, 'Lone upper code point `value`');
    assert.sameValue(result.done, false, 'Lone upper code point `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, lo, 'Lone lower code point `value` (following lone upper code point)');
    assert.sameValue(result.done, false, 'Lone lower code point `done` flag (following lone upper code point)');
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'Exhausted result `value`');
    assert.sameValue(result.done, true, 'Exhausted result `done` flag');
    result = iterator.next();
    assert.sameValue(result.value, undefined, 'Exhausted result `value` (repeated request)');
    assert.sameValue(result.done, true, 'Exhausted result `done` flag (repeated request');
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