try {
    assert.sameValue(Number('0x0_0'), NaN, '0x0_0');
    assert.sameValue(Number('0x1_1'), NaN, '0x1_1');
    assert.sameValue(Number('0x2_2'), NaN, '0x2_2');
    assert.sameValue(Number('0x3_3'), NaN, '0x3_3');
    assert.sameValue(Number('0x4_4'), NaN, '0x4_4');
    assert.sameValue(Number('0x5_5'), NaN, '0x5_5');
    assert.sameValue(Number('0x6_6'), NaN, '0x6_6');
    assert.sameValue(Number('0x7_7'), NaN, '0x7_7');
    assert.sameValue(Number('0x8_8'), NaN, '0x8_8');
    assert.sameValue(Number('0x9_9'), NaN, '0x9_9');
    assert.sameValue(Number('0xa_a'), NaN, '0xa_a');
    assert.sameValue(Number('0xb_b'), NaN, '0xb_b');
    assert.sameValue(Number('0xc_c'), NaN, '0xc_c');
    assert.sameValue(Number('0xd_d'), NaN, '0xd_d');
    assert.sameValue(Number('0xe_e'), NaN, '0xe_e');
    assert.sameValue(Number('0xf_f'), NaN, '0xf_f');
    assert.sameValue(Number('0xA_A'), NaN, '0xA_A');
    assert.sameValue(Number('0xB_B'), NaN, '0xB_B');
    assert.sameValue(Number('0xC_C'), NaN, '0xC_C');
    assert.sameValue(Number('0xD_D'), NaN, '0xD_D');
    assert.sameValue(Number('0xE_E'), NaN, '0xE_E');
    assert.sameValue(Number('0xF_F'), NaN, '0xF_F');
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