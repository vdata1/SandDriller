try {
    var source = [
        42,
        43,
        44
    ];
    testWithTypedArrayConstructors(function (TA) {
        var results = [];
        var mapfn = function (kValue, k) {
            results.push({
                kValue: kValue,
                k: k,
                argsLength: arguments.length
            });
        };
        TA.from(source, mapfn);
        assert.sameValue(results.length, 3);
        assert.sameValue(results[0].kValue, 42);
        assert.sameValue(results[0].k, 0);
        assert.sameValue(results[0].argsLength, 2);
        assert.sameValue(results[1].kValue, 43);
        assert.sameValue(results[1].k, 1);
        assert.sameValue(results[1].argsLength, 2);
        assert.sameValue(results[2].kValue, 44);
        assert.sameValue(results[2].k, 2);
        assert.sameValue(results[2].argsLength, 2);
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