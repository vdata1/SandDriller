try {
    var buffer = new ArrayBuffer(4);
    var sample = new DataView(buffer, 0);
    sample.setFloat32(0, 1);
    assert.sameValue(sample.getFloat32(0), 1, 'no arg');
    sample.setFloat32(0, 2, undefined);
    assert.sameValue(sample.getFloat32(0), 2, 'undefined');
    sample.setFloat32(0, 3, null);
    assert.sameValue(sample.getFloat32(0), 3, 'null');
    sample.setFloat32(0, 4, 0);
    assert.sameValue(sample.getFloat32(0), 4, '0');
    sample.setFloat32(0, 5, '');
    assert.sameValue(sample.getFloat32(0), 5, 'the empty string');
    sample.setFloat32(0, 6, {});
    assert.sameValue(sample.getFloat32(0), 6.89663052202102e-41, '{}');
    sample.setFloat32(0, 7, Symbol('1'));
    assert.sameValue(sample.getFloat32(0), 8.04457422399591e-41, 'symbol');
    sample.setFloat32(0, 8, 1);
    assert.sameValue(sample.getFloat32(0), 9.10844001811131e-44, '1');
    sample.setFloat32(0, 9, 'string');
    assert.sameValue(sample.getFloat32(0), 5.830802910055564e-42, 'string');
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