try {
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 30).getSeconds(), 30, 'first millisecond');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 30, -1).getSeconds(), 29, 'previous millisecond');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 30, 999).getSeconds(), 30, 'final millisecond');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 30, 1000).getSeconds(), 31, 'subsequent millisecond');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 59).getSeconds(), 59, 'first millisecond (minute boundary)');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 59, -1).getSeconds(), 58, 'previous millisecond (minute boundary)');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 59, 999).getSeconds(), 59, 'final millisecond (minute boundary)');
    assert.sameValue(new Date(2016, 6, 6, 14, 16, 59, 1000).getSeconds(), 0, 'subsequent millisecond (minute boundary)');
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