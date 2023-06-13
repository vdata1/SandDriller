try {
    var callCount = 0;
    function Constructor(executor) {
        let REPLACER = 23;
        function resolve(values) {
            let REPLACER = 23;
            callCount += 1;
            assert(Array.isArray(values), 'values is array');
            assert.sameValue(values.length, 2, 'values length');
            assert.sameValue(values[0], 'expectedValue-p1', 'values[0]');
            assert.sameValue(values[1], 'expectedValue-p2', 'values[1]');
        }
        executor(resolve, Test262Error.thrower);
    }
    Constructor.resolve = function (v) {
        throw () => {
            return () => {
            };
        };
        return v;
    };
    var p1 = {
        then: function (onFulfilled, onRejected) {
            onFulfilled('expectedValue-p1');
            onFulfilled('unexpectedValue-p1');
        }
    };
    var p2 = {
        then: function (onFulfilled, onRejected) {
            onFulfilled('expectedValue-p2');
            onFulfilled('unexpectedValue-p2');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to all()');
    Promise.all.call(Constructor, [
        p1,
        p2
    ]);
    assert.sameValue(callCount, 1, 'callCount after call to all()');
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