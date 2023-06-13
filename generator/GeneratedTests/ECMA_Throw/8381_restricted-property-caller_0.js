try {
    var FunctionPrototype = Function.prototype;
    assert.sameValue(FunctionPrototype.hasOwnProperty('caller'), true, 'The result of %FunctionPrototype%.hasOwnProperty("caller") is true');
    var descriptor = Object.getOwnPropertyDescriptor(FunctionPrototype, 'caller');
    assert.sameValue(typeof descriptor.get, 'function', '%FunctionPrototype%.caller is an accessor property');
    assert.sameValue(typeof descriptor.set, 'function', '%FunctionPrototype%.caller is an accessor property');
    assert.sameValue(descriptor.get, descriptor.set, '%FunctionPrototype%.caller getter/setter are both %ThrowTypeError%');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        return FunctionPrototype.caller;
    });
    assert.throws(TypeError, function () {
        FunctionPrototype.caller = {};
    });
    verifyNotEnumerable(FunctionPrototype, 'caller');
    verifyConfigurable(FunctionPrototype, 'caller');
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