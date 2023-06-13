try {
    var args = [];
    var firstResult = {
        done: false,
        value: {}
    };
    var secondResult = {
        done: false,
        value: {}
    };
    var mapFn = function (value, idx) {
        args.push(arguments);
    };
    var items = {};
    var nextResult = firstResult;
    var nextNextResult = secondResult;
    items[Symbol.iterator] = function () {
        return {
            next: function () {
                var result = nextResult;
                nextResult = nextNextResult;
                nextNextResult = { done: true };
                return result;
            }
        };
    };
    Array.from(items, mapFn);
    assert.sameValue(args.length, 2, 'Iteration count');
    assert.sameValue(args[0].length, 2, 'First iteration: arguments length');
    assert.sameValue(args[0][0], firstResult.value, 'First iteration: first argument');
    assert.sameValue(args[0][1], 0, 'First iteration: second argument');
    assert.sameValue(args[1].length, 2, 'Second iteration: arguments length');
    assert.sameValue(args[1][0], secondResult.value, 'Second iteration: first argument');
    assert.sameValue(args[1][1], 1, 'Second iteration: second argument');
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