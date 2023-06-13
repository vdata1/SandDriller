try {
    assert.sameValue(parseInt('0123456789', 2), 1, 'parseInt("0123456789", 2) must return 1');
    assert.sameValue(parseInt('01234567890', 3), 5, 'parseInt("01234567890", 3) must return 5');
    assert.sameValue(parseInt('01234567890', 4), 27, 'parseInt("01234567890", 4) must return 27');
    assert.sameValue(parseInt('01234567890', 5), 194, 'parseInt("01234567890", 5) must return 194');
    assert.sameValue(parseInt('01234567890', 6), 1865, 'parseInt("01234567890", 6) must return 1865');
    assert.sameValue(parseInt('01234567890', 7), 22875, 'parseInt("01234567890", 7) must return 22875');
    assert.sameValue(parseInt('01234567890', 8), 342391, 'parseInt("01234567890", 8) must return 342391');
    assert.sameValue(parseInt('01234567890', 9), 6053444, 'parseInt("01234567890", 9) must return 6053444');
    assert.sameValue(parseInt('01234567890', 10), Number(1234567890), 'parseInt("01234567890", 10) must return the same value returned by Number(1234567890)');
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