try {
    var fn = function () {
        throw () => {
            return () => {
            };
        };
    };
    var finalizationRegistry = new FinalizationRegistry(fn);
    var target = {};
    assert.sameValue(finalizationRegistry.register(target, undefined), undefined, 'undefined');
    assert.sameValue(finalizationRegistry.register(target, null), undefined, 'null');
    assert.sameValue(finalizationRegistry.register(target, false), undefined, 'false');
    assert.sameValue(finalizationRegistry.register(target, true), undefined, 'true');
    assert.sameValue(finalizationRegistry.register(target, Symbol()), undefined, 'symbol');
    assert.sameValue(finalizationRegistry.register(target, {}), undefined, 'object');
    assert.sameValue(finalizationRegistry.register(target, finalizationRegistry), undefined, 'same as finalizationRegistry instance');
    assert.sameValue(finalizationRegistry.register(target, 1), undefined, 'number');
    assert.sameValue(finalizationRegistry.register(target, 'holdings'), undefined, 'string');
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