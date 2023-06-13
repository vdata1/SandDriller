try {
    var obj1 = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return 3;
        }
    };
    var obj2 = {
        toString: function () {
            return 4;
        }
    };
    var sample;
    var ab = new SharedArrayBuffer(42);
    sample = new DataView(ab, -0);
    assert.sameValue(sample.byteOffset, 0, '-0');
    sample = new DataView(ab, obj1);
    assert.sameValue(sample.byteOffset, 3, 'object\'s valueOf');
    sample = new DataView(ab, obj2);
    assert.sameValue(sample.byteOffset, 4, 'object\'s toString');
    sample = new DataView(ab, '');
    assert.sameValue(sample.byteOffset, 0, 'the Empty string');
    sample = new DataView(ab, '0');
    assert.sameValue(sample.byteOffset, 0, 'string \'0\'');
    sample = new DataView(ab, '1');
    assert.sameValue(sample.byteOffset, 1, 'string \'1\'');
    sample = new DataView(ab, true);
    assert.sameValue(sample.byteOffset, 1, 'true');
    sample = new DataView(ab, false);
    assert.sameValue(sample.byteOffset, 0, 'false');
    sample = new DataView(ab, NaN);
    assert.sameValue(sample.byteOffset, 0, 'NaN');
    sample = new DataView(ab, null);
    assert.sameValue(sample.byteOffset, 0, 'null');
    sample = new DataView(ab, undefined);
    assert.sameValue(sample.byteOffset, 0, 'undefined');
    sample = new DataView(ab, 0.1);
    assert.sameValue(sample.byteOffset, 0, '0.1');
    sample = new DataView(ab, 0.9);
    assert.sameValue(sample.byteOffset, 0, '0.9');
    sample = new DataView(ab, 1.1);
    assert.sameValue(sample.byteOffset, 1, '1.1');
    sample = new DataView(ab, 1.9);
    assert.sameValue(sample.byteOffset, 1, '1.9');
    sample = new DataView(ab, -0.1);
    assert.sameValue(sample.byteOffset, 0, '-0.1');
    sample = new DataView(ab, -0.99999);
    assert.sameValue(sample.byteOffset, 0, '-0.99999');
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