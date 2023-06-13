try {
    var negative1DigitYearDateString = new Date('-000001-07-01T00:00Z').toDateString();
    var negative2DigitYearDateString = new Date('-000012-07-01T00:00Z').toDateString();
    var negative3DigitYearDateString = new Date('-000123-07-01T00:00Z').toDateString();
    var negative4DigitYearDateString = new Date('-001234-07-01T00:00Z').toDateString();
    var negative5DigitYearDateString = new Date('-012345-07-01T00:00Z').toDateString();
    var negative6DigitYearDateString = new Date('-123456-07-01T00:00Z').toDateString();
    assert.sameValue(negative1DigitYearDateString.split(' ')[3], '-0001', 'Date.prototype.toDateString serializes year -1 to "-0001"');
    assert.sameValue(negative2DigitYearDateString.split(' ')[3], '-0012', 'Date.prototype.toDateString serializes year -12 to "-0012"');
    assert.sameValue(negative3DigitYearDateString.split(' ')[3], '-0123', 'Date.prototype.toDateString serializes year -123 to "-0123"');
    assert.sameValue(negative4DigitYearDateString.split(' ')[3], '-1234', 'Date.prototype.toDateString serializes year -1234 to "-1234"');
    assert.sameValue(negative5DigitYearDateString.split(' ')[3], '-12345', 'Date.prototype.toDateString serializes year -12345 to "-12345"');
    assert.sameValue(negative6DigitYearDateString.split(' ')[3], '-123456', 'Date.prototype.toDateString serializes year -123456 to "-123456"');
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