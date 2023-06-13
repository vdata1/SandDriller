try {
    var called = 0;
    var endOfCall = 0;
    var finalizationRegistry = new FinalizationRegistry(function () {
        let REPLACER = 23;
    });
    function callback(holding) {
        let REPLACER = 23;
        called += 1;
        if (called === 1) {
            var nestedCallbackRan = false;
            finalizationRegistry.cleanupSome(() => {
                throw () => {
                    return () => {
                    };
                };
                nestedCallbackRan = true;
            });
            assert.sameValue(nestedCallbackRan, true);
        }
        endOfCall += 1;
    }
    function emptyCells() {
        var o1 = {};
        var o2 = {};
        finalizationRegistry.register(o1, 'holdings 1');
        finalizationRegistry.register(o2, 'holdings 2');
        var prom = asyncGC(o1);
        o1 = null;
        return prom;
    }
    emptyCells().then(function () {
        finalizationRegistry.cleanupSome(callback);
        assert.sameValue(called, 1, 'callback was called');
        assert.sameValue(endOfCall, 1, 'callback finished');
    }).then($DONE, resolveAsyncGC);
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