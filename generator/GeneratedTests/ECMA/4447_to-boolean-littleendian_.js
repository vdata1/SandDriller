try {
    var buffer = new ArrayBuffer(4);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 75);
    sample.setUint8(1, 75);
    sample.setUint8(2, 76);
    sample.setUint8(3, 76);
    assert.sameValue(sample.getFloat32(0), 13323340, 'no arg');
    assert.sameValue(sample.getFloat32(0, undefined), 13323340, 'undefined');
    assert.sameValue(sample.getFloat32(0, null), 13323340, 'null');
    assert.sameValue(sample.getFloat32(0, 0), 13323340, '0');
    assert.sameValue(sample.getFloat32(0, ''), 13323340, 'the empty string');
    assert.sameValue(sample.getFloat32(0, {}), 53554476, '{}');
    assert.sameValue(sample.getFloat32(0, Symbol('1')), 53554476, 'symbol');
    assert.sameValue(sample.getFloat32(0, 1), 53554476, '1');
    assert.sameValue(sample.getFloat32(0, 'string'), 53554476, 'string');
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