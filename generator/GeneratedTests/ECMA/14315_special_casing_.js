try {
    assert.sameValue('ß'.toLocaleLowerCase(), 'ß', 'LATIN SMALL LETTER SHARP S');
    assert.sameValue('ﬀ'.toLocaleLowerCase(), 'ﬀ', 'LATIN SMALL LIGATURE FF');
    assert.sameValue('ﬁ'.toLocaleLowerCase(), 'ﬁ', 'LATIN SMALL LIGATURE FI');
    assert.sameValue('ﬂ'.toLocaleLowerCase(), 'ﬂ', 'LATIN SMALL LIGATURE FL');
    assert.sameValue('ﬃ'.toLocaleLowerCase(), 'ﬃ', 'LATIN SMALL LIGATURE FFI');
    assert.sameValue('ﬄ'.toLocaleLowerCase(), 'ﬄ', 'LATIN SMALL LIGATURE FFL');
    assert.sameValue('ﬅ'.toLocaleLowerCase(), 'ﬅ', 'LATIN SMALL LIGATURE LONG S T');
    assert.sameValue('ﬆ'.toLocaleLowerCase(), 'ﬆ', 'LATIN SMALL LIGATURE ST');
    assert.sameValue('և'.toLocaleLowerCase(), 'և', 'ARMENIAN SMALL LIGATURE ECH YIWN');
    assert.sameValue('ﬓ'.toLocaleLowerCase(), 'ﬓ', 'ARMENIAN SMALL LIGATURE MEN NOW');
    assert.sameValue('ﬔ'.toLocaleLowerCase(), 'ﬔ', 'ARMENIAN SMALL LIGATURE MEN ECH');
    assert.sameValue('ﬕ'.toLocaleLowerCase(), 'ﬕ', 'ARMENIAN SMALL LIGATURE MEN INI');
    assert.sameValue('ﬖ'.toLocaleLowerCase(), 'ﬖ', 'ARMENIAN SMALL LIGATURE VEW NOW');
    assert.sameValue('ﬗ'.toLocaleLowerCase(), 'ﬗ', 'ARMENIAN SMALL LIGATURE MEN XEH');
    assert.sameValue('ŉ'.toLocaleLowerCase(), 'ŉ', 'LATIN SMALL LETTER N PRECEDED BY APOSTROPHE');
    assert.sameValue('ΐ'.toLocaleLowerCase(), 'ΐ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS');
    assert.sameValue('ΰ'.toLocaleLowerCase(), 'ΰ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS');
    assert.sameValue('ǰ'.toLocaleLowerCase(), 'ǰ', 'LATIN SMALL LETTER J WITH CARON');
    assert.sameValue('ẖ'.toLocaleLowerCase(), 'ẖ', 'LATIN SMALL LETTER H WITH LINE BELOW');
    assert.sameValue('ẗ'.toLocaleLowerCase(), 'ẗ', 'LATIN SMALL LETTER T WITH DIAERESIS');
    assert.sameValue('ẘ'.toLocaleLowerCase(), 'ẘ', 'LATIN SMALL LETTER W WITH RING ABOVE');
    assert.sameValue('ẙ'.toLocaleLowerCase(), 'ẙ', 'LATIN SMALL LETTER Y WITH RING ABOVE');
    assert.sameValue('ẚ'.toLocaleLowerCase(), 'ẚ', 'LATIN SMALL LETTER A WITH RIGHT HALF RING');
    assert.sameValue('ὐ'.toLocaleLowerCase(), 'ὐ', 'GREEK SMALL LETTER UPSILON WITH PSILI');
    assert.sameValue('ὒ'.toLocaleLowerCase(), 'ὒ', 'GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA');
    assert.sameValue('ὔ'.toLocaleLowerCase(), 'ὔ', 'GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA');
    assert.sameValue('ὖ'.toLocaleLowerCase(), 'ὖ', 'GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI');
    assert.sameValue('ᾶ'.toLocaleLowerCase(), 'ᾶ', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI');
    assert.sameValue('ῆ'.toLocaleLowerCase(), 'ῆ', 'GREEK SMALL LETTER ETA WITH PERISPOMENI');
    assert.sameValue('ῒ'.toLocaleLowerCase(), 'ῒ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΐ'.toLocaleLowerCase(), 'ΐ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῖ'.toLocaleLowerCase(), 'ῖ', 'GREEK SMALL LETTER IOTA WITH PERISPOMENI');
    assert.sameValue('ῗ'.toLocaleLowerCase(), 'ῗ', 'GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῢ'.toLocaleLowerCase(), 'ῢ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA');
    assert.sameValue('ΰ'.toLocaleLowerCase(), 'ΰ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA');
    assert.sameValue('ῤ'.toLocaleLowerCase(), 'ῤ', 'GREEK SMALL LETTER RHO WITH PSILI');
    assert.sameValue('ῦ'.toLocaleLowerCase(), 'ῦ', 'GREEK SMALL LETTER UPSILON WITH PERISPOMENI');
    assert.sameValue('ῧ'.toLocaleLowerCase(), 'ῧ', 'GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI');
    assert.sameValue('ῶ'.toLocaleLowerCase(), 'ῶ', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI');
    assert.sameValue('ᾀ'.toLocaleLowerCase(), 'ᾀ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾁ'.toLocaleLowerCase(), 'ᾁ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾂ'.toLocaleLowerCase(), 'ᾂ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾃ'.toLocaleLowerCase(), 'ᾃ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾄ'.toLocaleLowerCase(), 'ᾄ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾅ'.toLocaleLowerCase(), 'ᾅ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾆ'.toLocaleLowerCase(), 'ᾆ', 'GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾇ'.toLocaleLowerCase(), 'ᾇ', 'GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾈ'.toLocaleLowerCase(), 'ᾀ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾉ'.toLocaleLowerCase(), 'ᾁ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾊ'.toLocaleLowerCase(), 'ᾂ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾋ'.toLocaleLowerCase(), 'ᾃ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾌ'.toLocaleLowerCase(), 'ᾄ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾍ'.toLocaleLowerCase(), 'ᾅ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾎ'.toLocaleLowerCase(), 'ᾆ', 'GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾏ'.toLocaleLowerCase(), 'ᾇ', 'GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾐ'.toLocaleLowerCase(), 'ᾐ', 'GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾑ'.toLocaleLowerCase(), 'ᾑ', 'GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾒ'.toLocaleLowerCase(), 'ᾒ', 'GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾓ'.toLocaleLowerCase(), 'ᾓ', 'GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾔ'.toLocaleLowerCase(), 'ᾔ', 'GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾕ'.toLocaleLowerCase(), 'ᾕ', 'GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾖ'.toLocaleLowerCase(), 'ᾖ', 'GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾗ'.toLocaleLowerCase(), 'ᾗ', 'GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾘ'.toLocaleLowerCase(), 'ᾐ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾙ'.toLocaleLowerCase(), 'ᾑ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾚ'.toLocaleLowerCase(), 'ᾒ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾛ'.toLocaleLowerCase(), 'ᾓ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾜ'.toLocaleLowerCase(), 'ᾔ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾝ'.toLocaleLowerCase(), 'ᾕ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾞ'.toLocaleLowerCase(), 'ᾖ', 'GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾟ'.toLocaleLowerCase(), 'ᾗ', 'GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾠ'.toLocaleLowerCase(), 'ᾠ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI');
    assert.sameValue('ᾡ'.toLocaleLowerCase(), 'ᾡ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾢ'.toLocaleLowerCase(), 'ᾢ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾣ'.toLocaleLowerCase(), 'ᾣ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾤ'.toLocaleLowerCase(), 'ᾤ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾥ'.toLocaleLowerCase(), 'ᾥ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾦ'.toLocaleLowerCase(), 'ᾦ', 'GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾧ'.toLocaleLowerCase(), 'ᾧ', 'GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ᾨ'.toLocaleLowerCase(), 'ᾠ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI');
    assert.sameValue('ᾩ'.toLocaleLowerCase(), 'ᾡ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾪ'.toLocaleLowerCase(), 'ᾢ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾫ'.toLocaleLowerCase(), 'ᾣ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾬ'.toLocaleLowerCase(), 'ᾤ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾭ'.toLocaleLowerCase(), 'ᾥ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI');
    assert.sameValue('ᾮ'.toLocaleLowerCase(), 'ᾦ', 'GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾯ'.toLocaleLowerCase(), 'ᾧ', 'GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI');
    assert.sameValue('ᾳ'.toLocaleLowerCase(), 'ᾳ', 'GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI');
    assert.sameValue('ᾼ'.toLocaleLowerCase(), 'ᾳ', 'GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI');
    assert.sameValue('ῃ'.toLocaleLowerCase(), 'ῃ', 'GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI');
    assert.sameValue('ῌ'.toLocaleLowerCase(), 'ῃ', 'GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI');
    assert.sameValue('ῳ'.toLocaleLowerCase(), 'ῳ', 'GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI');
    assert.sameValue('ῼ'.toLocaleLowerCase(), 'ῳ', 'GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI');
    assert.sameValue('ᾲ'.toLocaleLowerCase(), 'ᾲ', 'GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾴ'.toLocaleLowerCase(), 'ᾴ', 'GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῂ'.toLocaleLowerCase(), 'ῂ', 'GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῄ'.toLocaleLowerCase(), 'ῄ', 'GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ῲ'.toLocaleLowerCase(), 'ῲ', 'GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI');
    assert.sameValue('ῴ'.toLocaleLowerCase(), 'ῴ', 'GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI');
    assert.sameValue('ᾷ'.toLocaleLowerCase(), 'ᾷ', 'GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῇ'.toLocaleLowerCase(), 'ῇ', 'GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI');
    assert.sameValue('ῷ'.toLocaleLowerCase(), 'ῷ', 'GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI');
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