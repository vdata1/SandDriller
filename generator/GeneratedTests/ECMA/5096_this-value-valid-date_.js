try {
    var july6 = 1467763200000;
    var feb29 = 1456704000000;
    var dayMs = 24 * 60 * 60 * 1000;
    assert.sameValue(new Date(july6).getUTCDate(), 6, 'first millisecond');
    assert.sameValue(new Date(july6 - 1).getUTCDate(), 5, 'previous millisecond');
    assert.sameValue(new Date(july6 + dayMs - 1).getUTCDate(), 6, 'final millisecond');
    assert.sameValue(new Date(july6 + dayMs).getUTCDate(), 7, 'subsequent millisecond');
    assert.sameValue(new Date(feb29).getUTCDate(), 29, 'first millisecond (month boundary)');
    assert.sameValue(new Date(feb29 - 1).getUTCDate(), 28, 'previous millisecond (month boundary)');
    assert.sameValue(new Date(feb29 + dayMs - 1).getUTCDate(), 29, 'final millisecond (month boundary)');
    assert.sameValue(new Date(feb29 + dayMs).getUTCDate(), 1, 'subsequent millisecond (month boundary)');
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