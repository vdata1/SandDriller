try {
    const testData = {
        'ru-SU': 'ru-RU',
        'ru-810': 'ru-RU',
        'en-SU': 'en-RU',
        'en-810': 'en-RU',
        'und-SU': 'und-RU',
        'und-810': 'und-RU',
        'und-Latn-SU': 'und-Latn-RU',
        'und-Latn-810': 'und-Latn-RU',
        'hy-SU': 'hy-AM',
        'hy-810': 'hy-AM',
        'und-Armn-SU': 'und-Armn-AM',
        'und-Armn-810': 'und-Armn-AM',
        'sr-CS': 'sr-RS',
        'sr-Latn-CS': 'sr-Latn-RS',
        'sr-Cyrl-CS': 'sr-Cyrl-RS',
        'az-NT': 'az-SA'
    };
    for (let [tag, canonical] of Object.entries(testData)) {
        assert(isCanonicalizedStructurallyValidLanguageTag(canonical), '"' + canonical + '" is a canonicalized and structurally valid language tag.');
        let result = Intl.getCanonicalLocales(tag);
        assert.sameValue(result.length, 1);
        assert.sameValue(result[0], canonical);
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