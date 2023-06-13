try {
    const enUS = new Intl.Locale('en-US');
    const enGB = new Intl.Locale(enUS, { region: 'GB' });
    assert.sameValue(enUS.toString(), 'en-US', 'enUS.toString() returns "en-US"');
    assert.sameValue(enGB.toString(), 'en-GB', 'enGB.toString() returns "en-GB"');
    const zhUnihan = new Intl.Locale('zh-u-co-unihan');
    const zhZhuyin = new Intl.Locale(zhUnihan, { collation: 'zhuyin' });
    assert.sameValue(zhUnihan.toString(), 'zh-u-co-unihan', 'zhUnihan.toString() returns "zh-u-co-unihan"');
    assert.sameValue(zhZhuyin.toString(), 'zh-u-co-zhuyin', 'zhZhuyin.toString() returns "zh-u-co-zhuyin"');
    assert.sameValue(zhUnihan.collation, 'unihan', 'The value of zhUnihan.collation is "unihan"');
    assert.sameValue(zhZhuyin.collation, 'zhuyin', 'The value of zhZhuyin.collation is "zhuyin"');
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