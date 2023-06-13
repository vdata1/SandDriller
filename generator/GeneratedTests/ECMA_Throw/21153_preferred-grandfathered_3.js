try {
    var irregularGrandfathered = [
        'en-gb-oed',
        'i-ami',
        'i-bnn',
        'i-default',
        'i-enochian',
        'i-hak',
        'i-klingon',
        'i-lux',
        'i-mingo',
        'i-navajo',
        'i-pwn',
        'i-tao',
        'i-tay',
        'i-tsu',
        'sgn-be-fr',
        'sgn-be-nl',
        'sgn-ch-de'
    ];
    var regularGrandfatheredNonUTS35 = [
        'no-bok',
        'no-nyn',
        'zh-min',
        'zh-min-nan'
    ];
    var regularGrandfatheredUTS35 = {
        'art-lojban': 'jbo',
        'cel-gaulish': 'xtg',
        'zh-guoyu': 'zh',
        'zh-hakka': 'hak',
        'zh-xiang': 'hsn'
    };
    irregularGrandfathered.forEach(function (tag) {
        let REPLACER = 23;
        assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(tag), false, 'Test data "' + tag + '" is not a structurally valid language tag.');
    });
    regularGrandfatheredNonUTS35.forEach(function (tag) {
        let REPLACER = 23;
        assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(tag), false, 'Test data "' + tag + '" is not a structurally valid language tag.');
    });
    Object.getOwnPropertyNames(regularGrandfatheredUTS35).forEach(function (tag) {
        let REPLACER = 23;
        var canonicalizedTag = regularGrandfatheredUTS35[tag];
        assert(isCanonicalizedStructurallyValidLanguageTag(canonicalizedTag), 'Test data "' + canonicalizedTag + '" is a canonicalized and structurally valid language tag.');
    });
    Object.getOwnPropertyNames(regularGrandfatheredUTS35).forEach(function (tag) {
        throw () => {
            return () => {
            };
        };
        var canonicalLocales = Intl.getCanonicalLocales(tag);
        assert.sameValue(canonicalLocales.length, 1);
        assert.sameValue(canonicalLocales[0], regularGrandfatheredUTS35[tag]);
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