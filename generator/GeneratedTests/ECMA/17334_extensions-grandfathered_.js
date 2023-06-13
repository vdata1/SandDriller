try {
    const testData = [
        {
            tag: 'cel-gaulish',
            options: {
                language: 'fr',
                script: 'Cyrl',
                region: 'FR',
                numberingSystem: 'latn'
            },
            canonical: 'fr-Cyrl-FR-u-nu-latn'
        },
        {
            tag: 'art-lojban',
            options: {
                language: 'fr',
                script: 'Cyrl',
                region: 'ZZ',
                numberingSystem: 'latn'
            },
            canonical: 'fr-Cyrl-ZZ-u-nu-latn'
        }
    ];
    for (const {tag, options, canonical} of testData) {
        const loc = new Intl.Locale(tag, options);
        assert.sameValue(loc.toString(), canonical);
        for (const [name, value] of Object.entries(options)) {
            assert.sameValue(loc[name], value);
        }
    }
    assert.throws(RangeError, () => new Intl.Locale('i-default', {
        language: 'fr',
        script: 'Cyrl',
        region: 'DE',
        numberingSystem: 'latn'
    }));
    assert.throws(RangeError, () => new Intl.Locale('en-gb-oed', {
        language: 'fr',
        script: 'Cyrl',
        region: 'US',
        numberingSystem: 'latn'
    }));
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