try {
    var ObjProto = Object.prototype;
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Object.setPrototypeOf(ObjProto, {});
    }, 'Object.setPrototypeOf(ObjProto, {}) throws a TypeError');
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Object.setPrototypeOf(ObjProto, Array.prototype);
    }, 'Object.setPrototypeOf(ObjProto, Array.prototype) throws a TypeError');
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Object.setPrototypeOf(ObjProto, ObjProto);
    }, 'Object.setPrototypeOf(ObjProto, ObjProto) throws a TypeError');
    assert.sameValue(Reflect.setPrototypeOf(ObjProto, {}), false, 'Reflect.setPrototypeOf(ObjProto, {}) returns false');
    assert.sameValue(Reflect.setPrototypeOf(ObjProto, Array.prototype), false, 'Reflect.setPrototypeOf(ObjProto, Array.prototype) returns false');
    assert.sameValue(Reflect.setPrototypeOf(ObjProto, ObjProto), false, 'Reflect.setPrototypeOf(ObjProto, ObjProto) returns false');
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