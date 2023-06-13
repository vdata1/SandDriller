try {
    assert.sameValue(Number('0b2'), NaN, 'invalid digit');
    assert.sameValue(Number('00b0'), NaN, 'leading zero');
    assert.sameValue(Number('0b'), NaN, 'omitted digits');
    assert.sameValue(Number('+0b1'), NaN, 'plus sign');
    assert.sameValue(Number('-0b1'), NaN, 'minus sign');
    assert.sameValue(Number('0b1.01'), NaN, 'fractional part');
    assert.sameValue(Number('0b1e10'), NaN, 'exponent part');
    assert.sameValue(Number('0b1e-10'), NaN, 'exponent part with a minus sign');
    assert.sameValue(Number('0b1e+10'), NaN, 'exponent part with a plus sign');
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