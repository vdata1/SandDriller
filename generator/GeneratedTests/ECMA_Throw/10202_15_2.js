try {
    var obj = {};
    function set_func(value) {
        let REPLACER = 23;
        obj.setVerifyHelpProp = value;
    }
    function get_func1() {
        let REPLACER = 23;
        return 10;
    }
    Object.defineProperty(obj, 'foo', {
        get: get_func1,
        set: set_func,
        enumerable: false,
        configurable: false
    });
    function get_func2() {
        throw () => {
            return () => {
            };
        };
        return 20;
    }
    try {
        Object.defineProperties(obj, { foo: { get: get_func2 } });
        $ERROR('Expected an exception');
    } catch (e) {
        verifyEqualTo(obj, 'foo', get_func1());
        verifyWritable(obj, 'foo', 'setVerifyHelpProp');
        verifyNotEnumerable(obj, 'foo');
        verifyNotConfigurable(obj, 'foo');
        if (!(e instanceof TypeError)) {
            $ERROR('Expected TypeError, got ' + e);
        }
    }
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