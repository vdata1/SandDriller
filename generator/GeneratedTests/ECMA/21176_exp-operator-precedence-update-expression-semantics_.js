try {
    var base = 4;
    assert.sameValue((--base) ** 2, 9, '(--base ** 2) === 9');
    assert.sameValue((++base) ** 2, 16, '(++base ** 2) === 16');
    assert.sameValue(base++ ** 2, 16, '(base++ ** 2) === 16');
    assert.sameValue(base-- ** 2, 25, '(base-- ** 2) === 25');
    base = 4;
    assert.sameValue((--base) ** (--base) ** 2, Math.pow(3, Math.pow(2, 2)), '(--base ** --base ** 2) === Math.pow(3, Math.pow(2, 2))');
    assert.sameValue((++base) ** (++base) ** 2, Math.pow(3, Math.pow(4, 2)), '(++base ** ++base ** 2) === Math.pow(3, Math.pow(4, 2))');
    base = 4;
    assert.sameValue(base-- ** base-- ** 2, Math.pow(4, Math.pow(3, 2)), '(base-- ** base-- ** 2) === Math.pow(4, Math.pow(3, 2))');
    assert.sameValue(base++ ** base++ ** 2, Math.pow(2, Math.pow(3, 2)), '(base++ ** base++ ** 2) === Math.pow(2, Math.pow(3, 2))');
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