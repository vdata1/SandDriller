try {
    assert.sameValue('ß'.toUpperCase(), 'SS', 'LATIN SMALL LETTER SHARP S');
    assert.sameValue('İ'.toUpperCase(), 'İ', 'LATIN CAPITAL LETTER I WITH DOT ABOVE');
    assert.sameValue('ﬀ'.toUpperCase(), 'FF', 'LATIN SMALL LIGATURE FF');
    assert.sameValue('ﬁ'.toUpperCase(), 'FI', 'LATIN SMALL LIGATURE FI');
    assert.sameValue('ﬂ'.toUpperCase(), 'FL', 'LATIN SMALL LIGATURE FL');
    assert.sameValue('ﬃ'.toUpperCase(), 'FFI', 'LATIN SMALL LIGATURE FFI');
    assert.sameValue('ﬄ'.toUpperCase(), 'FFL', 'LATIN SMALL LIGATURE FFL');
    assert.sameValue('ﬅ'.toUpperCase(), 'ST', 'LATIN SMALL LIGATURE LONG S T');
    assert.sameValue('ﬆ'.toUpperCase(), 'ST', 'LATIN SMALL LIGATURE ST');
    assert.sameValue('և'.toUpperCase(), 'ԵՒ', 'ARMENIAN SMALL LIGATURE ECH YIWN');
    assert.sameValue('ﬓ'.toUpperCase(), 'ՄՆ', 'ARMENIAN SMALL LIGATURE MEN NOW');
    assert.sameValue('ﬔ'.toUpperCase(), 'ՄԵ', 'ARMENIAN SMALL LIGATURE MEN ECH');
    assert.sameValue('ﬕ'.toUpperCase(), 'ՄԻ', 'ARMENIAN SMALL LIGATURE MEN INI');
    assert.sameValue('ﬖ'.toUpperCase(), 'ՎՆ', 'ARMENIAN SMALL LIGATURE VEW NOW');
    assert.sameValue('ﬗ'.toUpperCase(), 'ՄԽ', 'ARMENIAN SMALL LIGATURE MEN XEH');
    assert.sameValue('ŉ'.toUpperCase(), 'ʼN', 'LATIN SMALL LETTER N PRECEDED BY APOSTROPHE');
    assert.sameValue('ΐ'.toUpperCase(), 'Ϊ́', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS');
    assert.sameValue('ΰ'.toUpperCase(), 'Ϋ́', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS');
    assert.sameValue('ǰ'.toUpperCase(), 'J̌', 'LATIN SMALL LETTER J WITH CARON');
    assert.sameValue('ẖ'.toUpperCase(), 'H̱', 'LATIN SMALL LETTER H WITH LINE BELOW');
    assert.sameValue('ẗ'.toUpperCase(), 'T̈', 'LATIN SMALL LETTER T WITH DIAERESIS');
    assert.sameValue('ẘ'.toUpperCase(), 'W̊', 'LATIN SMALL LETTER W WITH RING ABOVE');
    assert.sameValue('ẙ'.toUpperCase(), 'Y̊', 'LATIN SMALL LETTER Y WITH RING ABOVE');
    assert.sameValue('ẚ'.toUpperCase(), 'Aʾ', 'LATIN SMALL LETTER A WITH RIGHT HALF RING');
    assert.sameValue('ὐ'.toUpperCase(), 'Υ̓', 'GREEK SMALL LETTER UPSILON WITH PSILI');
    assert.sameValue('ὒ'.toUpperCase(), 'Υ̓̀', 'GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA');
    assert.sameValue('ὔ'.toUpperCase(), 'Υ̓́', 'GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA');
    assert.sameValue('ὖ'.toUpperCase(), 'Υ̓͂', 'GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI');
    assert.sameValue('ᾶ'.toUpperCase(), 'Α͂', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI');
    assert.sameValue('ῆ'.toUpperCase(), 'Η͂', 'GREEK SMALL LETTER ETA WITH PERISPOMENI');
    assert.sameValue('ῒ'.toUpperCase(), 'Ϊ̀', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΐ'.toUpperCase(), 'Ϊ́', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῖ'.toUpperCase(), 'Ι͂', 'GREEK SMALL LETTER IOTA WITH PERISPOMENI');
    assert.sameValue('ῗ'.toUpperCase(), 'Ϊ͂', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῢ'.toUpperCase(), 'Ϋ̀', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΰ'.toUpperCase(), 'Ϋ́', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῤ'.toUpperCase(), 'Ρ̓', 'GREEK SMALL LETTER RHO WITH PSILI');
    assert.sameValue('ῦ'.toUpperCase(), 'Υ͂', 'GREEK SMALL LETTER UPSILON WITH PERISPOMENI');
    assert.sameValue('ῧ'.toUpperCase(), 'Ϋ͂', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῶ'.toUpperCase(), 'Ω͂', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI');
    assert.sameValue('ᾀ'.toUpperCase(), 'ἈΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾁ'.toUpperCase(), 'ἉΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾂ'.toUpperCase(), 'ἊΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾃ'.toUpperCase(), 'ἋΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾄ'.toUpperCase(), 'ἌΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾅ'.toUpperCase(), 'ἍΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾆ'.toUpperCase(), 'ἎΙ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾇ'.toUpperCase(), 'ἏΙ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾈ'.toUpperCase(), 'ἈΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾉ'.toUpperCase(), 'ἉΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾊ'.toUpperCase(), 'ἊΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾋ'.toUpperCase(), 'ἋΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾌ'.toUpperCase(), 'ἌΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾍ'.toUpperCase(), 'ἍΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾎ'.toUpperCase(), 'ἎΙ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾏ'.toUpperCase(), 'ἏΙ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾐ'.toUpperCase(), 'ἨΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾑ'.toUpperCase(), 'ἩΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾒ'.toUpperCase(), 'ἪΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾓ'.toUpperCase(), 'ἫΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾔ'.toUpperCase(), 'ἬΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾕ'.toUpperCase(), 'ἭΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾖ'.toUpperCase(), 'ἮΙ', 'GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾗ'.toUpperCase(), 'ἯΙ', 'GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾘ'.toUpperCase(), 'ἨΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾙ'.toUpperCase(), 'ἩΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾚ'.toUpperCase(), 'ἪΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾛ'.toUpperCase(), 'ἫΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾜ'.toUpperCase(), 'ἬΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾝ'.toUpperCase(), 'ἭΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾞ'.toUpperCase(), 'ἮΙ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾟ'.toUpperCase(), 'ἯΙ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾠ'.toUpperCase(), 'ὨΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾡ'.toUpperCase(), 'ὩΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾢ'.toUpperCase(), 'ὪΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾣ'.toUpperCase(), 'ὫΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾤ'.toUpperCase(), 'ὬΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾥ'.toUpperCase(), 'ὭΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾦ'.toUpperCase(), 'ὮΙ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾧ'.toUpperCase(), 'ὯΙ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾨ'.toUpperCase(), 'ὨΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾩ'.toUpperCase(), 'ὩΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾪ'.toUpperCase(), 'ὪΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾫ'.toUpperCase(), 'ὫΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾬ'.toUpperCase(), 'ὬΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾭ'.toUpperCase(), 'ὭΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾮ'.toUpperCase(), 'ὮΙ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾯ'.toUpperCase(), 'ὯΙ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾳ'.toUpperCase(), 'ΑΙ', 'GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI');
    assert.sameValue('ᾼ'.toUpperCase(), 'ΑΙ', 'GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI');
    assert.sameValue('ῃ'.toUpperCase(), 'ΗΙ', 'GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI');
    assert.sameValue('ῌ'.toUpperCase(), 'ΗΙ', 'GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI');
    assert.sameValue('ῳ'.toUpperCase(), 'ΩΙ', 'GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI');
    assert.sameValue('ῼ'.toUpperCase(), 'ΩΙ', 'GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI');
    assert.sameValue('ᾲ'.toUpperCase(), 'ᾺΙ', 'GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾴ'.toUpperCase(), 'ΆΙ', 'GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῂ'.toUpperCase(), 'ῊΙ', 'GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῄ'.toUpperCase(), 'ΉΙ', 'GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῲ'.toUpperCase(), 'ῺΙ', 'GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῴ'.toUpperCase(), 'ΏΙ', 'GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾷ'.toUpperCase(), 'Α͂Ι', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῇ'.toUpperCase(), 'Η͂Ι', 'GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῷ'.toUpperCase(), 'Ω͂Ι', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI');
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