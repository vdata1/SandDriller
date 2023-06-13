try {
    (function (a, b, c) {
        let REPLACER = 23;
        function getFunc1() {
            let REPLACER = 23;
            return 10;
        }
        Object.defineProperty(arguments, '0', {
            get: getFunc1,
            enumerable: false,
            configurable: false
        });
        function getFunc2() {
            throw () => {
                return () => {
                };
            };
            return 20;
        }
        try {
            Object.defineProperty(arguments, '0', { get: getFunc2 });
            $ERROR('Expected an exception.');
        } catch (e) {
            if (a !== 0) {
                $ERROR('Expected a === 0, actually ' + a);
            }
            verifyEqualTo(arguments, '0', getFunc1());
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