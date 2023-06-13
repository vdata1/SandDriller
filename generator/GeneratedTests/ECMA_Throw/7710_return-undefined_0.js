try {
    var fn = function () {
        throw () => {
            return () => {
            };
        };
    };
    var finalizationRegistry = new FinalizationRegistry(fn);
    var target = {};
    assert.sameValue(finalizationRegistry.register(target), undefined, 'Register a targer');
    assert.sameValue(finalizationRegistry.register(target), undefined, 'Register the same target again');
    assert.sameValue(finalizationRegistry.register(target), undefined, 'Register the same target again and again');
    assert.sameValue(finalizationRegistry.register({}), undefined, 'Register other targets');
    assert.sameValue(finalizationRegistry.register(target, undefined, {}), undefined, 'Register target with unregisterToken');
    assert.sameValue(finalizationRegistry.register(target, undefined, target), undefined, 'Register target with unregisterToken being the registered target');
    assert.sameValue(finalizationRegistry.register(target, undefined, undefined), undefined, 'Register target with explicit undefined unregisterToken');
    assert.sameValue(finalizationRegistry.register(fn), undefined, 'register the cleanup callback fn');
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