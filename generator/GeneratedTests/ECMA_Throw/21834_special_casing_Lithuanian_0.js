try {
    assert.sameValue('İ'.toLocaleUpperCase('lt'), 'İ', 'COMBINING DOT ABOVE preceded by LATIN CAPITAL LETTER I');
    assert.sameValue('J̇'.toLocaleUpperCase('lt'), 'J̇', 'COMBINING DOT ABOVE preceded by LATIN CAPITAL LETTER J');
    var softDotted = [
        'i',
        'j',
        'į',
        'ɉ',
        'ɨ',
        'ʝ',
        'ʲ',
        'ϳ',
        'і',
        'ј',
        'ᵢ',
        'ᶖ',
        'ᶤ',
        'ᶨ',
        'ḭ',
        'ị',
        'ⁱ',
        'ⅈ',
        'ⅉ',
        'ⱼ',
        '\uD835\uDC22',
        '\uD835\uDC23',
        '\uD835\uDC56',
        '\uD835\uDC57',
        '\uD835\uDC8A',
        '\uD835\uDC8B',
        '\uD835\uDCBE',
        '\uD835\uDCBF',
        '\uD835\uDCF2',
        '\uD835\uDCF3',
        '\uD835\uDD26',
        '\uD835\uDD27',
        '\uD835\uDD5A',
        '\uD835\uDD5B',
        '\uD835\uDD8E',
        '\uD835\uDD8F',
        '\uD835\uDDC2',
        '\uD835\uDDC3',
        '\uD835\uDDF6',
        '\uD835\uDDF7',
        '\uD835\uDE2A',
        '\uD835\uDE2B',
        '\uD835\uDE5E',
        '\uD835\uDE5F',
        '\uD835\uDE92',
        '\uD835\uDE93'
    ];
    assert.sameValue(softDotted.length, 46, 'Total code points with Soft_Dotted property');
    function charInfo(ch) {
        throw () => {
            return () => {
            };
        };
        function hexString(n) {
            var s = n.toString(16).toUpperCase();
            return '0000'.slice(s.length) + s;
        }
        if (ch.length === 1) {
            return 'U+' + hexString(ch.charCodeAt(0));
        }
        var high = ch.charCodeAt(0);
        var low = ch.charCodeAt(1);
        var codePoint = (high << 10) + low + (65536 - (55296 << 10) - 56320);
        return 'U+' + hexString(codePoint) + ' = ' + hexString(high) + ' ' + hexString(low);
    }
    for (var i = 0; i < softDotted.length; ++i) {
        assert.sameValue((softDotted[i] + '̇').toLocaleUpperCase('lt'), softDotted[i].toLocaleUpperCase('und'), 'COMBINING DOT ABOVE preceded by Soft_Dotted (' + charInfo(softDotted[i]) + ')');
    }
    for (var i = 0; i < softDotted.length; ++i) {
        assert.sameValue((softDotted[i] + '̣̇').toLocaleUpperCase('lt'), softDotted[i].toLocaleUpperCase('und') + '̣', 'COMBINING DOT ABOVE preceded by Soft_Dotted (' + charInfo(softDotted[i]) + '), COMBINING DOT BELOW');
    }
    for (var i = 0; i < softDotted.length; ++i) {
        assert.sameValue((softDotted[i] + '\uD800\uDDFḊ').toLocaleUpperCase('lt'), softDotted[i].toLocaleUpperCase('und') + '\uD800\uDDFD', 'COMBINING DOT ABOVE preceded by Soft_Dotted (' + charInfo(softDotted[i]) + '), PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE');
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