try {
    assert.sameValue(new Date(2016, 6).getMonth(), 6, 'first millisecond');
    assert.sameValue(new Date(2016, 6, 0, 0, 0, 0, -1).getMonth(), 5, 'previous millisecond');
    assert.sameValue(new Date(2016, 6, 31, 23, 59, 59, 999).getMonth(), 6, 'final millisecond');
    assert.sameValue(new Date(2016, 6, 31, 23, 59, 59, 1000).getMonth(), 7, 'subsequent millisecond');
    assert.sameValue(new Date(2016, 11, 31).getMonth(), 11, 'first millisecond (year boundary)');
    assert.sameValue(new Date(2016, 11, 0, 0, 0, 0, -1).getMonth(), 10, 'previous millisecond (year boundary)');
    assert.sameValue(new Date(2016, 11, 31, 23, 59, 59, 999).getMonth(), 11, 'final millisecond (year boundary)');
    assert.sameValue(new Date(2016, 11, 31, 23, 59, 59, 1000).getMonth(), 0, 'subsequent millisecond (year boundary)');
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