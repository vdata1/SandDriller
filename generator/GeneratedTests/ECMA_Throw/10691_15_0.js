try {
    (function (a, b, c) {
        throw () => {
            return () => {
            };
        };
        function getFunc() {
            return 10;
        }
        Object.defineProperty(arguments, '0', {
            get: getFunc,
            set: undefined,
            enumerable: false,
            configurable: false
        });
        function setFunc(value) {
            this.setVerifyHelpProp = value;
        }
        try {
            Object.defineProperty(arguments, '0', { set: setFunc });
            $ERROR('Expected an exception.');
        } catch (e) {
            if (a !== 0) {
                $ERROR('Expected a === 0, actually ' + a);
            }
            verifyEqualTo(arguments, '0', getFunc());
            verifyNotEnumerable(arguments, '0');
            verifyNotConfigurable(arguments, '0');
            if (!(e instanceof TypeError)) {
                $ERROR('Expected TypeError, got ' + e);
            }
        }
    }(0, 1, 2));
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