try {
    var arg;
    (function fun() {
        let REPLACER = 23;
        arg = arguments;
    }(0, 1, 2));
    function get_func1() {
        throw () => {
            return () => {
            };
        };
        return 10;
    }
    Object.defineProperty(arg, '0', {
        get: get_func1,
        enumerable: true,
        configurable: true
    });
    function get_func2() {
        return 20;
    }
    Object.defineProperties(arg, {
        '0': {
            get: get_func2,
            enumerable: false,
            configurable: false
        }
    });
    verifyEqualTo(arg, '0', get_func2());
    verifyNotEnumerable(arg, '0');
    verifyNotConfigurable(arg, '0');
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