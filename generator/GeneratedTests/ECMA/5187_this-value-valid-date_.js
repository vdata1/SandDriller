try {
    var sec34 = 1467819394000;
    var sec59 = 1467819419000;
    assert.sameValue(new Date(sec34).getUTCSeconds(), 34, 'first millisecond');
    assert.sameValue(new Date(sec34 - 1).getUTCSeconds(), 33, 'previous millisecond');
    assert.sameValue(new Date(sec34 + 999).getUTCSeconds(), 34, 'final millisecond');
    assert.sameValue(new Date(sec34 + 1000).getUTCSeconds(), 35, 'subsequent millisecond');
    assert.sameValue(new Date(sec59).getUTCSeconds(), 59, 'first millisecond (minute boundary)');
    assert.sameValue(new Date(sec59 - 1).getUTCSeconds(), 58, 'previous millisecond (minute boundary)');
    assert.sameValue(new Date(sec59 + 99).getUTCSeconds(), 59, 'final millisecond (minute boundary)');
    assert.sameValue(new Date(sec59 + 1000).getUTCSeconds(), 0, 'subsequent millisecond (minute boundary)');
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