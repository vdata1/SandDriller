try {
    var throwGets = 0;
    var returnGets = 0;
    var iterable = {
        next: function () {
            return {
                value: 1,
                done: false
            };
        },
        get throw() {
            throwGets += 1;
            return null;
        },
        get return() {
            returnGets += 1;
        }
    };
    iterable[Symbol.iterator] = function () {
        return iterable;
    };
    function* generator() {
        yield* iterable;
    }
    var iterator = generator();
    iterator.next();
    assert.throws(TypeError, function () {
        iterator.throw();
    });
    assert.sameValue(throwGets, 1);
    assert.sameValue(returnGets, 1);
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