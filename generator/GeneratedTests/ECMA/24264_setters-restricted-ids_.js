try {
    var x = 0;
    class C {
        set eval(v) {
            x = v;
        }
        set arguments(v) {
            x = v;
        }
        static set eval(v) {
            x = v;
        }
        static set arguments(v) {
            x = v;
        }
    }
    ;
    new C().eval = 1;
    assert.sameValue(x, 1, 'The value of `x` is `1`');
    new C().arguments = 2;
    assert.sameValue(x, 2, 'The value of `x` is `2`');
    C.eval = 3;
    assert.sameValue(x, 3, 'The value of `x` is `3`');
    C.arguments = 4;
    assert.sameValue(x, 4, 'The value of `x` is `4`');
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