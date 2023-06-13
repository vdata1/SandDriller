try {
    let x = 1;
    class C {
        get [x]() {
            return '2';
        }
        set [x](v) {
            return '2';
        }
        static get [x]() {
            return '2';
        }
        static set [x](v) {
            return '2';
        }
    }
    ;
    let c = new C();
    assert.sameValue(c[x], '2');
    assert.sameValue(c[x] = '2', '2');
    assert.sameValue(C[x], '2');
    assert.sameValue(C[x] = '2', '2');
    assert.sameValue(c[String(x)], '2');
    assert.sameValue(c[String(x)] = '2', '2');
    assert.sameValue(C[String(x)], '2');
    assert.sameValue(C[String(x)] = '2', '2');
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