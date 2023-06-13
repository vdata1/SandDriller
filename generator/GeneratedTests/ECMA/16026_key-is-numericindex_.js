try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            42,
            42
        ]);
        assert.sameValue(Reflect.defineProperty(sample, '0', {
            value: 8,
            configurable: true,
            enumerable: true,
            writable: true
        }), true);
        assert.sameValue(sample[0], 8, 'property value was set');
        let descriptor0 = Object.getOwnPropertyDescriptor(sample, '0');
        assert.sameValue(descriptor0.value, 8);
        assert.sameValue(descriptor0.configurable, true);
        assert.sameValue(descriptor0.enumerable, true);
        assert.sameValue(descriptor0.writable, true);
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