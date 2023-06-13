try {
    var obj = {};
    function get_func() {
        return 10;
    }
    function set_func(value) {
        obj.setVerifyHelpProp = value;
    }
    var properties = {
        foo1: {
            value: 200,
            enumerable: true,
            writable: true,
            configurable: true
        },
        foo2: {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        }
    };
    Object.defineProperties(obj, properties);
    verifyEqualTo(obj, 'foo1', 200);
    verifyWritable(obj, 'foo1');
    verifyEnumerable(obj, 'foo1');
    verifyConfigurable(obj, 'foo1');
    verifyEqualTo(obj, 'foo2', get_func());
    verifyWritable(obj, 'foo2', 'setVerifyHelpProp');
    verifyEnumerable(obj, 'foo2');
    verifyConfigurable(obj, 'foo2');
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