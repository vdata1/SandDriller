try {
    Object.defineProperty(Object.prototype, '0', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return 10;
        },
        configurable: true
    });
    Object.defineProperty(Object.prototype, '1', {
        get: function () {
            return 20;
        },
        configurable: true
    });
    Object.defineProperty(Object.prototype, '2', {
        get: function () {
            return 30;
        },
        configurable: true
    });
    assert.sameValue(Array.prototype.indexOf.call({ length: 3 }, 10), 0, 'Array.prototype.indexOf.call({ length: 3 }, 10)');
    assert.sameValue(Array.prototype.indexOf.call({ length: 3 }, 20), 1, 'Array.prototype.indexOf.call({ length: 3 }, 20)');
    assert.sameValue(Array.prototype.indexOf.call({ length: 3 }, 30), 2, 'Array.prototype.indexOf.call({ length: 3 }, 30)');
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