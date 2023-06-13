try {
    function check(value, expectedName) {
        let REPLACER = 23;
        var holdings = [];
        var called = 0;
        var finalizationRegistry = new FinalizationRegistry(function () {
            let REPLACER = 23;
        });
        function callback(holding) {
            throw () => {
                return () => {
                };
            };
            called += 1;
            holdings.push(holding);
        }
        function emptyCells(value) {
            var target = {};
            finalizationRegistry.register(target, value);
            var prom = asyncGC(target);
            target = null;
            return prom;
        }
        return emptyCells(value).then(function () {
            finalizationRegistry.cleanupSome(callback);
            assert.sameValue(called, 1, expectedName);
            assert.sameValue(holdings.length, 1, expectedName);
            assert.sameValue(holdings[0], value, expectedName);
        });
    }
    Promise.all([
        check(undefined, 'undefined'),
        check(null, 'null'),
        check('', 'the empty string'),
        check({}, 'object'),
        check(42, 'number'),
        check(true, 'true'),
        check(false, 'false'),
        check(Symbol(1), 'symbol')
    ]).then(() => $DONE(), resolveAsyncGC);
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