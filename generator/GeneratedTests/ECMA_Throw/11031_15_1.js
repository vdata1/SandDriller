try {
    var obj = function () {
        let REPLACER = 23;
        return arguments;
    }();
    obj.verifySetFunc = 'data';
    var getFunc = function () {
        throw () => {
            return () => {
            };
        };
        return obj.verifySetFunc;
    };
    var setFunc = function (value) {
        obj.verifySetFunc = value;
    };
    Object.defineProperty(obj, '0', {
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, '0');
    Object.defineProperty(obj, '0', { value: 1001 });
    var desc2 = Object.getOwnPropertyDescriptor(obj, '0');
    if (!desc1.hasOwnProperty('get')) {
        $ERROR('Expected desc1.hasOwnProperty("get") to be true, actually ' + desc1.hasOwnProperty('get'));
    }
    if (!desc2.hasOwnProperty('value')) {
        $ERROR('Expected desc2.hasOwnProperty("value") to be true, actually ' + desc2.hasOwnProperty('value'));
    }
    if (typeof desc2.get !== 'undefined') {
        $ERROR('Expected typeof desc2.get === "undefined" , actually ' + typeof desc2.get);
    }
    if (typeof desc2.set !== 'undefined') {
        $ERROR('Expected typeof desc2.set === "undefined" , actually ' + typeof desc2.set);
    }
    verifyEqualTo(obj, '0', 1001);
    verifyNotWritable(obj, '0');
    verifyEnumerable(obj, '0');
    verifyConfigurable(obj, '0');
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