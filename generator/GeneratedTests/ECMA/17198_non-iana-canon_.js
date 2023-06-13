try {
    var testData = [
        {
            tag: 'mo',
            canonical: 'ro'
        },
        { tag: 'es-ES-preeuro' },
        { tag: 'uz-UZ-cyrillic' },
        { tag: 'posix' },
        { tag: 'hi-direct' },
        { tag: 'zh-pinyin' },
        { tag: 'zh-stroke' },
        {
            tag: 'aar-x-private',
            canonical: 'aa-x-private'
        },
        {
            tag: 'heb-x-private',
            canonical: 'he-x-private'
        },
        { tag: 'de-u-kf' },
        {
            tag: 'ces',
            canonical: 'cs'
        },
        {
            tag: 'hy-arevela',
            canonical: 'hy'
        },
        {
            tag: 'hy-arevmda',
            canonical: 'hyw'
        }
    ];
    for (const {tag, canonical = tag} of testData) {
        assert.sameValue(Intl.getCanonicalLocales(tag)[0], canonical, 'The value of Intl.getCanonicalLocales(tag)[0] equals the value of `canonical`');
    }
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