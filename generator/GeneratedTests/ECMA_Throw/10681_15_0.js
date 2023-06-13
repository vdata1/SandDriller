try {
    (function (a, b, c) {
        throw () => {
            return () => {
            };
        };
        Object.defineProperty(arguments, '0', {
            value: 10,
            writable: false,
            enumerable: true,
            configurable: false
        });
        try {
            Object.defineProperty(arguments, '0', { enumerable: false });
            $ERROR('Expected an exception.');
        } catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('Expected TypeError, got ' + e);
            }
            verifyEqualTo(arguments, '0', 10);
            verifyNotWritable(arguments, '0');
            verifyEnumerable(arguments, '0');
            verifyNotConfigurable(arguments, '0');
            if (a !== 10) {
                $ERROR('Expected "a === 10", actually ' + a);
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