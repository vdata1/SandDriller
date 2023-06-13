try {
    assert.sameValue('abc'.substr(0, false), '', 'start: 0, length: false');
    assert.sameValue('abc'.substr(1, false), '', 'start: 1, length: false');
    assert.sameValue('abc'.substr(2, false), '', 'start: 2, length: false');
    assert.sameValue('abc'.substr(3, false), '', 'start: 3, length: false');
    assert.sameValue('abc'.substr(0, NaN), '', 'start: 0, length: NaN');
    assert.sameValue('abc'.substr(1, NaN), '', 'start: 1, length: NaN');
    assert.sameValue('abc'.substr(2, NaN), '', 'start: 2, length: NaN');
    assert.sameValue('abc'.substr(3, NaN), '', 'start: 3, length: NaN');
    assert.sameValue('abc'.substr(0, ''), '', 'start: 0, length: ""');
    assert.sameValue('abc'.substr(1, ''), '', 'start: 1, length: ""');
    assert.sameValue('abc'.substr(2, ''), '', 'start: 2, length: ""');
    assert.sameValue('abc'.substr(3, ''), '', 'start: 3, length: ""');
    assert.sameValue('abc'.substr(0, null), '', 'start: 0, length: null');
    assert.sameValue('abc'.substr(1, null), '', 'start: 1, length: null');
    assert.sameValue('abc'.substr(2, null), '', 'start: 2, length: null');
    assert.sameValue('abc'.substr(3, null), '', 'start: 3, length: null');
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