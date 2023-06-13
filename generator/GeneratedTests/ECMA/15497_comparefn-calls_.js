try {
    var expectedThis = function () {
        return this;
    }();
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            42,
            42,
            42,
            42,
            42
        ]);
        var calls = [];
        var comparefn = function () {
            calls.push([
                this,
                arguments
            ]);
        };
        sample.sort(comparefn);
        assert(calls.length > 0, 'calls comparefn');
        calls.forEach(function (args) {
            assert.sameValue(args[0], expectedThis, 'comparefn is called no specific this');
            assert.sameValue(args[1].length, 2, 'comparefn is always called with 2 args');
            assert.sameValue(args[1][0], 42, 'x is a listed value');
            assert.sameValue(args[1][0], 42, 'y is a listed value');
        });
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