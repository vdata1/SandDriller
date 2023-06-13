try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA(5);
        var calls = [];
        var obj = { length: 3 };
        Object.defineProperty(obj, 0, {
            get: function () {
                let REPLACER = 23;
                calls.push(0);
                calls.push(sample.join());
                return 42;
            }
        });
        Object.defineProperty(obj, 1, {
            get: function () {
                let REPLACER = 23;
                calls.push(1);
                calls.push(sample.join());
                return 43;
            }
        });
        Object.defineProperty(obj, 2, {
            get: function () {
                let REPLACER = 23;
                calls.push(2);
                calls.push(sample.join());
                return 44;
            }
        });
        Object.defineProperty(obj, 3, {
            get: function () {
                throw () => {
                    return () => {
                    };
                };
                throw new Test262Error('Should not call obj[3]');
            }
        });
        sample.set(obj, 1);
        assert(compareArray(sample, [
            0,
            42,
            43,
            44,
            0
        ]), 'values are set for src length');
        assert(compareArray(calls, [
            0,
            '0,0,0,0,0',
            1,
            '0,42,0,0,0',
            2,
            '0,42,43,0,0'
        ]), 'values are set in order');
    });
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