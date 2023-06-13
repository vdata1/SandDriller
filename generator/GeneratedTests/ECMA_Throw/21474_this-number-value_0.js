try {
    var invalidValues = [
        undefined,
        null,
        '5',
        false,
        {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 5;
            }
        }
    ];
    var validValues = [
        5,
        NaN,
        -1234567.89,
        -Infinity
    ];
    invalidValues.forEach(function (value) {
        assert.throws(TypeError, function () {
            var result = Number.prototype.toLocaleString.call(value);
        }, 'Number.prototype.toLocaleString did not reject this = ' + value + '.');
    });
    validValues.forEach(function (value) {
        var Constructor = Number;
        var valueResult = Number.prototype.toLocaleString.call(value);
        var objectResult = Number.prototype.toLocaleString.call(new Constructor(value));
        assert.sameValue(valueResult, objectResult, 'Number.prototype.toLocaleString produces different results for Number value ' + value + ' and corresponding Number object.');
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