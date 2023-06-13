try {
    assert.sameValue(Number('0o0'), 0, 'lower-case head');
    assert.sameValue(Number('0O0'), 0, 'upper-case head');
    assert.sameValue(Number('0o00'), 0, 'lower-case head with leading zeros');
    assert.sameValue(Number('0O00'), 0, 'upper-case head with leading zeros');
    assert.sameValue(Number('0o1'), 1, 'lower-case head');
    assert.sameValue(Number('0O1'), 1, 'upper-case head');
    assert.sameValue(Number('0o01'), 1, 'lower-case head with leading zeros');
    assert.sameValue(Number('0O01'), 1, 'upper-case head with leading zeros');
    assert.sameValue(Number('0o7'), 7, 'lower-case head');
    assert.sameValue(Number('0O7'), 7, 'upper-case head');
    assert.sameValue(Number('0o07'), 7, 'lower-case head with leading zeros');
    assert.sameValue(Number('0O07'), 7, 'upper-case head with leading zeros');
    assert.sameValue(Number('0o10'), 8, 'lower-case head');
    assert.sameValue(Number('0O10'), 8, 'upper-case head');
    assert.sameValue(Number('0o010'), 8, 'lower-case head with leading zeros');
    assert.sameValue(Number('0O010'), 8, 'upper-case head with leading zeros');
    assert.sameValue(Number('0o11'), 9, 'lower-case head');
    assert.sameValue(Number('0O11'), 9, 'upper-case head');
    assert.sameValue(Number('0o011'), 9, 'lower-case head with leading zeros');
    assert.sameValue(Number('0O011'), 9, 'upper-case head with leading zeros');
    assert.sameValue(Number('0o77'), 63, 'lower-case head');
    assert.sameValue(Number('0O77'), 63, 'upper-case head');
    assert.sameValue(Number('0o077'), 63, 'lower-case head with leading zeros');
    assert.sameValue(Number('0O077'), 63, 'upper-case head with leading zeros');
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