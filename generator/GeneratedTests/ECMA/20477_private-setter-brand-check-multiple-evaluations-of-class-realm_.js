try {
    let realm1 = $262.createRealm();
    let realm2 = $262.createRealm();
    let eval1 = realm1.global.eval;
    let eval2 = realm2.global.eval;
    let classStringExpression = `(
class {
  set #m(v) { this._v = v; }

  access(o, v) {
    o.#m = v;
  }
}
)`;
    let createAndInstantiateClass = function (_eval) {
        return new (_eval(classStringExpression))();
    };
    let c1 = createAndInstantiateClass(eval1);
    let c2 = createAndInstantiateClass(eval2);
    c1.access(c1, 'test262');
    assert.sameValue(c1._v, 'test262');
    c2.access(c2, 'test262');
    assert.sameValue(c2._v, 'test262');
    assert.throws(realm1.global.TypeError, function () {
        c1.access(c2, 'foo');
    }, 'invalid access of c1 private method');
    assert.throws(realm2.global.TypeError, function () {
        c2.access(c1, 'foo');
    }, 'invalid access of c2 private method');
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