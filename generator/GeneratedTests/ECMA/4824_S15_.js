try {
    function DateValue(year, month, date, hours, minutes, seconds, ms) {
        return new Date(year, month, date, hours, minutes, seconds, ms).valueOf();
    }
    var x;
    x = DateValue(1899, 11, 31, 23, 59, 59);
    assert.sameValue(x, NaN, '(1899, 11, 31, 23, 59, 59)');
    x = DateValue(1899, 12, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(1899, 12, 1, 0, 0, 0)');
    x = DateValue(1900, 0, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(1900, 0, 1, 0, 0, 0)');
    x = DateValue(1969, 11, 31, 23, 59, 59);
    assert.sameValue(x, NaN, '(1969, 11, 31, 23, 59, 59)');
    x = DateValue(1969, 12, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(1969, 12, 1, 0, 0, 0)');
    x = DateValue(1970, 0, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(1970, 0, 1, 0, 0, 0)');
    x = DateValue(1999, 11, 31, 23, 59, 59);
    assert.sameValue(x, NaN, '(1999, 11, 31, 23, 59, 59)');
    x = DateValue(1999, 12, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(1999, 12, 1, 0, 0, 0)');
    x = DateValue(2000, 0, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(2000, 0, 1, 0, 0, 0)');
    x = DateValue(2099, 11, 31, 23, 59, 59);
    assert.sameValue(x, NaN, '(2099, 11, 31, 23, 59, 59)');
    x = DateValue(2099, 12, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(2099, 12, 1, 0, 0, 0)');
    x = DateValue(2100, 0, 1, 0, 0, 0);
    assert.sameValue(x, NaN, '(2100, 0, 1, 0, 0, 0)');
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