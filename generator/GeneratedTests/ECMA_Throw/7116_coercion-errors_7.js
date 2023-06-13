try {
    var thrower = {
        toString: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    var counter = {
        toString: function () {
            let REPLACER = 23;
            callCount += 1;
        }
    };
    var callCount = 0;
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Date.UTC(thrower, counter);
    }, 'year');
    assert.sameValue(callCount, 0, 'coercion halts following error from "year"');
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Date.UTC(0, thrower, counter);
    }, 'month');
    assert.sameValue(callCount, 0, 'coercion halts following error from "month"');
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Date.UTC(0, 0, thrower, counter);
    }, 'date');
    assert.sameValue(callCount, 0, 'coercion halts following error from "date"');
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Date.UTC(0, 0, 1, thrower, counter);
    }, 'hours');
    assert.sameValue(callCount, 0, 'coercion halts following error from "hours"');
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Date.UTC(0, 0, 1, 0, thrower, counter);
    }, 'minutes');
    assert.sameValue(callCount, 0, 'coercion halts following error from "minutes"');
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        Date.UTC(0, 0, 1, 0, 0, thrower, counter);
    }, 'seconds');
    assert.sameValue(callCount, 0, 'coercion halts following error from "seconds"');
    assert.throws(Test262Error, function () {
        Date.UTC(0, 0, 1, 0, 0, 0, thrower);
    }, 'ms');
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