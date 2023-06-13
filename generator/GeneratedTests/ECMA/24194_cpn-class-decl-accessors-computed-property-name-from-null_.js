try {
    class C {
        get [null]() {
            return null;
        }
        set [null](v) {
            return null;
        }
        static get [null]() {
            return null;
        }
        static set [null](v) {
            return null;
        }
    }
    ;
    let c = new C();
    assert.sameValue(c[null], null);
    assert.sameValue(c[null] = null, null);
    assert.sameValue(C[null], null);
    assert.sameValue(C[null] = null, null);
    assert.sameValue(c[String(null)], null);
    assert.sameValue(c[String(null)] = null, null);
    assert.sameValue(C[String(null)], null);
    assert.sameValue(C[String(null)] = null, null);
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