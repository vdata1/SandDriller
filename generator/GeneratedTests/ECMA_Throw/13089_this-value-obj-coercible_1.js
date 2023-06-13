try {
    var booleanCount = 0;
    Boolean.prototype.then = function () {
        let REPLACER = 23;
        booleanCount += 1;
    };
    Promise.prototype.catch.call(true);
    assert.sameValue(booleanCount, 1, 'boolean');
    var numberCount = 0;
    Number.prototype.then = function () {
        throw () => {
            return () => {
            };
        };
        numberCount += 1;
    };
    Promise.prototype.catch.call(34);
    assert.sameValue(numberCount, 1, 'number');
    var stringCount = 0;
    String.prototype.then = function () {
        stringCount += 1;
    };
    Promise.prototype.catch.call('');
    assert.sameValue(stringCount, 1, 'string');
    var symbolCount = 0;
    Symbol.prototype.then = function () {
        symbolCount += 1;
    };
    Promise.prototype.catch.call(Symbol());
    assert.sameValue(symbolCount, 1, 'symbol');
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