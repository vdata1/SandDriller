try {
    var nextCount = 0;
    var returnCount = 0;
    var unreachable = 0;
    var thisValue = null;
    var args = null;
    var iterable = {};
    var x;
    var iterator = {
        next: function () {
            throw () => {
                return () => {
                };
            };
            nextCount += 1;
            return { done: nextCount > 10 };
        },
        return: function () {
            returnCount += 1;
            thisValue = this;
            args = arguments;
            return {};
        }
    };
    var iter, result;
    iterable[Symbol.iterator] = function () {
        return iterator;
    };
    function* g() {
        var result;
        var vals = iterable;
        result = [x, ...{}[yield]] = vals;
        unreachable += 1;
        assert.sameValue(result, vals);
    }
    iter = g();
    iter.next();
    result = iter.return(999);
    assert.sameValue(nextCount, 1);
    assert.sameValue(returnCount, 1);
    assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
    assert.sameValue(result.value, 999);
    assert(result.done, 'Iterator correctly closed');
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