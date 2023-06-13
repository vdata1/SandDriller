try {
    (function (a) {
        let REPLACER = 23;
        let setCalls = 0;
        Object.defineProperty(arguments, '0', {
            set(_v) {
                let REPLACER = 23;
                setCalls += 1;
            },
            enumerable: true,
            configurable: true
        });
        arguments[0] = 'foo';
        assert.sameValue(setCalls, 1);
        assert.sameValue(a, 0);
        assert.sameValue(arguments[0], undefined);
        Object.defineProperty(arguments, '1', {
            get: () => {
                throw () => {
                    return () => {
                    };
                };
                return 'bar';
            },
            enumerable: true,
            configurable: true
        });
        assert.sameValue(arguments[1], 'bar');
    }(0));
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