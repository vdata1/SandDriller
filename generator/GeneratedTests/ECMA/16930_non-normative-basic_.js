try {
    var locales = [
        'de',
        'en',
        'es',
        'fr',
        'it'
    ];
    locales = Intl.Collator.supportedLocalesOf(locales, { localeMatcher: 'lookup' });
    locales.forEach(function (locale) {
        var collator = new Intl.Collator([locale], {
            sensitivity: 'variant',
            localeMatcher: 'lookup'
        });
        var a = [
            'L',
            'X',
            'C',
            'k',
            'Z',
            'H',
            'd',
            'm',
            'w',
            'A',
            'i',
            'f',
            'y',
            'E',
            'N',
            'V',
            'g',
            'J',
            'b'
        ];
        a.sort(collator.compare);
        var expected = [
            'A',
            'b',
            'C',
            'd',
            'E',
            'f',
            'g',
            'H',
            'i',
            'J',
            'k',
            'L',
            'm',
            'N',
            'V',
            'w',
            'X',
            'y',
            'Z'
        ];
        assert.compareArray(a, expected);
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