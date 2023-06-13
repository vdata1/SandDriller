try {
    assert.sameValue('abc'.substr(0, -1), '', '0, -1');
    assert.sameValue('abc'.substr(0, -2), '', '0, -2');
    assert.sameValue('abc'.substr(0, -3), '', '0, -3');
    assert.sameValue('abc'.substr(0, -4), '', '0, -4');
    assert.sameValue('abc'.substr(1, -1), '', '1, -1');
    assert.sameValue('abc'.substr(1, -2), '', '1, -2');
    assert.sameValue('abc'.substr(1, -3), '', '1, -3');
    assert.sameValue('abc'.substr(1, -4), '', '1, -4');
    assert.sameValue('abc'.substr(2, -1), '', '2, -1');
    assert.sameValue('abc'.substr(2, -2), '', '2, -2');
    assert.sameValue('abc'.substr(2, -3), '', '2, -3');
    assert.sameValue('abc'.substr(2, -4), '', '2, -4');
    assert.sameValue('abc'.substr(3, -1), '', '3, -1');
    assert.sameValue('abc'.substr(3, -2), '', '3, -2');
    assert.sameValue('abc'.substr(3, -3), '', '3, -3');
    assert.sameValue('abc'.substr(3, -4), '', '3, -4');
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