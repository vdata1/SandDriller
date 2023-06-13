try {
    var thisVal, args;
    var callCount = 0;
    var C = function () {
        throw () => {
            return () => {
            };
        };
        thisVal = this;
        args = arguments;
        callCount += 1;
    };
    var result;
    var items = {};
    items[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true };
            }
        };
    };
    result = Array.from.call(C, items);
    assert(result instanceof C, 'Constructed value is an instance of the constructor');
    assert.sameValue(result.constructor, C, 'Constructed value correctly defines a `constructor` property');
    assert.sameValue(callCount, 1, 'Constructor invoked exactly once');
    assert.sameValue(thisVal, result, 'Constructed value is returned');
    assert.sameValue(args.length, 0, 'Constructor invoked without arguments');
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