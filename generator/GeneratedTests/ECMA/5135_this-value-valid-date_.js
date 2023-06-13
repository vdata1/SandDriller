try {
    var hour15 = 1467817200000;
    var hour23 = 1467846000000;
    var hourMs = 60 * 60 * 1000;
    assert.sameValue(new Date(hour15).getUTCHours(), 15, 'first millisecond');
    assert.sameValue(new Date(hour15 - 1).getUTCHours(), 14, 'previous millisecond');
    assert.sameValue(new Date(hour15 + hourMs - 1).getUTCHours(), 15, 'final millisecond');
    assert.sameValue(new Date(hour15 + hourMs).getUTCHours(), 16, 'subsequent millisecond');
    assert.sameValue(new Date(hour23).getUTCHours(), 23, 'first millisecond (day boundary)');
    assert.sameValue(new Date(hour23 - 1).getUTCHours(), 22, 'previous millisecond (day boundary)');
    assert.sameValue(new Date(hour23 + hourMs - 1).getUTCHours(), 23, 'final millisecond (day boundary)');
    assert.sameValue(new Date(hour23 + hourMs).getUTCHours(), 0, 'subsequent millisecond (day boundary)');
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