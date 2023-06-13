try {
    class A {
        static name() {
            $ERROR('Static method should not be executed during definition');
        }
    }
    assert.sameValue(typeof A.name, 'function');
    var attr = 'name';
    class B {
        static [attr]() {
            $ERROR('Static method defined via computed property should not be executed ' + 'during definition');
        }
    }
    assert.sameValue(typeof B.name, 'function');
    var isDefined = false;
    class C {
        static get name() {
            if (isDefined) {
                return 'pass';
            }
            $ERROR('Static `get` accessor should not be executed during definition');
        }
    }
    isDefined = true;
    assert.sameValue(C.name, 'pass');
    class D {
        static set name(_) {
            $ERROR('Static `set` accessor should not be executed during definition');
        }
    }
    assert.sameValue(D.name, undefined);
    class E {
        static *name() {
            $ERROR('Static GeneratorMethod should not be executed during definition');
        }
    }
    assert.sameValue(typeof E.name, 'function');
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