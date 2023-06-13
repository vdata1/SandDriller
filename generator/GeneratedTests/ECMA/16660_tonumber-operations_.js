try {
    assert.sameValue(isFinite('0'), true, '\'0\'');
    assert.sameValue(isFinite(''), true, 'the empty string');
    assert.sameValue(isFinite('Infinity'), false, '\'Infinity\'');
    assert.sameValue(isFinite('this is not a number'), false, 'string');
    assert.sameValue(isFinite(true), true, 'true');
    assert.sameValue(isFinite(false), true, 'false');
    assert.sameValue(isFinite([1]), true, 'Object [1]');
    assert.sameValue(isFinite([Infinity]), false, 'Object [Infinity]');
    assert.sameValue(isFinite([NaN]), false, 'Object [NaN]');
    assert.sameValue(isFinite(null), true, 'null');
    assert.sameValue(isFinite(undefined), false, 'undefined');
    assert.sameValue(isFinite(), false, 'no arg');
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