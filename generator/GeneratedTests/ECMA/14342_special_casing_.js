try {
    assert.sameValue('ß'.toLocaleUpperCase(), 'SS', 'LATIN SMALL LETTER SHARP S');
    assert.sameValue('İ'.toLocaleUpperCase(), 'İ', 'LATIN CAPITAL LETTER I WITH DOT ABOVE');
    assert.sameValue('ﬀ'.toLocaleUpperCase(), 'FF', 'LATIN SMALL LIGATURE FF');
    assert.sameValue('ﬁ'.toLocaleUpperCase(), 'FI', 'LATIN SMALL LIGATURE FI');
    assert.sameValue('ﬂ'.toLocaleUpperCase(), 'FL', 'LATIN SMALL LIGATURE FL');
    assert.sameValue('ﬃ'.toLocaleUpperCase(), 'FFI', 'LATIN SMALL LIGATURE FFI');
    assert.sameValue('ﬄ'.toLocaleUpperCase(), 'FFL', 'LATIN SMALL LIGATURE FFL');
    assert.sameValue('ﬅ'.toLocaleUpperCase(), 'ST', 'LATIN SMALL LIGATURE LONG S T');
    assert.sameValue('ﬆ'.toLocaleUpperCase(), 'ST', 'LATIN SMALL LIGATURE ST');
    assert.sameValue('և'.toLocaleUpperCase(), 'ԵՒ', 'ARMENIAN SMALL LIGATURE ECH YIWN');
    assert.sameValue('ﬓ'.toLocaleUpperCase(), 'ՄՆ', 'ARMENIAN SMALL LIGATURE MEN NOW');
    assert.sameValue('ﬔ'.toLocaleUpperCase(), 'ՄԵ', 'ARMENIAN SMALL LIGATURE MEN ECH');
    assert.sameValue('ﬕ'.toLocaleUpperCase(), 'ՄԻ', 'ARMENIAN SMALL LIGATURE MEN INI');
    assert.sameValue('ﬖ'.toLocaleUpperCase(), 'ՎՆ', 'ARMENIAN SMALL LIGATURE VEW NOW');
    assert.sameValue('ﬗ'.toLocaleUpperCase(), 'ՄԽ', 'ARMENIAN SMALL LIGATURE MEN XEH');
    assert.sameValue('ŉ'.toLocaleUpperCase(), 'ʼN', 'LATIN SMALL LETTER N PRECEDED BY APOSTROPHE');
    assert.sameValue('ΐ'.toLocaleUpperCase(), 'Ϊ́', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS');
    assert.sameValue('ΰ'.toLocaleUpperCase(), 'Ϋ́', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS');
    assert.sameValue('ǰ'.toLocaleUpperCase(), 'J̌', 'LATIN SMALL LETTER J WITH CARON');
    assert.sameValue('ẖ'.toLocaleUpperCase(), 'H̱', 'LATIN SMALL LETTER H WITH LINE BELOW');
    assert.sameValue('ẗ'.toLocaleUpperCase(), 'T̈', 'LATIN SMALL LETTER T WITH DIAERESIS');
    assert.sameValue('ẘ'.toLocaleUpperCase(), 'W̊', 'LATIN SMALL LETTER W WITH RING ABOVE');
    assert.sameValue('ẙ'.toLocaleUpperCase(), 'Y̊', 'LATIN SMALL LETTER Y WITH RING ABOVE');
    assert.sameValue('ẚ'.toLocaleUpperCase(), 'Aʾ', 'LATIN SMALL LETTER A WITH RIGHT HALF RING');
    assert.sameValue('ὐ'.toLocaleUpperCase(), 'Υ̓', 'GREEK SMALL LETTER UPSILON WITH PSILI');
    assert.sameValue('ὒ'.toLocaleUpperCase(), 'Υ̓̀', 'GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA');
    assert.sameValue('ὔ'.toLocaleUpperCase(), 'Υ̓́', 'GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA');
    assert.sameValue('ὖ'.toLocaleUpperCase(), 'Υ̓͂', 'GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI');
    assert.sameValue('ᾶ'.toLocaleUpperCase(), 'Α͂', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI');
    assert.sameValue('ῆ'.toLocaleUpperCase(), 'Η͂', 'GREEK SMALL LETTER ETA WITH PERISPOMENI');
    assert.sameValue('ῒ'.toLocaleUpperCase(), 'Ϊ̀', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΐ'.toLocaleUpperCase(), 'Ϊ́', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῖ'.toLocaleUpperCase(), 'Ι͂', 'GREEK SMALL LETTER IOTA WITH PERISPOMENI');
    assert.sameValue('ῗ'.toLocaleUpperCase(), 'Ϊ͂', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῢ'.toLocaleUpperCase(), 'Ϋ̀', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΰ'.toLocaleUpperCase(), 'Ϋ́', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῤ'.toLocaleUpperCase(), 'Ρ̓', 'GREEK SMALL LETTER RHO WITH PSILI');
    assert.sameValue('ῦ'.toLocaleUpperCase(), 'Υ͂', 'GREEK SMALL LETTER UPSILON WITH PERISPOMENI');
    assert.sameValue('ῧ'.toLocaleUpperCase(), 'Ϋ͂', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῶ'.toLocaleUpperCase(), 'Ω͂', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI');
    assert.sameValue('ᾀ'.toLocaleUpperCase(), 'ἈΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾁ'.toLocaleUpperCase(), 'ἉΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾂ'.toLocaleUpperCase(), 'ἊΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾃ'.toLocaleUpperCase(), 'ἋΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾄ'.toLocaleUpperCase(), 'ἌΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾅ'.toLocaleUpperCase(), 'ἍΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾆ'.toLocaleUpperCase(), 'ἎΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾇ'.toLocaleUpperCase(), 'ἏΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾈ'.toLocaleUpperCase(), 'ἈΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾉ'.toLocaleUpperCase(), 'ἉΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾊ'.toLocaleUpperCase(), 'ἊΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾋ'.toLocaleUpperCase(), 'ἋΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾌ'.toLocaleUpperCase(), 'ἌΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾍ'.toLocaleUpperCase(), 'ἍΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾎ'.toLocaleUpperCase(), 'ἎΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾏ'.toLocaleUpperCase(), 'ἏΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾐ'.toLocaleUpperCase(), 'ἨΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾑ'.toLocaleUpperCase(), 'ἩΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾒ'.toLocaleUpperCase(), 'ἪΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾓ'.toLocaleUpperCase(), 'ἫΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾔ'.toLocaleUpperCase(), 'ἬΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾕ'.toLocaleUpperCase(), 'ἭΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾖ'.toLocaleUpperCase(), 'ἮΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾗ'.toLocaleUpperCase(), 'ἯΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾘ'.toLocaleUpperCase(), 'ἨΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾙ'.toLocaleUpperCase(), 'ἩΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾚ'.toLocaleUpperCase(), 'ἪΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾛ'.toLocaleUpperCase(), 'ἫΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾜ'.toLocaleUpperCase(), 'ἬΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾝ'.toLocaleUpperCase(), 'ἭΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾞ'.toLocaleUpperCase(), 'ἮΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾟ'.toLocaleUpperCase(), 'ἯΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾠ'.toLocaleUpperCase(), 'ὨΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾡ'.toLocaleUpperCase(), 'ὩΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾢ'.toLocaleUpperCase(), 'ὪΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾣ'.toLocaleUpperCase(), 'ὫΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾤ'.toLocaleUpperCase(), 'ὬΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾥ'.toLocaleUpperCase(), 'ὭΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾦ'.toLocaleUpperCase(), 'ὮΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾧ'.toLocaleUpperCase(), 'ὯΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾨ'.toLocaleUpperCase(), 'ὨΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾩ'.toLocaleUpperCase(), 'ὩΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾪ'.toLocaleUpperCase(), 'ὪΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾫ'.toLocaleUpperCase(), 'ὫΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾬ'.toLocaleUpperCase(), 'ὬΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾭ'.toLocaleUpperCase(), 'ὭΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾮ'.toLocaleUpperCase(), 'ὮΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾯ'.toLocaleUpperCase(), 'ὯΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾳ'.toLocaleUpperCase(), 'ΑΙ', 'GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI');
    assert.sameValue('ᾼ'.toLocaleUpperCase(), 'ΑΙ', 'GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI');
    assert.sameValue('ῃ'.toLocaleUpperCase(), 'ΗΙ', 'GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI');
    assert.sameValue('ῌ'.toLocaleUpperCase(), 'ΗΙ', 'GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI');
    assert.sameValue('ῳ'.toLocaleUpperCase(), 'ΩΙ', 'GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI');
    assert.sameValue('ῼ'.toLocaleUpperCase(), 'ΩΙ', 'GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI');
    assert.sameValue('ᾲ'.toLocaleUpperCase(), 'ᾺΙ', 'GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾴ'.toLocaleUpperCase(), 'ΆΙ', 'GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῂ'.toLocaleUpperCase(), 'ῊΙ', 'GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῄ'.toLocaleUpperCase(), 'ΉΙ', 'GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῲ'.toLocaleUpperCase(), 'ῺΙ', 'GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῴ'.toLocaleUpperCase(), 'ΏΙ', 'GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾷ'.toLocaleUpperCase(), 'Α͂Ι', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῇ'.toLocaleUpperCase(), 'Η͂Ι', 'GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῷ'.toLocaleUpperCase(), 'Ω͂Ι', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI');
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