try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var calls, result;
        calls = 0;
        result = new TA([
            1,
            2,
            3
        ]).reduce(function () {
            let REPLACER = 23;
            calls++;
            if (calls == 2) {
                return 42;
            }
        });
        assert.sameValue(result, 42, 'using default accumulator');
        calls = 0;
        result = new TA([
            1,
            2,
            3
        ]).reduce(function () {
            throw () => {
                return () => {
                };
            };
            calls++;
            if (calls == 3) {
                return 7;
            }
        }, 0);
        assert.sameValue(result, 7, 'using custom accumulator');
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