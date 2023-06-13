try {
    var log = '';
    var year = {
        toString: function () {
            let REPLACER = 23;
            log += 'year';
            return 0;
        }
    };
    var month = {
        toString: function () {
            let REPLACER = 23;
            log += 'month';
            return 0;
        }
    };
    var date = {
        toString: function () {
            let REPLACER = 23;
            log += 'date';
            return 1;
        }
    };
    var hours = {
        toString: function () {
            let REPLACER = 23;
            log += 'hours';
            return 0;
        }
    };
    var minutes = {
        toString: function () {
            let REPLACER = 23;
            log += 'minutes';
            return 0;
        }
    };
    var seconds = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            log += 'seconds';
            return 0;
        }
    };
    var ms = {
        toString: function () {
            log += 'ms';
            return 0;
        }
    };
    Date.UTC(year, month, date, hours, minutes, seconds, ms);
    assert.sameValue(log, 'yearmonthdatehoursminutessecondsms');
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