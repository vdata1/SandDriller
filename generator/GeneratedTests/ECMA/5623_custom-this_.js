try {
    var fn = function () {
    };
    var unregister = FinalizationRegistry.prototype.unregister;
    var finalizationRegistry = new FinalizationRegistry(fn);
    var target1 = {};
    var target2 = {};
    var target3 = {};
    var token1 = {};
    var token2 = {};
    assert.sameValue(unregister.call(finalizationRegistry, token1), false, 'unregistering token1 from empty finalizationRegistry');
    assert.sameValue(unregister.call(finalizationRegistry, token2), false, 'unregistering token2 from empty finalizationRegistry');
    finalizationRegistry.register(target1, undefined, token1);
    finalizationRegistry.register(target2, undefined, token2);
    finalizationRegistry.register(target3, undefined, token2);
    assert.sameValue(unregister.call(finalizationRegistry, target1), false, 'own target does not work on unregister, #1');
    assert.sameValue(unregister.call(finalizationRegistry, target2), false, 'own target does not work on unregister, #2');
    assert.sameValue(unregister.call(finalizationRegistry, target3), false, 'own target does not work on unregister, #3');
    assert.sameValue(unregister.call(finalizationRegistry, token1), true, 'unregistering token1 from finalizationRegistry');
    assert.sameValue(unregister.call(finalizationRegistry, token1), false, 'unregistering token1 again from finalizationRegistry');
    assert.sameValue(unregister.call(finalizationRegistry, token2), true, 'unregistering token2 to remove target2 and target3');
    assert.sameValue(unregister.call(finalizationRegistry, token2), false, 'unregistering token2 from empty finalizationRegistry');
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