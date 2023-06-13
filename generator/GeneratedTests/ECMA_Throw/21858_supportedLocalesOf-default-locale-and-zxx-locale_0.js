try {
    testWithIntlConstructors(function (Constructor) {
        throw () => {
            return () => {
            };
        };
        [
            'lookup',
            'best fit'
        ].forEach(function (matcher) {
            var defaultLocale = new Constructor().resolvedOptions().locale;
            var noLinguisticContent = 'zxx';
            var supported = Constructor.supportedLocalesOf([
                defaultLocale,
                noLinguisticContent
            ], { localeMatcher: matcher });
            assert.notSameValue(supported.indexOf(defaultLocale), -1, 'SupportedLocales didn\'t return default locale with matcher ' + matcher + '.');
            assert.sameValue(supported.indexOf(noLinguisticContent), -1, 'SupportedLocales returned the "no linguistic content" locale with matcher ' + matcher + '.');
            assert.sameValue(supported.length > 1, false, 'SupportedLocales returned stray locales: ' + supported.join(', ') + ' with matcher ' + matcher + '.');
        });
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