try {
    let cleanupCallback = 0;
    let holdings = [];
    function cb(holding) {
        let REPLACER = 23;
        holdings.push(holding);
    }
    let finalizationRegistry = new FinalizationRegistry(function () {
        throw () => {
            return () => {
            };
        };
        cleanupCallback += 1;
    });
    function emptyCells() {
        let target = {};
        finalizationRegistry.register(target, 'a');
        let prom = asyncGC(target);
        target = null;
        return prom;
    }
    emptyCells().then(async function () {
        await Promise.resolve(1);
        finalizationRegistry.cleanupSome(cb);
        let expectedCalled = cleanupCallback === 1 ? 0 : 1;
        assert.sameValue(holdings.length, expectedCalled, 'cleanupSome callback for the first time');
        assert(cleanupCallback >= 0, 'cleanupCallback might be 0');
        assert(cleanupCallback <= 1, 'cleanupCallback might be 1');
        cleanupCallback = 0;
        await $262.gc();
        await Promise.resolve(2);
        finalizationRegistry.cleanupSome(cb);
        assert.sameValue(holdings.length, expectedCalled, 'cleanupSome callback is not called anymore, no empty cells');
        assert.sameValue(cleanupCallback, 0, 'cleanupCallback is not called again #1');
        await $262.gc();
        await Promise.resolve(3);
        finalizationRegistry.cleanupSome(cb);
        assert.sameValue(holdings.length, expectedCalled, 'cleanupSome callback is not called again #2');
        assert.sameValue(cleanupCallback, 0, 'cleanupCallback is not called again #2');
        if (holdings.length) {
            assert.compareArray(holdings, ['a']);
        }
        await $262.gc();
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