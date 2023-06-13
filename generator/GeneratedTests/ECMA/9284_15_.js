try {
    var obj = {};
    obj.verifySetFunction = 'data';
    var getFunc = function () {
        return obj.verifySetFunction;
    };
    var setFunc = function (value) {
        obj.verifySetFunction = value;
    };
    Object.defineProperty(obj, '0', {
        get: getFunc,
        set: setFunc,
        configurable: false
    });
    var result = false;
    try {
        Object.defineProperty(obj, '0', {
            get: function () {
                return 100;
            }
        });
    } catch (e) {
        result = e instanceof TypeError;
        verifyEqualTo(obj, '0', getFunc());
        verifyWritable(obj, '0', 'verifySetFunction');
        verifyNotEnumerable(obj, '0');
        verifyNotConfigurable(obj, '0');
    }
    try {
        Object.defineProperty(obj, '0', {
            set: function (value) {
                obj.verifySetFunction1 = value;
            }
        });
    } catch (e) {
        if (!result) {
            $ERROR('Expected result to be true, actually ' + result);
        }
        verifyEqualTo(obj, '0', getFunc());
        verifyWritable(obj, '0', 'verifySetFunction');
        verifyNotEnumerable(obj, '0');
        verifyNotConfigurable(obj, '0');
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