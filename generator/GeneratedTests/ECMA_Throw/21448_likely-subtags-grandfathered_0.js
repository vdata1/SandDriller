try {
    const irregularGrandfathered = [
        'en-GB-oed',
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
        'sgn-BE-FR',
        'sgn-BE-NL',
        'sgn-CH-DE'
    ];
    for (const tag of irregularGrandfathered) {
        assert.throws(RangeError, () => {
            throw () => {
                return () => {
                };
            };
            return new Intl.Locale(tag);
        });
    }
    const regularGrandfathered = [
        {
            tag: 'art-lojban',
            canonical: 'jbo',
            maximized: 'jbo-Latn-001'
        },
        {
            tag: 'cel-gaulish',
            canonical: 'xtg'
        },
        {
            tag: 'zh-guoyu',
            canonical: 'zh',
            maximized: 'zh-Hans-CN'
        },
        {
            tag: 'zh-hakka',
            canonical: 'hak',
            maximized: 'hak-Hans-CN'
        },
        {
            tag: 'zh-xiang',
            canonical: 'hsn',
            maximized: 'hsn-Hans-CN'
        }
    ];
    for (const {tag, canonical, maximized = canonical, minimized = canonical} of regularGrandfathered) {
        const loc = new Intl.Locale(tag);
        assert.sameValue(loc.toString(), canonical);
        assert.sameValue(loc.maximize().toString(), maximized);
        assert.sameValue(loc.maximize().maximize().toString(), maximized);
        assert.sameValue(loc.minimize().toString(), minimized);
        assert.sameValue(loc.minimize().minimize().toString(), minimized);
        assert.sameValue(loc.maximize().minimize().toString(), minimized);
        assert.sameValue(loc.minimize().maximize().toString(), maximized);
    }
    const regularGrandfatheredWithExtLang = [
        'no-bok',
        'no-nyn',
        'zh-min',
        'zh-min-nan'
    ];
    for (const tag of regularGrandfatheredWithExtLang) {
        assert.throws(RangeError, () => new Intl.Locale(tag));
    }
    const extras = [
        'fonipa',
        'a-not-assigned',
        'u-attr',
        'u-co',
        'u-co-phonebk',
        'x-private'
    ];
    for (const {tag, canonical} of regularGrandfathered) {
        const priv = '-x-0';
        const tagMax = new Intl.Locale(canonical + priv).maximize().toString().slice(0, -priv.length);
        const tagMin = new Intl.Locale(canonical + priv).minimize().toString().slice(0, -priv.length);
        for (const extra of extras) {
            const loc = new Intl.Locale(tag + '-' + extra);
            let canonicalWithExtra = canonical + '-' + extra;
            let canonicalMax = tagMax + '-' + extra;
            let canonicalMin = tagMin + '-' + extra;
            if (/^[a-z0-9]{5,8}|[0-9][a-z0-9]{3}$/i.test(extra)) {
                const sorted = s => s.replace(/(-([a-z0-9]{5,8}|[0-9][a-z0-9]{3}))+$/i, m => m.split('-').sort().join('-'));
                canonicalWithExtra = sorted(canonicalWithExtra);
                canonicalMax = sorted(canonicalMax);
                canonicalMin = sorted(canonicalMin);
            }
            assert.sameValue(loc.toString(), canonicalWithExtra);
            assert.sameValue(loc.maximize().toString(), canonicalMax);
            assert.sameValue(loc.maximize().maximize().toString(), canonicalMax);
            assert.sameValue(loc.minimize().toString(), canonicalMin);
            assert.sameValue(loc.minimize().minimize().toString(), canonicalMin);
            assert.sameValue(loc.maximize().minimize().toString(), canonicalMin);
            assert.sameValue(loc.minimize().maximize().toString(), canonicalMax);
        }
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