try {
    assert.sameValue(Date.UTC(NaN), NaN, 'year');
    assert.sameValue(Date.UTC(NaN, 0), NaN, 'year');
    assert.sameValue(Date.UTC(1970, NaN), NaN, 'month');
    assert.sameValue(Date.UTC(1970, 0, NaN), NaN, 'date');
    assert.sameValue(Date.UTC(1970, 0, 1, NaN), NaN, 'hours');
    assert.sameValue(Date.UTC(1970, 0, 1, 0, NaN), NaN, 'minutes');
    assert.sameValue(Date.UTC(1970, 0, 1, 0, 0, NaN), NaN, 'seconds');
    assert.sameValue(Date.UTC(1970, 0, 1, 0, 0, 0, NaN), NaN, 'ms');
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