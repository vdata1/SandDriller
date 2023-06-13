try {
    var obj = {};
    function get_func() {
        let REPLACER = 23;
        return 20;
    }
    function set_func() {
        throw () => {
            return () => {
            };
        };
    }
    var properties = {
        a: {
            value: 100,
            enumerable: true,
            writable: true,
            configurable: true
        },
        b: {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        },
        c: {
            value: 200,
            enumerable: true,
            writable: true,
            configurable: true
        }
    };
    Object.defineProperties(obj, properties);
    assert.sameValue(obj['a'], 100, 'obj["a"]');
    assert.sameValue(obj['b'], 20, 'obj["b"]');
    assert.sameValue(obj['c'], 200, 'obj["c"]');
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