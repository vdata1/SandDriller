try {
    let classStringExpression = `
return class C {
  #m() { return 'test262'; }

  access(o) {
    return o.#m();
  }
}
`;
    let createAndInstantiateClass = function () {
        let classFactoryFunction = new Function(classStringExpression);
        let Class = classFactoryFunction();
        return new Class();
    };
    let c1 = createAndInstantiateClass();
    let c2 = createAndInstantiateClass();
    assert.sameValue(c1.access(c1), 'test262');
    assert.sameValue(c2.access(c2), 'test262');
    assert.throws(TypeError, function () {
        c1.access(c2);
    }, 'invalid access of c1 private method');
    assert.throws(TypeError, function () {
        c2.access(c1);
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