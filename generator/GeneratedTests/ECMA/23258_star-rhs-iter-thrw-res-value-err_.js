try {
    var thrown = new Test262Error();
    var badIter = {};
    var poisonedValue = Object.defineProperty({ done: true }, 'value', {
        get: function () {
            throw thrown;
        }
    });
    badIter[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: false };
            },
            throw: function () {
                return poisonedValue;
            }
        };
    };
    function* g() {
        try {
            yield* badIter;
        } catch (err) {
            caught = err;
        }
    }
    var iter = g();
    var caught;
    iter.next();
    iter.throw();
    assert.sameValue(caught, thrown);
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