try {
    const d1 = new Date(2019, 7, 10, 1, 2, 3, 234);
    const d2 = new Date(2019, 7, 10, 1, 2, 3, 567);
    function assertParts(parts, minute, second, fractionalSecond, message) {
        if (fractionalSecond === null) {
            assert.sameValue(parts.length, 3, `length should be 3, ${ message }`);
        } else {
            assert.sameValue(parts.length, 5, `length should be 5, ${ message }`);
        }
        assert.sameValue(parts[0].value, minute, `minute part value. ${ message }`);
        assert.sameValue(parts[0].type, 'minute', `minute part type. ${ message }`);
        assert.sameValue(parts[1].value, ':', `literal part value. ${ message }`);
        assert.sameValue(parts[1].type, 'literal', `literal part type. ${ message }`);
        assert.sameValue(parts[2].value, second, `second part value. ${ message }`);
        assert.sameValue(parts[2].type, 'second', `second part type. ${ message }`);
        if (fractionalSecond !== null) {
            assert.sameValue(parts[3].value, '.', `literal part value. ${ message }`);
            assert.sameValue(parts[3].type, 'literal', `literal part type. ${ message }`);
            assert.sameValue(parts[4].value, fractionalSecond, `fractionalSecond part value. ${ message }`);
            assert.sameValue(parts[4].type, 'fractionalSecond', `fractionalSecond part type. ${ message }`);
        }
    }
    assert.throws(RangeError, () => {
        new Intl.DateTimeFormat('en', {
            minute: 'numeric',
            second: 'numeric',
            fractionalSecondDigits: 0
        });
    }, 'fractionalSecondDigits 0 should throw RangeError for out of range');
    assert.throws(RangeError, () => {
        new Intl.DateTimeFormat('en', {
            minute: 'numeric',
            second: 'numeric',
            fractionalSecondDigits: 4
        });
    }, 'fractionalSecondDigits 4 should throw RangeError for out of range');
    let dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric'
    });
    assertParts(dtf.formatToParts(d1), '02', '03', null, 'no fractionalSecondDigits round down');
    assertParts(dtf.formatToParts(d2), '02', '03', null, 'no fractionalSecondDigits round down');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: undefined
    });
    assertParts(dtf.formatToParts(d1), '02', '03', null, 'no fractionalSecondDigits round down');
    assertParts(dtf.formatToParts(d2), '02', '03', null, 'no fractionalSecondDigits round down');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 1
    });
    assertParts(dtf.formatToParts(d1), '02', '03', '2', '1 fractionalSecondDigits round down');
    assertParts(dtf.formatToParts(d2), '02', '03', '5', '1 fractionalSecondDigits round down');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 2
    });
    assertParts(dtf.formatToParts(d1), '02', '03', '23', '2 fractionalSecondDigits round down');
    assertParts(dtf.formatToParts(d2), '02', '03', '56', '2 fractionalSecondDigits round down');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3
    });
    assertParts(dtf.formatToParts(d1), '02', '03', '234', '3 fractionalSecondDigits round down');
    assertParts(dtf.formatToParts(d2), '02', '03', '567', '3 fractionalSecondDigits round down');
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