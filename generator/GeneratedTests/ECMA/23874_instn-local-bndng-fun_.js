try {
    var global = fnGlobalObject();
    assert.sameValue(typeof test262, 'function', 'function value is hoisted');
    assert.sameValue(test262(), 'test262', 'hoisted function value is correct');
    assert.sameValue(Object.getOwnPropertyDescriptor(global, 'test262'), undefined);
    test262 = null;
    assert.sameValue(test262, null, 'binding is mutable');
    assert.sameValue(Object.getOwnPropertyDescriptor(global, 'test262'), undefined);
    function test262() {
        return 'test262';
    }
    assert.sameValue(test262, null, 'binding is not effected by evaluation of declaration');
    assert.sameValue(Object.getOwnPropertyDescriptor(global, 'test262'), undefined, 'global binding is not effected by evaluation of declaration');
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