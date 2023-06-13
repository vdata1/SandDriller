try {
    const testDataMaximal = {
        'en': 'en-Latn-US',
        'en-Latn': 'en-Latn-US',
        'en-Shaw': 'en-Shaw-GB',
        'en-Arab': 'en-Arab-US',
        'en-US': 'en-Latn-US',
        'en-GB': 'en-Latn-GB',
        'en-FR': 'en-Latn-FR',
        'it-Kana-CA': 'it-Kana-CA',
        'und': 'en-Latn-US',
        'und-Thai': 'th-Thai-TH',
        'und-419': 'es-Latn-419',
        'und-150': 'ru-Cyrl-RU',
        'und-AT': 'de-Latn-AT',
        'und-Cyrl-RO': 'bg-Cyrl-RO',
        'und-AQ': 'und-Latn-AQ'
    };
    const testDataMinimal = {
        'en': 'en',
        'en-Latn': 'en',
        'ar-Arab': 'ar',
        'en-US': 'en',
        'en-GB': 'en-GB',
        'en-Latn-US': 'en',
        'en-Shaw-GB': 'en-Shaw',
        'en-Arab-US': 'en-Arab',
        'en-Latn-GB': 'en-GB',
        'en-Latn-FR': 'en-FR',
        'it-Kana-CA': 'it-Kana-CA',
        'th-Thai-TH': 'th',
        'es-Latn-419': 'es-419',
        'ru-Cyrl-RU': 'ru',
        'de-Latn-AT': 'de-AT',
        'bg-Cyrl-RO': 'bg-RO',
        'und-Latn-AQ': 'und-AQ'
    };
    const extras = [
        '',
        '-fonipa',
        '-a-not-assigned',
        '-u-attr',
        '-u-co',
        '-u-co-phonebk',
        '-x-private'
    ];
    for (const [tag, maximal] of Object.entries(testDataMaximal)) {
        assert.sameValue(new Intl.Locale(maximal).maximize().toString(), maximal, `"${ maximal }" should be maximal`);
        for (const extra of extras) {
            const input = tag + extra;
            const output = maximal + extra;
            assert.sameValue(new Intl.Locale(input).maximize().toString(), output, `"${ input }".maximize() should be "${ output }"`);
        }
    }
    for (const [tag, minimal] of Object.entries(testDataMinimal)) {
        assert.sameValue(new Intl.Locale(minimal).minimize().toString(), minimal, `"${ minimal }" should be minimal`);
        for (const extra of extras) {
            const input = tag + extra;
            const output = minimal + extra;
            assert.sameValue(new Intl.Locale(input).minimize().toString(), output, `"${ input }".minimize() should be "${ output }"`);
        }
    }
    assert.throws(RangeError, () => new Intl.Locale('x-private'));
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