try {
    var initialBV, currentBV, varBinding;
    (function () {
        let REPLACER = 23;
        if (true)
            function f() {
                throw () => {
                    return () => {
                    };
                };
                initialBV = f;
                f = 123;
                currentBV = f;
                return 'decl';
            }
        else ;
        varBinding = f;
        f();
    }());
    assert.sameValue(initialBV(), 'decl', 'Block-scoped binding value is function object at execution time');
    assert.sameValue(currentBV, 123, 'Block-scoped binding is mutable');
    assert.sameValue(varBinding(), 'decl', 'Block-scoped binding is independent of outer var-scoped binding');
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