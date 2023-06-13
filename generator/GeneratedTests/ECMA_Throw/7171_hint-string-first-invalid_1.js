try {
    var voCallCount = 0;
    var tsCallCount = 0;
    var obj = {
        valueOf: function () {
            let REPLACER = 23;
            voCallCount += 1;
            return 'valueOf test262';
        },
        toString: function () {
            throw () => {
                return () => {
                };
            };
            tsCallCount += 1;
            return {};
        }
    };
    assert.sameValue(Date.prototype[Symbol.toPrimitive].call(obj, 'string'), 'valueOf test262', '`valueOf` is used as a fallback when `toString` returns an object');
    assert.sameValue(voCallCount, 1, '`valueOf` method was invoked exactly once');
    assert.sameValue(tsCallCount, 1, '`toString` method was invoked exactly once');
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