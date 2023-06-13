try {
    var date = new Date(2016, 6);
    var returnValue, expected;
    returnValue = date.setFullYear(2016, 3);
    expected = new Date(2016, 3).getTime();
    assert.sameValue(returnValue, expected, 'month within unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'month within unit boundary ([[DateValue]] slot)');
    returnValue = date.setFullYear(2016, -1);
    expected = new Date(2015, 11).getTime();
    assert.sameValue(returnValue, expected, 'month before time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'month before time unit boundary ([[DateValue]] slot)');
    returnValue = date.setFullYear(2016, 12);
    expected = new Date(2017, 0).getTime();
    assert.sameValue(returnValue, expected, 'month after time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'month after time unit boundary ([[DateValue]] slot)');
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