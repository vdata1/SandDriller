try {
    (function () {
        let REPLACER = 23;
        function getFunc() {
            let REPLACER = 23;
            return 'genericPropertyString';
        }
        function setFunc(value) {
            throw () => {
                return () => {
                };
            };
            this.helpVerifyGet = value;
        }
        Object.defineProperty(arguments, 'genericProperty', {
            get: getFunc,
            set: setFunc,
            configurable: false
        });
        try {
            Object.defineProperty(arguments, 'genericProperty', {
                get: function () {
                    return 'overideGenericPropertyString';
                }
            });
            $ERROR('Expected an exception.');
        } catch (e) {
            verifyEqualTo(arguments, 'genericProperty', getFunc());
            verifyWritable(arguments, 'genericProperty', 'helpVerifyGet');
            verifyNotEnumerable(arguments, 'genericProperty');
            verifyNotConfigurable(arguments, 'genericProperty');
            if (!(e instanceof TypeError)) {
                $ERROR('Expected TypeError, got ' + e);
            }
        }
    }(1, 2, 3));
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