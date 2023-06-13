try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    var obj1 = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        }
    };
    var obj2 = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 4;
        }
    };
    sample.setFloat32(0, 0);
    sample.setFloat32(-0, 42);
    assert.sameValue(sample.getFloat32(0), 42, '-0');
    sample.setFloat32(3, 0);
    sample.setFloat32(obj1, 42);
    assert.sameValue(sample.getFloat32(3), 42, 'object\'s valueOf');
    sample.setFloat32(4, 0);
    sample.setFloat32(obj2, 42);
    assert.sameValue(sample.getFloat32(4), 42, 'object\'s toString');
    sample.setFloat32(0, 0);
    sample.setFloat32('', 42);
    assert.sameValue(sample.getFloat32(0), 42, 'the Empty string');
    sample.setFloat32(0, 0);
    sample.setFloat32('0', 42);
    assert.sameValue(sample.getFloat32(0), 42, 'string \'0\'');
    sample.setFloat32(2, 0);
    sample.setFloat32('2', 42);
    assert.sameValue(sample.getFloat32(2), 42, 'string \'2\'');
    sample.setFloat32(1, 0);
    sample.setFloat32(true, 42);
    assert.sameValue(sample.getFloat32(1), 42, 'true');
    sample.setFloat32(0, 0);
    sample.setFloat32(false, 42);
    assert.sameValue(sample.getFloat32(0), 42, 'false');
    sample.setFloat32(0, 0);
    sample.setFloat32(NaN, 42);
    assert.sameValue(sample.getFloat32(0), 42, 'NaN');
    sample.setFloat32(0, 0);
    sample.setFloat32(null, 42);
    assert.sameValue(sample.getFloat32(0), 42, 'null');
    sample.setFloat32(0, 0);
    sample.setFloat32(0.1, 42);
    assert.sameValue(sample.getFloat32(0), 42, '0.1');
    sample.setFloat32(0, 0);
    sample.setFloat32(0.9, 42);
    assert.sameValue(sample.getFloat32(0), 42, '0.9');
    sample.setFloat32(1, 0);
    sample.setFloat32(1.1, 42);
    assert.sameValue(sample.getFloat32(1), 42, '1.1');
    sample.setFloat32(1, 0);
    sample.setFloat32(1.9, 42);
    assert.sameValue(sample.getFloat32(1), 42, '1.9');
    sample.setFloat32(0, 0);
    sample.setFloat32(-0.1, 42);
    assert.sameValue(sample.getFloat32(0), 42, '-0.1');
    sample.setFloat32(0, 0);
    sample.setFloat32(-0.99999, 42);
    assert.sameValue(sample.getFloat32(0), 42, '-0.99999');
    sample.setFloat32(0, 0);
    sample.setFloat32(undefined, 42);
    assert.sameValue(sample.getFloat32(0), 42, 'undefined');
    sample.setFloat32(0, 7);
    sample.setFloat32();
    assert.sameValue(sample.getFloat32(0), NaN, 'no arg');
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