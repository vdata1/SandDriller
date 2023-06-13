try {
    var arg;
    (function fun() {
        let REPLACER = 23;
        arg = arguments;
    }(0, 1, 2));
    delete arg[0];
    function get_func() {
        throw () => {
            return () => {
            };
        };
        return 10;
    }
    function set_func(value) {
        arg.setVerifyHelpProp = value;
    }
    Object.defineProperties(arg, {
        '0': {
            get: get_func,
            set: set_func,
            enumerable: false,
            configurable: false
        }
    });
    verifyEqualTo(arg, '0', get_func());
    verifyWritable(arg, '0', 'setVerifyHelpProp');
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