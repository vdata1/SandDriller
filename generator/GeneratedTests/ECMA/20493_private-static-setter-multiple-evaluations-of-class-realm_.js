try {
    let global1 = $262.createRealm().global;
    let global2 = $262.createRealm().global;
    let eval1 = global1.eval;
    let eval2 = global2.eval;
    let classStringExpression = `(
class {
  static set #m(v) {
    this._v = v;
  }

  static access() {
    this.#m = 'test262';
  }
}
)`;
    let evalClass = function (_eval) {
        return _eval(classStringExpression);
    };
    let C1 = evalClass(eval1);
    let C2 = evalClass(eval2);
    C1.access();
    assert.sameValue(C1._v, 'test262');
    C2.access();
    assert.sameValue(C2._v, 'test262');
    assert.throws(global1.TypeError, function () {
        C1.access.call(C2);
    }, 'invalid access of C1 private static setter');
    assert.throws(global2.TypeError, function () {
        C2.access.call(C1);
    }, 'invalid access of C2 private static setter');
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