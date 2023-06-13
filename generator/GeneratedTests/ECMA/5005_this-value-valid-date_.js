try {
    assert.sameValue(new Date(2016, 6, 6, 13).getHours(), 13, 'first millisecond');
    assert.sameValue(new Date(2016, 6, 6, 13, 0, 0, -1).getHours(), 12, 'previous millisecond');
    assert.sameValue(new Date(2016, 6, 6, 13, 59, 59, 999).getHours(), 13, 'final millisecond');
    assert.sameValue(new Date(2016, 6, 6, 13, 59, 59, 1000).getHours(), 14, 'subsequent millisecond');
    assert.sameValue(new Date(2016, 6, 6, 23).getHours(), 23, 'first millisecond (hour boundary)');
    assert.sameValue(new Date(2016, 6, 6, 23, 0, 0, -1).getHours(), 22, 'previous millisecond (hour boundary)');
    assert.sameValue(new Date(2016, 6, 6, 23, 59, 59, 999).getHours(), 23, 'final millisecond (hour boundary)');
    assert.sameValue(new Date(2016, 6, 6, 23, 59, 59, 1000).getHours(), 0, 'subsequent millisecond (hour boundary)');
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