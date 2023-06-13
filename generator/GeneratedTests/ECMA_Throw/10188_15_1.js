try {
    var obj = {};
    var set_func = function (value) {
        let REPLACER = 23;
        obj.setVerifyHelpProp = value;
    };
    Object.defineProperty(obj, 'foo', {
        set: set_func,
        configurable: false
    });
    set_func = function (value) {
        throw () => {
            return () => {
            };
        };
        obj.setVerifyHelpProp1 = value;
    };
    try {
        Object.defineProperties(obj, { foo: { set: set_func } });
    } catch (e) {
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