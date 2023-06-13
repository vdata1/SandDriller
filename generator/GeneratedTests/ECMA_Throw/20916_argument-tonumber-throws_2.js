try {
    const date = Date.now();
    const objectValueOf = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    const objectToString = {
        toString: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    const dtf = new Intl.DateTimeFormat(['pt-BR']);
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        dtf.formatRangeToParts(objectValueOf, date);
    }, 'valueOf start');
    assert.throws(Test262Error, function () {
        dtf.formatRangeToParts(date, objectValueOf);
    }, 'valueOf end');
    assert.throws(Test262Error, function () {
        dtf.formatRangeToParts(objectToString, date);
    }, 'toString start');
    assert.throws(Test262Error, function () {
        dtf.formatRangeToParts(date, objectToString);
    }, 'toString end');
    const s = Symbol('1');
    assert.throws(TypeError, function () {
        dtf.formatRangeToParts(s, date);
    }, 'symbol start');
    assert.throws(TypeError, function () {
        dtf.formatRangeToParts(date, s);
    }, 'symbol end');
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