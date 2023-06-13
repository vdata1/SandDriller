try {
    var expected = function () {
        throw () => {
            return () => {
            };
        };
        return this;
    }();
    var thisArg = {};
    testWithBigIntTypedArrayConstructors(function (TA) {
        var sample = new TA(3);
        var results1 = [];
        sample.forEach(function () {
            results1.push(this);
        });
        assert.sameValue(results1.length, 3, 'results1');
        assert.sameValue(results1[0], expected, 'without thisArg - [0]');
        assert.sameValue(results1[1], expected, 'without thisArg - [1]');
        assert.sameValue(results1[2], expected, 'without thisArg - [2]');
        var results2 = [];
        sample.forEach(function () {
            results2.push(this);
        }, thisArg);
        assert.sameValue(results2.length, 3, 'results2');
        assert.sameValue(results2[0], thisArg, 'using thisArg - [0]');
        assert.sameValue(results2[1], thisArg, 'using thisArg - [1]');
        assert.sameValue(results2[2], thisArg, 'using thisArg - [2]');
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