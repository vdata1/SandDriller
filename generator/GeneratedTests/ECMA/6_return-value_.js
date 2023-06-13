try {
    assert.sameValue(new Date(1899, 0).getYear(), -1, '1899: first millisecond');
    assert.sameValue(new Date(1899, 11, 31, 23, 59, 59, 999).getYear(), -1, '1899: final millisecond');
    assert.sameValue(new Date(1900, 0).getYear(), 0, '1900: first millisecond');
    assert.sameValue(new Date(1900, 11, 31, 23, 59, 59, 999).getYear(), 0, '1900: final millisecond');
    assert.sameValue(new Date(1970, 0).getYear(), 70, '1970: first millisecond');
    assert.sameValue(new Date(1970, 11, 31, 23, 59, 59, 999).getYear(), 70, '1970: final millisecond');
    assert.sameValue(new Date(2000, 0).getYear(), 100, '2000: first millisecond');
    assert.sameValue(new Date(2000, 11, 31, 23, 59, 59, 999).getYear(), 100, '2000: final millisecond');
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