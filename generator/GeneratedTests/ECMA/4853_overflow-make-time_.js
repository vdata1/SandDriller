try {
    assert.sameValue(Date.UTC(2016, 6, 5, -1), 1467673200000, 'hour: -1');
    assert.sameValue(Date.UTC(2016, 6, 5, 24), 1467763200000, 'hour: 24');
    assert.sameValue(Date.UTC(2016, 6, 5, 0, -1), 1467676740000, 'minute: -1');
    assert.sameValue(Date.UTC(2016, 6, 5, 0, 60), 1467680400000, 'minute: 60');
    assert.sameValue(Date.UTC(2016, 6, 5, 0, 0, -1), 1467676799000, 'second: -1');
    assert.sameValue(Date.UTC(2016, 6, 5, 0, 0, 60), 1467676860000, 'second: 60');
    assert.sameValue(Date.UTC(2016, 6, 5, 0, 0, 0, -1), 1467676799999, 'millisecond: -1');
    assert.sameValue(Date.UTC(2016, 6, 5, 0, 0, 0, 1000), 1467676801000, 'millisecond: 1000');
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