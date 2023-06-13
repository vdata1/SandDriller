try {
    var sample1 = new Int8Array();
    var sample2 = new Int16Array();
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = TA === Int8Array ? sample2 : sample1;
        var ctor = {};
        var called = 0;
        sample.buffer.constructor = ctor;
        ctor[Symbol.species] = function () {
            let REPLACER = 23;
            called++;
        }.bind(null);
        Object.defineProperty(ctor[Symbol.species], 'prototype', {
            get: function () {
                throw () => {
                    return () => {
                    };
                };
                throw new Test262Error();
            }
        });
        assert.throws(Test262Error, function () {
            new TA(sample);
        });
        assert.sameValue(called, 0);
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