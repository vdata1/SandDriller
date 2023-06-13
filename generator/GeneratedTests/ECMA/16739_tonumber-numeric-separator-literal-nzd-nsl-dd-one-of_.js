try {
    assert.sameValue(parseFloat('1_0'), 1);
    assert.sameValue(parseFloat('1_1'), 1);
    assert.sameValue(parseFloat('2_2'), 2);
    assert.sameValue(parseFloat('3_3'), 3);
    assert.sameValue(parseFloat('4_4'), 4);
    assert.sameValue(parseFloat('5_5'), 5);
    assert.sameValue(parseFloat('6_6'), 6);
    assert.sameValue(parseFloat('7_7'), 7);
    assert.sameValue(parseFloat('8_8'), 8);
    assert.sameValue(parseFloat('9_9'), 9);
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