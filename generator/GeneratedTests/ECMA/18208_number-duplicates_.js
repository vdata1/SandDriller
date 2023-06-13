try {
    var object = {
        [1.2]: 'A',
        [1e+55]: 'B',
        [0.000001]: 'C',
        [-0]: 'D',
        [Infinity]: 'E',
        [-Infinity]: 'F',
        [NaN]: 'G'
    };
    assert.sameValue(object['1.2'], 'A', 'The value of `object[\'1.2\']` is `\'A\'`. Defined as `[1.2]: \'A\'`');
    assert.sameValue(object['1e+55'], 'B', 'The value of `object[\'1e+55\']` is `\'B\'`. Defined as `[1e55]: \'B\'`');
    assert.sameValue(object['0.000001'], 'C', 'The value of `object[\'0.000001\']` is `\'C\'`. Defined as `[0.000001]: \'C\'`');
    assert.sameValue(object[0], 'D', 'The value of `object[0]` is `\'D\'`. Defined as `[-0]: \'D\'`');
    assert.sameValue(object[Infinity], 'E', 'The value of `object[Infinity]` is `\'E\'`. Defined as `[Infinity]: \'E\'`');
    assert.sameValue(object[-Infinity], 'F', 'The value of `object[-Infinity]` is `\'F\'`. Defined as `[-Infinity]: \'F\'`');
    assert.sameValue(object[NaN], 'G', 'The value of `object[NaN]` is `\'G\'`. Defined as `[NaN]: \'G\'`');
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