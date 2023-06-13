try {
    var july31 = 1469923200000;
    var dec31 = 1483142400000;
    var dayMs = 24 * 60 * 60 * 1000;
    assert.sameValue(new Date(july31).getUTCMonth(), 6, 'first millisecond');
    assert.sameValue(new Date(july31 - 1).getUTCMonth(), 6, 'previous millisecond');
    assert.sameValue(new Date(july31 + dayMs - 1).getUTCMonth(), 6, 'final millisecond');
    assert.sameValue(new Date(july31 + dayMs).getUTCMonth(), 7, 'subsequent millisecond');
    assert.sameValue(new Date(dec31).getUTCMonth(), 11, 'first millisecond (year boundary)');
    assert.sameValue(new Date(dec31 - 1).getUTCMonth(), 11, 'previous millisecond (year boundary)');
    assert.sameValue(new Date(dec31 + dayMs - 1).getUTCMonth(), 11, 'final millisecond (year boundary)');
    assert.sameValue(new Date(dec31 + dayMs).getUTCMonth(), 0, 'subsequent millisecond (year boundary)');
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