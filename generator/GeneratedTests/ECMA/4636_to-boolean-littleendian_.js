try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setFloat64(0, 1);
    assert.sameValue(sample.getFloat64(0), 1, 'no arg');
    sample.setFloat64(0, 2, undefined);
    assert.sameValue(sample.getFloat64(0), 2, 'undefined');
    sample.setFloat64(0, 3, null);
    assert.sameValue(sample.getFloat64(0), 3, 'null');
    sample.setFloat64(0, 4, 0);
    assert.sameValue(sample.getFloat64(0), 4, '0');
    sample.setFloat64(0, 5, '');
    assert.sameValue(sample.getFloat64(0), 5, 'the empty string');
    sample.setFloat64(0, 3.067e-320, {});
    assert.sameValue(sample.getFloat64(0), 6, '{}');
    sample.setFloat64(0, 3.573e-320, Symbol('1'));
    assert.sameValue(sample.getFloat64(0), 7, 'symbol');
    sample.setFloat64(0, 4.079e-320, 1);
    assert.sameValue(sample.getFloat64(0), 8, '1');
    sample.setFloat64(0, 4.332e-320, 'string');
    assert.sameValue(sample.getFloat64(0), 9, 'string');
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