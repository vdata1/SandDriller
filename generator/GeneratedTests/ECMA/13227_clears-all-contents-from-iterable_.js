try {
    var s = new Set([
        1,
        2,
        3
    ]);
    assert.sameValue(s.size, 3, 'The value of `s.size` is `3`');
    var result = s.clear();
    assert.sameValue(s.size, 0, 'The value of `s.size` is `0`, after executing `s.clear()`');
    assert.sameValue(s.has(1), false, '`s.has(1)` returns `false`');
    assert.sameValue(s.has(2), false, '`s.has(2)` returns `false`');
    assert.sameValue(s.has(3), false, '`s.has(3)` returns `false`');
    assert.sameValue(result, undefined, 'The result of `s.clear()` is `undefined`');
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