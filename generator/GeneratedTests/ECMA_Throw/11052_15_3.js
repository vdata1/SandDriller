try {
    var obj = function () {
        let REPLACER = 23;
        return arguments;
    }();
    obj.verifySetFunction = 'data';
    var getFunc = function () {
        let REPLACER = 23;
        return obj.verifySetFunction;
    };
    var setFunc = function (value) {
        let REPLACER = 23;
        obj.verifySetFunction = value;
    };
    Object.defineProperty(obj, 'property', {
        get: getFunc,
        set: setFunc,
        configurable: false
    });
    var result = false;
    try {
        Object.defineProperty(obj, 'property', {
            get: function () {
                throw () => {
                    return () => {
                    };
                };
                return 100;
            }
        });
    } catch (e) {
        result = e instanceof TypeError;
        verifyEqualTo(obj, 'property', getFunc());
        verifyWritable(obj, 'property', 'verifySetFunction');
        verifyNotEnumerable(obj, 'property');
        verifyNotConfigurable(obj, 'property');
    }
    try {
        Object.defineProperty(obj, 'property', {
            set: function (value) {
                obj.verifySetFunction1 = value;
            }
        });
    } catch (e) {
        if (!result) {
            $ERROR('Expected result to be true, actually ' + result);
        }
        verifyEqualTo(obj, 'property', getFunc());
        verifyWritable(obj, 'property', 'verifySetFunction');
        verifyNotEnumerable(obj, 'property');
        verifyNotConfigurable(obj, 'property');
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