try {
    var namedSym = Symbol('test262');
    var anonSym = Symbol();
    class A {
        *id() {
        }
        *[anonSym]() {
        }
        *[namedSym]() {
        }
        static *id() {
        }
        static *[anonSym]() {
        }
        static *[namedSym]() {
        }
    }
    assert.sameValue(A.prototype.id.name, 'id', 'via IdentifierName');
    verifyNotEnumerable(A.prototype.id, 'name');
    verifyNotWritable(A.prototype.id, 'name');
    verifyConfigurable(A.prototype.id, 'name');
    assert.sameValue(A.prototype[anonSym].name, '', 'via anonymous Symbol');
    verifyNotEnumerable(A.prototype[anonSym], 'name');
    verifyNotWritable(A.prototype[anonSym], 'name');
    verifyConfigurable(A.prototype[anonSym], 'name');
    assert.sameValue(A.prototype[namedSym].name, '[test262]', 'via Symbol');
    verifyNotEnumerable(A.prototype[namedSym], 'name');
    verifyNotWritable(A.prototype[namedSym], 'name');
    verifyConfigurable(A.prototype[namedSym], 'name');
    assert.sameValue(A.id.name, 'id', 'static via IdentifierName');
    verifyNotEnumerable(A.id, 'name');
    verifyNotWritable(A.id, 'name');
    verifyConfigurable(A.id, 'name');
    assert.sameValue(A[anonSym].name, '', 'static via anonymous Symbol');
    verifyNotEnumerable(A[anonSym], 'name');
    verifyNotWritable(A[anonSym], 'name');
    verifyConfigurable(A[anonSym], 'name');
    assert.sameValue(A[namedSym].name, '[test262]', 'static via Symbol');
    verifyNotEnumerable(A[namedSym], 'name');
    verifyNotWritable(A[namedSym], 'name');
    verifyConfigurable(A[namedSym], 'name');
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