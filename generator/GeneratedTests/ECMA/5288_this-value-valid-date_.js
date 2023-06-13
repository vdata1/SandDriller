try {
    var date = new Date(2016, 6, 1);
    var returnValue, expected;
    returnValue = date.setMinutes(23);
    expected = new Date(2016, 6, 1, 0, 23).getTime();
    assert.sameValue(returnValue, expected, 'minute within unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'minute within unit boundary ([[DateValue]] slot)');
    returnValue = date.setMinutes(-1);
    expected = new Date(2016, 5, 30, 23, 59).getTime();
    assert.sameValue(returnValue, expected, 'minute before time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'minute before time unit boundary ([[DateValue]] slot)');
    returnValue = date.setMinutes(60);
    expected = new Date(2016, 6, 1).getTime();
    assert.sameValue(returnValue, expected, 'minute after time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'minute after time unit boundary ([[DateValue]] slot)');
    date = new Date(2016, 6, 1);
    returnValue = date.setMinutes(0, 45);
    expected = new Date(2016, 6, 1, 0, 0, 45).getTime();
    assert.sameValue(returnValue, expected, 'second within unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'second within unit boundary ([[DateValue]] slot)');
    returnValue = date.setMinutes(0, -1);
    expected = new Date(2016, 5, 30, 23, 59, 59).getTime();
    assert.sameValue(returnValue, expected, 'second before time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'second before time unit boundary ([[DateValue]] slot)');
    returnValue = date.setMinutes(0, 60);
    expected = new Date(2016, 5, 30, 23, 1).getTime();
    assert.sameValue(returnValue, expected, 'second after time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'second after time unit boundary ([[DateValue]] slot)');
    date = new Date(2016, 6, 1);
    returnValue = date.setMinutes(0, 0, 345);
    expected = new Date(2016, 6, 1, 0, 0, 0, 345).getTime();
    assert.sameValue(returnValue, expected, 'millisecond within unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'millisecond within unit boundary ([[DateValue]] slot)');
    returnValue = date.setMinutes(0, 0, -1);
    expected = new Date(2016, 5, 30, 23, 59, 59, 999).getTime();
    assert.sameValue(returnValue, expected, 'millisecond before time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'millisecond before time unit boundary ([[DateValue]] slot)');
    returnValue = date.setMinutes(0, 0, 1000);
    expected = new Date(2016, 5, 30, 23, 0, 1).getTime();
    assert.sameValue(returnValue, expected, 'millisecond after time unit boundary (return value)');
    assert.sameValue(date.getTime(), expected, 'millisecond after time unit boundary ([[DateValue]] slot)');
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