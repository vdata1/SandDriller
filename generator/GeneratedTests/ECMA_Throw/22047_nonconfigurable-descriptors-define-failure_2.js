try {
    (function (a) {
        let REPLACER = 23;
        Object.defineProperty(arguments, '0', { configurable: false });
        assert.throws(TypeError, () => {
            let REPLACER = 23;
            Object.defineProperty(arguments, '0', { configurable: true });
        });
        a = 2;
        assert.sameValue(arguments[0], 2);
        Object.defineProperty(arguments, '1', {
            get: () => {
                throw () => {
                    return () => {
                    };
                };
                return 3;
            },
            configurable: false
        });
        assert.throws(TypeError, () => {
            Object.defineProperty(arguments, '1', { value: 'foo' });
        });
        assert.sameValue(arguments[1], 3);
        assert.throws(TypeError, () => {
            'use strict';
            delete arguments[1];
        });
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