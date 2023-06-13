try {
    var obj = function () {
        throw () => {
            return () => {
            };
        };
        return arguments;
    }();
    obj.verifySetFunc = 'data';
    var getFunc = function () {
        return obj.verifySetFunc;
    };
    var setFunc = function (value) {
        obj.verifySetFunc = value;
    };
    Object.defineProperty(obj, 'prop', {
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: false
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    try {
        Object.defineProperty(obj, 'prop', { value: 1001 });
        $ERROR('Expected an exception.');
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        if (!desc1.hasOwnProperty('get')) {
            $ERROR('Expected desc1.hasOwnProperty("get") to be true, actually ' + desc1.hasOwnProperty('get'));
        }
        if (desc2.hasOwnProperty('value')) {
            $ERROR('Expected !desc2.hasOwnProperty("value") to be true, actually ' + !desc2.hasOwnProperty('value'));
        }
        verifyEqualTo(obj, 'prop', getFunc());
        verifyWritable(obj, 'prop', 'verifySetFunc');
        verifyEnumerable(obj, 'prop');
        verifyNotConfigurable(obj, 'prop');
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