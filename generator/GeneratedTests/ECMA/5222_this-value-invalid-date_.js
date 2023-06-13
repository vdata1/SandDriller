try {
    var date = new Date(NaN);
    var expected, result;
    result = date.setFullYear(2016);
    expected = new Date(2016, 0).getTime();
    assert.sameValue(result, expected, 'return value (year)');
    assert.sameValue(date.getTime(), expected, '[[DateValue]] internal slot (year)');
    date = new Date(NaN);
    result = date.setFullYear(2016, 6);
    expected = new Date(2016, 6).getTime();
    assert.sameValue(result, expected, 'return value (month)');
    assert.sameValue(date.getTime(), expected, '[[DateValue]] internal slot (month)');
    date = new Date(NaN);
    result = date.setFullYear(2016, 6, 7);
    expected = new Date(2016, 6, 7).getTime();
    assert.sameValue(result, expected, 'return value (date)');
    assert.sameValue(date.getTime(), expected, '[[DateValue]] internal slot (month)');
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