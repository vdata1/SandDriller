try {
    var C = class C {
    };
    assert.sameValue(typeof C, 'function', '`typeof C` is `\'function\'`');
    assert.sameValue(Object.getPrototypeOf(C.prototype), Object.prototype, '`Object.getPrototypeOf(C.prototype)` returns `Object.prototype`');
    assert.sameValue(Object.getPrototypeOf(C), Function.prototype, '`Object.getPrototypeOf(C)` returns `Function.prototype`');
    assert.sameValue(C.name, 'C', 'The value of `C.name` is `\'C\'`');
    class D {
    }
    assert.sameValue(typeof D, 'function', '`typeof D` is `\'function\'`');
    assert.sameValue(Object.getPrototypeOf(D.prototype), Object.prototype, '`Object.getPrototypeOf(D.prototype)` returns `Object.prototype`');
    assert.sameValue(Object.getPrototypeOf(D), Function.prototype, '`Object.getPrototypeOf(D)` returns `Function.prototype`');
    assert.sameValue(D.name, 'D', 'The value of `D.name` is `\'D\'`');
    class D2 {
        constructor() {
        }
    }
    assert.sameValue(D2.name, 'D2', 'The value of `D2.name` is `\'D2\'`');
    var E = class {
    };
    assert.sameValue(E.name, 'E', 'The value of `E.name` is `\'E\'`');
    var F = class {
        constructor() {
        }
    };
    assert.sameValue(F.name, 'F', 'The value of `F.name` is `\'F\'`');
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