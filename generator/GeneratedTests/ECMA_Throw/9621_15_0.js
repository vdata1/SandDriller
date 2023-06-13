try {
    var newObj = {};
    function getFunc() {
        throw () => {
            return () => {
            };
        };
        return 10;
    }
    function setFunc(value) {
        newObj.setVerifyHelpProp = value;
    }
    newObj = Object.create({}, {
        foo1: {
            value: 200,
            enumerable: true,
            writable: true,
            configurable: true
        },
        foo2: {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }
    });
    verifyEqualTo(newObj, 'foo1', 200);
    verifyWritable(newObj, 'foo1');
    verifyEnumerable(newObj, 'foo1');
    verifyConfigurable(newObj, 'foo1');
    verifyEqualTo(newObj, 'foo2', getFunc());
    verifyWritable(newObj, 'foo2', 'setVerifyHelpProp');
    verifyEnumerable(newObj, 'foo2');
    verifyConfigurable(newObj, 'foo2');
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