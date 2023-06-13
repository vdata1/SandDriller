try {
    const testData = {
        'sl-t-sl-rozaj-biske-1994': 'sl-t-sl-1994-biske-rozaj',
        'DE-T-M0-DIN-K0-QWERTZ': 'de-t-k0-qwertz-m0-din',
        'en-t-m0-true': 'en-t-m0-true',
        'en-t-iw': 'en-t-he',
        'und-Latn-t-und-hani-m0-names': 'und-Latn-t-und-hani-m0-prprname'
    };
    for (let [tag, canonical] of Object.entries(testData)) {
        assert(isCanonicalizedStructurallyValidLanguageTag(canonical), '"' + canonical + '" is a canonical and structurally valid language tag.');
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