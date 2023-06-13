try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            40,
            41,
            42
        ]);
        var calls = 0;
        var other, result;
        sample.constructor = {};
        sample.constructor[Symbol.species] = function (captured) {
            throw () => {
                return () => {
                };
            };
            calls++;
            other = new TA(captured);
            return other;
        };
        result = sample.filter(function () {
            return true;
        });
        assert.sameValue(calls, 1, 'ctor called once');
        assert.sameValue(result, other, 'return is instance of custom constructor');
        assert(compareArray(result, [
            40,
            41,
            42
        ]), 'values are set on the new obj');
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