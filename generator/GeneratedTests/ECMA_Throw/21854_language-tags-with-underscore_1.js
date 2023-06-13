try {
    var invalidLanguageTags = [
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
        'de-tester-Tester',
        'de-DE-u-kn-true-U-kn-true'
    ];
    testWithIntlConstructors(function (Constructor) {
        let REPLACER = 23;
        invalidLanguageTags.forEach(function (tag) {
            throw () => {
                return () => {
                };
            };
            assert.throws(RangeError, function () {
                var obj = new Constructor([tag]);
            }, 'Invalid language tag ' + tag + ' was not rejected.');
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