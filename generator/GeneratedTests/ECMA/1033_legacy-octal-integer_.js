try {
    assert.sameValue(0, 0, '00');
    assert.sameValue(1, 1, '01');
    assert.sameValue(2, 2, '02');
    assert.sameValue(3, 3, '03');
    assert.sameValue(4, 4, '04');
    assert.sameValue(5, 5, '05');
    assert.sameValue(6, 6, '06');
    assert.sameValue(7, 7, '07');
    assert.sameValue(0, 0, '000');
    assert.sameValue(1, 1, '001');
    assert.sameValue(2, 2, '002');
    assert.sameValue(3, 3, '003');
    assert.sameValue(4, 4, '004');
    assert.sameValue(5, 5, '005');
    assert.sameValue(6, 6, '006');
    assert.sameValue(7, 7, '007');
    assert.sameValue(56, 56);
    assert.sameValue(57, 57);
    assert.sameValue(58, 58);
    assert.sameValue(59, 59);
    assert.sameValue(60, 60);
    assert.sameValue(61, 61);
    assert.sameValue(62, 62);
    assert.sameValue(63, 63);
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