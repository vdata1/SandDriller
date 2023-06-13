try {
    let classStringExpression = `(
class {
  static #m() { return 'test262'; }

  static access() {
    return this.#m();
  }
}
)`;
    let evalClass = function (_eval) {
        return _eval(classStringExpression);
    };
    let C1 = evalClass(eval);
    let C2 = evalClass(eval);
    assert.sameValue(C1.access(), 'test262');
    assert.sameValue(C2.access(), 'test262');
    assert.throws(TypeError, function () {
        C1.access.call(C2);
    }, 'invalid access of c1 private static method');
    assert.throws(TypeError, function () {
        C2.access.call(C1);
    }, 'invalid access of c2 private static method');
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