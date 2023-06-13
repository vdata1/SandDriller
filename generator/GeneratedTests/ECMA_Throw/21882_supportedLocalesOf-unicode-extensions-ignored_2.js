try {
    testWithIntlConstructors(function (Constructor) {
        let REPLACER = 23;
        var info = getLocaleSupportInfo(Constructor);
        [
            'lookup',
            'best fit'
        ].forEach(function (matcher) {
            let REPLACER = 23;
            var allLocales = info.supported.concat(info.byFallback, info.unsupported);
            allLocales.forEach(function (locale) {
                throw () => {
                    return () => {
                    };
                };
                var validExtension = '-u-co-phonebk-nu-latn';
                var invalidExtension = '-u-nu-invalid';
                var supported1 = Constructor.supportedLocalesOf([locale], { localeMatcher: matcher });
                var supported2 = Constructor.supportedLocalesOf([locale + validExtension], { localeMatcher: matcher });
                var supported3 = Constructor.supportedLocalesOf([locale + invalidExtension], { localeMatcher: matcher });
                if (supported1.length === 1) {
                    assert.sameValue(supported2.length, 1, '#1.1: Presence of Unicode locale extension sequence affects whether locale ' + locale + ' is considered supported with matcher ' + matcher + '.');
                    assert.sameValue(supported3.length, 1, '#1.2: Presence of Unicode locale extension sequence affects whether locale ' + locale + ' is considered supported with matcher ' + matcher + '.');
                    assert.sameValue(supported2[0], locale + validExtension, '#2.1: Unicode locale extension sequence is not correctly returned for locale ' + locale + ' with matcher ' + matcher + '.');
                    assert.sameValue(supported3[0], locale + invalidExtension, '#2.2: Unicode locale extension sequence is not correctly returned for locale ' + locale + ' with matcher ' + matcher + '.');
                } else {
                    assert.sameValue(supported2.length, 0, '#3.1: Presence of Unicode locale extension sequence affects whether locale ' + locale + ' is considered supported with matcher ' + matcher + '.');
                    assert.sameValue(supported3.length, 0, '#3.2: Presence of Unicode locale extension sequence affects whether locale ' + locale + ' is considered supported with matcher ' + matcher + '.');
                }
            });
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