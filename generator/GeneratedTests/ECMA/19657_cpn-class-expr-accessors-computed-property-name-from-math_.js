try {
    let C = class {
        get [1 + 2 - 3 * 4 / 5 ** 6]() {
            return 2.999232;
        }
        set [1 + 2 - 3 * 4 / 5 ** 6](v) {
            return 2.999232;
        }
        static get [1 + 2 - 3 * 4 / 5 ** 6]() {
            return 2.999232;
        }
        static set [1 + 2 - 3 * 4 / 5 ** 6](v) {
            return 2.999232;
        }
    };
    let c = new C();
    assert.sameValue(c[1 + 2 - 3 * 4 / 5 ** 6], 2.999232);
    assert.sameValue(c[1 + 2 - 3 * 4 / 5 ** 6] = 2.999232, 2.999232);
    assert.sameValue(C[1 + 2 - 3 * 4 / 5 ** 6], 2.999232);
    assert.sameValue(C[1 + 2 - 3 * 4 / 5 ** 6] = 2.999232, 2.999232);
    assert.sameValue(c[String(1 + 2 - 3 * 4 / 5 ** 6)], 2.999232);
    assert.sameValue(c[String(1 + 2 - 3 * 4 / 5 ** 6)] = 2.999232, 2.999232);
    assert.sameValue(C[String(1 + 2 - 3 * 4 / 5 ** 6)], 2.999232);
    assert.sameValue(C[String(1 + 2 - 3 * 4 / 5 ** 6)] = 2.999232, 2.999232);
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