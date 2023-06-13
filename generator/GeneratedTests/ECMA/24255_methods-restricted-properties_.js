try {
    class Class {
        method() {
        }
        get accessor() {
        }
        set accessor(x) {
        }
    }
    ;
    var instance = new Class();
    var accessor = Object.getOwnPropertyDescriptor(Class.prototype, 'accessor');
    assert.sameValue(instance.method.hasOwnProperty('caller'), false, 'No "caller" own property (method)');
    assert.sameValue(instance.method.hasOwnProperty('arguments'), false, 'No "arguments" own property (method)');
    assert.sameValue(accessor.get.hasOwnProperty('caller'), false, 'No "caller" own property ("get" accessor)');
    assert.sameValue(accessor.get.hasOwnProperty('arguments'), false, 'No "arguments" own property ("get" accessor)');
    assert.sameValue(accessor.set.hasOwnProperty('caller'), false, 'No "caller" own property ("set" accessor)');
    assert.sameValue(accessor.set.hasOwnProperty('arguments'), false, 'No "arguments" own property ("set" accessor)');
    assert.throws(TypeError, function () {
        return instance.method.caller;
    });
    assert.throws(TypeError, function () {
        instance.method.caller = {};
    });
    assert.throws(TypeError, function () {
        return instance.method.arguments;
    });
    assert.throws(TypeError, function () {
        instance.method.arguments = {};
    });
    assert.throws(TypeError, function () {
        return accessor.get.caller;
    });
    assert.throws(TypeError, function () {
        accessor.get.caller = {};
    });
    assert.throws(TypeError, function () {
        return accessor.get.arguments;
    });
    assert.throws(TypeError, function () {
        accessor.get.arguments = {};
    });
    assert.throws(TypeError, function () {
        return accessor.set.caller;
    });
    assert.throws(TypeError, function () {
        accessor.set.caller = {};
    });
    assert.throws(TypeError, function () {
        return accessor.set.arguments;
    });
    assert.throws(TypeError, function () {
        accessor.set.arguments = {};
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