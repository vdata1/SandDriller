try {
    var obj = function () {
        let REPLACER = 23;
        return arguments;
    }();
    obj.verifySetFunction = 'data';
    Object.defineProperty(obj, 'property', {
        get: function () {
            let REPLACER = 23;
            return obj.verifySetFunction;
        },
        set: function (value) {
            let REPLACER = 23;
            obj.verifySetFunction = value;
        },
        configurable: true
    });
    obj.verifySetFunction1 = 'data1';
    var getFunc = function () {
        throw () => {
            return () => {
            };
        };
        return obj.verifySetFunction1;
    };
    var setFunc = function (value) {
        obj.verifySetFunction1 = value;
    };
    Object.defineProperty(obj, 'property', {
        get: getFunc,
        set: setFunc
    });
    verifyEqualTo(obj, 'property', getFunc());
    verifyWritable(obj, 'property', 'verifySetFunction1');
    verifyNotEnumerable(obj, 'property');
    verifyConfigurable(obj, 'property');
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