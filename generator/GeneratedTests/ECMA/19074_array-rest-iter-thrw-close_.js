try {
    var nextCount = 0;
    var returnCount = 0;
    var thisValue = null;
    var args = null;
    var x;
    var iterable = {};
    var iterator = {
        next: function () {
            nextCount += 1;
            return { done: nextCount > 10 };
        },
        return: function () {
            returnCount += 1;
            thisValue = this;
            args = arguments;
        }
    };
    var thrower = function () {
        throw new Test262Error();
    };
    iterable[Symbol.iterator] = function () {
        return iterator;
    };
    assert.throws(Test262Error, function () {
        0, [...{}[(thrower())]] = iterable;
    });
    assert.sameValue(nextCount, 0);
    assert.sameValue(returnCount, 1);
    assert.sameValue(thisValue, iterator, 'correct `this` value');
    assert(!!args, 'arguments object provided');
    assert.sameValue(args.length, 0, 'zero arguments specified');
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