try {
    var cleanupCallback = function () {
    };
    var finalizationRegistry = new FinalizationRegistry(cleanupCallback);
    assert.sameValue(Object.getPrototypeOf(finalizationRegistry), FinalizationRegistry.prototype);
    assert.notSameValue(finalizationRegistry, cleanupCallback, 'does not return the same function');
    assert.sameValue(finalizationRegistry instanceof FinalizationRegistry, true, 'instanceof');
    for (let key of Object.getOwnPropertyNames(finalizationRegistry)) {
        assert(false, `should not set any own named properties: ${ key }`);
    }
    for (let key of Object.getOwnPropertySymbols(finalizationRegistry)) {
        assert(false, `should not set any own symbol properties: ${ String(key) }`);
    }
    assert.sameValue(Object.getPrototypeOf(finalizationRegistry), FinalizationRegistry.prototype);
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