try {
    (function (a, b, c) {
        Object.defineProperty(arguments, 'genericProperty', {
            value: 1001,
            writable: false,
            configurable: false
        });
        try {
            Object.defineProperty(arguments, 'genericProperty', { value: 1002 });
            $ERROR('Expected an exception.');
        } catch (e) {
            if (b !== 2) {
                $ERROR('Expected "b === 2;", actually ' + b);
            }
            verifyEqualTo(arguments, 'genericProperty', 1001);
            verifyNotWritable(arguments, 'genericProperty');
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