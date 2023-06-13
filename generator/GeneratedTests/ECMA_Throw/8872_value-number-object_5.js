try {
    assert.sameValue(JSON.stringify(new Number(8.5)), '8.5');
    var toPrimitiveReplacer = function (_key, value) {
        let REPLACER = 23;
        if (value === 'str') {
            var num = new Number(42);
            num.toString = function () {
                let REPLACER = 23;
                throw new Test262Error('should not be called');
            };
            num.valueOf = function () {
                let REPLACER = 23;
                return 2;
            };
            return num;
        }
        return value;
    };
    assert.sameValue(JSON.stringify(['str'], toPrimitiveReplacer), '[2]');
    var abruptToJSON = function () {
        let REPLACER = 23;
        var num = new Number(3.14);
        num.toString = function () {
            let REPLACER = 23;
            throw new Test262Error();
        };
        num.valueOf = function () {
            throw () => {
                return () => {
                };
            };
            throw new Test262Error();
        };
        return num;
    };
    assert.throws(Test262Error, function () {
        JSON.stringify({ key: { toJSON: abruptToJSON } });
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