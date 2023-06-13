try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            40,
            41,
            42
        ]);
        var result, ctorThis;
        sample.constructor = {};
        sample.constructor[Symbol.species] = function (count) {
            result = arguments;
            ctorThis = this;
            return new TA(count);
        };
        sample.slice(1);
        assert.sameValue(result.length, 1, 'called with 1 arguments');
        assert.sameValue(result[0], 2, '[0] is the new length count');
        assert(ctorThis instanceof sample.constructor[Symbol.species], '`this` value in the @@species fn is an instance of the function itself');
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