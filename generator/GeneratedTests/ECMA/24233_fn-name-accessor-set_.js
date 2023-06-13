try {
    var namedSym = Symbol('test262');
    var anonSym = Symbol();
    var setter;
    class A {
        set id(_) {
        }
        set [anonSym](_) {
        }
        set [namedSym](_) {
        }
        static set id(_) {
        }
        static set [anonSym](_) {
        }
        static set [namedSym](_) {
        }
    }
    setter = Object.getOwnPropertyDescriptor(A.prototype, 'id').set;
    assert.sameValue(setter.name, 'set id');
    verifyNotEnumerable(setter, 'name');
    verifyNotWritable(setter, 'name');
    verifyConfigurable(setter, 'name');
    setter = Object.getOwnPropertyDescriptor(A.prototype, anonSym).set;
    assert.sameValue(setter.name, 'set ');
    verifyNotEnumerable(setter, 'name');
    verifyNotWritable(setter, 'name');
    verifyConfigurable(setter, 'name');
    setter = Object.getOwnPropertyDescriptor(A.prototype, namedSym).set;
    assert.sameValue(setter.name, 'set [test262]');
    verifyNotEnumerable(setter, 'name');
    verifyNotWritable(setter, 'name');
    verifyConfigurable(setter, 'name');
    setter = Object.getOwnPropertyDescriptor(A, 'id').set;
    assert.sameValue(setter.name, 'set id');
    verifyNotEnumerable(setter, 'name');
    verifyNotWritable(setter, 'name');
    verifyConfigurable(setter, 'name');
    setter = Object.getOwnPropertyDescriptor(A, anonSym).set;
    assert.sameValue(setter.name, 'set ');
    verifyNotEnumerable(setter, 'name');
    verifyNotWritable(setter, 'name');
    verifyConfigurable(setter, 'name');
    setter = Object.getOwnPropertyDescriptor(A, namedSym).set;
    assert.sameValue(setter.name, 'set [test262]');
    verifyNotEnumerable(setter, 'name');
    verifyNotWritable(setter, 'name');
    verifyConfigurable(setter, 'name');
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