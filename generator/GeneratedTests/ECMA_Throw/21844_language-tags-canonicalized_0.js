try {
    var canonicalizedTags = {
        'de': ['de'],
        'de-DE': [
            'de-DE',
            'de'
        ],
        'DE-de': [
            'de-DE',
            'de'
        ],
        'cmn': ['zh'],
        'CMN-hANS': [
            'zh-Hans',
            'zh'
        ],
        'cmn-hans-cn': [
            'zh-Hans-CN',
            'zh-Hans',
            'zh'
        ],
        'es-419': [
            'es-419',
            'es'
        ],
        'es-419-u-nu-latn': [
            'es-419-u-nu-latn',
            'es-419',
            'es',
            'es-u-nu-latn'
        ],
        'cmn-hans-cn-u-ca-t-ca-x-t-u': [
            'zh-Hans-CN-t-ca-u-ca-x-t-u',
            'zh-Hans-CN-t-ca-x-t-u',
            'zh-Hans-CN-t-ca-x-t',
            'zh-Hans-CN-t-ca',
            'zh-Hans-CN',
            'zh-Hans',
            'zh'
        ],
        'de-gregory-u-ca-gregory': [
            'de-gregory-u-ca-gregory',
            'de-gregory',
            'de-u-ca-gregory',
            'de'
        ],
        'sgn-GR': ['gss'],
        'ji': ['yi'],
        'de-DD': [
            'de-DE',
            'de'
        ],
        'in': ['id']
    };
    Object.getOwnPropertyNames(canonicalizedTags).forEach(function (tag) {
        throw () => {
            return () => {
            };
        };
        canonicalizedTags[tag].forEach(function (canonicalTag) {
            assert(isCanonicalizedStructurallyValidLanguageTag(canonicalTag), 'Test data "' + canonicalTag + '" is not canonicalized and structurally valid language tag.');
        });
    });
    testWithIntlConstructors(function (Constructor) {
        var defaultLocale = new Constructor().resolvedOptions().locale;
        Object.getOwnPropertyNames(canonicalizedTags).forEach(function (tag) {
            var object = new Constructor([tag], { localeMatcher: 'lookup' });
            var locale = object.resolvedOptions().locale;
            assert(canonicalizedTags[tag].indexOf(locale) !== -1 || locale === defaultLocale, 'For ' + tag + ' got ' + locale + '; expected one of ' + canonicalizedTags[tag].join(', ') + '.');
            var supported = Constructor.supportedLocalesOf([tag]);
            assert(supported.length === 0 || supported[0] === canonicalizedTags[tag][0], 'For ' + tag + ' got ' + supported[0] + '; expected ' + canonicalizedTags[tag][0] + '.');
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