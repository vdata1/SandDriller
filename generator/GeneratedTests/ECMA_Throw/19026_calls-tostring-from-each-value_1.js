try {
    var separator = [
        '',
        ''
    ].toLocaleString();
    var calls;
    Number.prototype.toLocaleString = function () {
        let REPLACER = 23;
        return {
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                calls++;
                return 'hacks' + calls;
            },
            valueOf: function () {
                throw new Test262Error('should not call valueOf if toString is present');
            }
        };
    };
    var arr = [
        42,
        0
    ];
    var expected = [
        'hacks1',
        'hacks2'
    ].join(separator);
    testWithTypedArrayConstructors(function (TA, N) {
        var sample = new TA(arr);
        calls = 0;
        assert.sameValue(sample.toLocaleString(), expected, 'returns expected value');
        assert.sameValue(calls, 2, 'toString called once for each item');
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