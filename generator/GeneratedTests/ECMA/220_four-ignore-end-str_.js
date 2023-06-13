try {
    assert.sameValue(unescape('%u'), '%u');
    assert.sameValue(unescape('%u0'), '%u0');
    assert.sameValue(unescape('%u1'), '%u1');
    assert.sameValue(unescape('%u2'), '%u2');
    assert.sameValue(unescape('%u3'), '%u3');
    assert.sameValue(unescape('%u4'), '%u4');
    assert.sameValue(unescape('%u5'), '%u5');
    assert.sameValue(unescape('%u6'), '%u6');
    assert.sameValue(unescape('%u7'), '%u7');
    assert.sameValue(unescape('%u8'), '%u8');
    assert.sameValue(unescape('%u9'), '%u9');
    assert.sameValue(unescape('%ua'), '%ua');
    assert.sameValue(unescape('%uA'), '%uA');
    assert.sameValue(unescape('%ub'), '%ub');
    assert.sameValue(unescape('%uB'), '%uB');
    assert.sameValue(unescape('%uc'), '%uc');
    assert.sameValue(unescape('%uC'), '%uC');
    assert.sameValue(unescape('%ud'), '%ud');
    assert.sameValue(unescape('%uD'), '%uD');
    assert.sameValue(unescape('%ue'), '%ue');
    assert.sameValue(unescape('%uE'), '%uE');
    assert.sameValue(unescape('%uf'), '%uf');
    assert.sameValue(unescape('%uF'), '%uF');
    assert.sameValue(unescape('%u00'), '%u00');
    assert.sameValue(unescape('%u01'), '%u01');
    assert.sameValue(unescape('%u02'), '%u02');
    assert.sameValue(unescape('%u03'), '%u03');
    assert.sameValue(unescape('%u04'), '%u04');
    assert.sameValue(unescape('%u05'), '%u05');
    assert.sameValue(unescape('%u06'), '%u06');
    assert.sameValue(unescape('%u07'), '%u07');
    assert.sameValue(unescape('%u08'), '%u08');
    assert.sameValue(unescape('%u09'), '%u09');
    assert.sameValue(unescape('%u0a'), '%u0a');
    assert.sameValue(unescape('%u0A'), '%u0A');
    assert.sameValue(unescape('%u0b'), '%u0b');
    assert.sameValue(unescape('%u0B'), '%u0B');
    assert.sameValue(unescape('%u0c'), '%u0c');
    assert.sameValue(unescape('%u0C'), '%u0C');
    assert.sameValue(unescape('%u0d'), '%u0d');
    assert.sameValue(unescape('%u0D'), '%u0D');
    assert.sameValue(unescape('%u0e'), '%u0e');
    assert.sameValue(unescape('%u0E'), '%u0E');
    assert.sameValue(unescape('%u0f'), '%u0f');
    assert.sameValue(unescape('%u0F'), '%u0F');
    assert.sameValue(unescape('%u000'), '%u000');
    assert.sameValue(unescape('%u001'), '%u001');
    assert.sameValue(unescape('%u002'), '%u002');
    assert.sameValue(unescape('%u003'), '%u003');
    assert.sameValue(unescape('%u004'), '%u004');
    assert.sameValue(unescape('%u005'), '%u005');
    assert.sameValue(unescape('%u006'), '%u006');
    assert.sameValue(unescape('%u007'), '%u007');
    assert.sameValue(unescape('%u008'), '%u008');
    assert.sameValue(unescape('%u009'), '%u009');
    assert.sameValue(unescape('%u00a'), '%u00a');
    assert.sameValue(unescape('%u00A'), '%u00A');
    assert.sameValue(unescape('%u00b'), '%u00b');
    assert.sameValue(unescape('%u00B'), '%u00B');
    assert.sameValue(unescape('%u00c'), '%u00c');
    assert.sameValue(unescape('%u00C'), '%u00C');
    assert.sameValue(unescape('%u00d'), '%u00d');
    assert.sameValue(unescape('%u00D'), '%u00D');
    assert.sameValue(unescape('%u00e'), '%u00e');
    assert.sameValue(unescape('%u00E'), '%u00E');
    assert.sameValue(unescape('%u00f'), '%u00f');
    assert.sameValue(unescape('%u00F'), '%u00F');
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