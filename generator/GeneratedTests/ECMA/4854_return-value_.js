try {
    assert.sameValue(Date.UTC(1970), 0, '1970');
    assert.sameValue(Date.UTC(1970, 0), 0, '1970, 0');
    assert.sameValue(Date.UTC(2016, 0), 1451606400000, '2016, 0');
    assert.sameValue(Date.UTC(2016, 6), 1467331200000, '2016, 6');
    assert.sameValue(Date.UTC(2016, 6, 1), 1467331200000, '2016, 6, 1');
    assert.sameValue(Date.UTC(2016, 6, 5), 1467676800000, '2016, 6, 5');
    assert.sameValue(Date.UTC(2016, 6, 5, 0), 1467676800000, '2016, 6, 5, 0');
    assert.sameValue(Date.UTC(2016, 6, 5, 15), 1467730800000, '2016, 6, 5, 15');
    assert.sameValue(Date.UTC(2016, 6, 5, 15, 0), 1467730800000, '2016, 6, 5, 15, 0');
    assert.sameValue(Date.UTC(2016, 6, 5, 15, 34), 1467732840000, '2016, 6, 5, 15, 34');
    assert.sameValue(Date.UTC(2016, 6, 5, 15, 34, 0), 1467732840000, '2016, 6, 5, 15, 34, 0');
    assert.sameValue(Date.UTC(2016, 6, 5, 15, 34, 45), 1467732885000, '2016, 6, 5, 15, 34, 45');
    assert.sameValue(Date.UTC(2016, 6, 5, 15, 34, 45, 0), 1467732885000, '2016, 6, 5, 15, 34, 45, 0');
    assert.sameValue(Date.UTC(2016, 6, 5, 15, 34, 45, 876), 1467732885876, '2016, 6, 5, 15, 34, 45, 0');
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