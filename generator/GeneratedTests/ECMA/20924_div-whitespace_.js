try {
    var x;
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+0009 (expression)');
    assert.sameValue(x, 1, 'U+0009 (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+000B (expression)');
    assert.sameValue(x, 1, 'U+000B (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+000C (expression)');
    assert.sameValue(x, 1, 'U+000C (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+0020 (expression)');
    assert.sameValue(x, 1, 'U+0020 (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+00A0 (expression)');
    assert.sameValue(x, 1, 'U+00A0 (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+000A (expression)');
    assert.sameValue(x, 1, 'U+000A (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+000D (expression)');
    assert.sameValue(x, 1, 'U+000D (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+2028 (expression)');
    assert.sameValue(x, 1, 'U+2028 (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+2029 (expression)');
    assert.sameValue(x, 1, 'U+2029 (side effect)');
    x = -1;
    assert.sameValue(x /= -1, 1, 'U+0009U+000BU+000CU+0020U+00A0U+000AU+000DU+2028U+2029 (expression)');
    assert.sameValue(x, 1, 'U+0009U+000BU+000CU+0020U+00A0U+000AU+000DU+2028U+2029 (side effect)');
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