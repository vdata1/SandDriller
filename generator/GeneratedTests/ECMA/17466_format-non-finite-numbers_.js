try {
    var hasUnicodeDigits = new RegExp('.*([' + '0-9٠-٩۰-۹߀-߉०-९' + '০-৯੦-੯૦-૯୦-୯௦-௯' + '౦-౯೦-೯൦-൯๐-๙໐-໙' + '༠-༩၀-၉႐-႙០-៩᠐-᠙' + '᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙' + '᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙' + '꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９' + ']|' + '\uD801[\uDCA0-\uDCA9]|' + '\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9]|' + '\uD805[\uDEC0-\uDEC9]|' + '\uD835[\uDFCE-\uDFFF])');
    var formatter = new Intl.NumberFormat();
    var formattedNaN = formatter.format(NaN);
    var formattedInfinity = formatter.format(Infinity);
    var formattedNegativeInfinity = formatter.format(-Infinity);
    assert.notSameValue(formattedNaN, formattedInfinity, 'Intl.NumberFormat formats NaN and Infinity the same way.');
    assert.notSameValue(formattedNaN, formattedNegativeInfinity, 'Intl.NumberFormat formats NaN and negative Infinity the same way.');
    assert.notSameValue(formattedInfinity, formattedNegativeInfinity, 'Intl.NumberFormat formats Infinity and negative Infinity the same way.');
    assert.sameValue(hasUnicodeDigits.test(formattedNaN), false, 'Intl.NumberFormat formats NaN using a digit.');
    assert.sameValue(hasUnicodeDigits.test(formattedInfinity), false, 'Intl.NumberFormat formats Infinity using a digit.');
    assert.sameValue(hasUnicodeDigits.test(formattedNegativeInfinity), false, 'Intl.NumberFormat formats negative Infinity using a digit.');
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