try {
    var namedSym = Symbol('test262');
    var anonSym = Symbol();
    var getter;
    class A {
        get id() {
        }
        get [anonSym]() {
        }
        get [namedSym]() {
        }
        static get id() {
        }
        static get [anonSym]() {
        }
        static get [namedSym]() {
        }
    }
    getter = Object.getOwnPropertyDescriptor(A.prototype, 'id').get;
    assert.sameValue(getter.name, 'get id');
    verifyNotEnumerable(getter, 'name');
    verifyNotWritable(getter, 'name');
    verifyConfigurable(getter, 'name');
    getter = Object.getOwnPropertyDescriptor(A.prototype, anonSym).get;
    assert.sameValue(getter.name, 'get ');
    verifyNotEnumerable(getter, 'name');
    verifyNotWritable(getter, 'name');
    verifyConfigurable(getter, 'name');
    getter = Object.getOwnPropertyDescriptor(A.prototype, namedSym).get;
    assert.sameValue(getter.name, 'get [test262]');
    verifyNotEnumerable(getter, 'name');
    verifyNotWritable(getter, 'name');
    verifyConfigurable(getter, 'name');
    getter = Object.getOwnPropertyDescriptor(A, 'id').get;
    assert.sameValue(getter.name, 'get id');
    verifyNotEnumerable(getter, 'name');
    verifyNotWritable(getter, 'name');
    verifyConfigurable(getter, 'name');
    getter = Object.getOwnPropertyDescriptor(A, anonSym).get;
    assert.sameValue(getter.name, 'get ');
    verifyNotEnumerable(getter, 'name');
    verifyNotWritable(getter, 'name');
    verifyConfigurable(getter, 'name');
    getter = Object.getOwnPropertyDescriptor(A, namedSym).get;
    assert.sameValue(getter.name, 'get [test262]');
    verifyNotEnumerable(getter, 'name');
    verifyNotWritable(getter, 'name');
    verifyConfigurable(getter, 'name');
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