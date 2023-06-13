try {
    const dtf = new Intl.DateTimeFormat();
    const date = Date.now();
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        dtf.formatRangeToParts(start_of_time - 1, date);
    });
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        dtf.formatRangeToParts(date, start_of_time - 1);
    });
    assert.sameValue(typeof dtf.formatRangeToParts(start_of_time, date), 'object');
    assert.sameValue(typeof dtf.formatRangeToParts(start_of_time + 1, date), 'object');
    assert.sameValue(typeof dtf.formatRangeToParts(date, end_of_time - 1), 'object');
    assert.sameValue(typeof dtf.formatRangeToParts(date, end_of_time), 'object');
    assert.throws(RangeError, function () {
        dtf.formatRangeToParts(end_of_time + 1, date);
    });
    assert.throws(RangeError, function () {
        dtf.formatRangeToParts(date, end_of_time + 1);
    });
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