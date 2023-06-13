try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 127);
    sample.setUint8(1, 255);
    sample.setUint8(2, 1);
    sample.setUint8(3, 127);
    sample.setUint8(4, 255);
    sample.setUint8(5, 1);
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
    assert.sameValue(sample.getUint16(-0), 32767, '-0');
    assert.sameValue(sample.getUint16(obj1), 383, 'object\'s valueOf');
    assert.sameValue(sample.getUint16(obj2), 32767, 'object\'s toString');
    assert.sameValue(sample.getUint16(''), 32767, 'the Empty string');
    assert.sameValue(sample.getUint16('0'), 32767, 'string \'0\'');
    assert.sameValue(sample.getUint16('2'), 383, 'string \'2\'');
    assert.sameValue(sample.getUint16(true), 65281, 'true');
    assert.sameValue(sample.getUint16(false), 32767, 'false');
    assert.sameValue(sample.getUint16(NaN), 32767, 'NaN');
    assert.sameValue(sample.getUint16(null), 32767, 'null');
    assert.sameValue(sample.getUint16(0.1), 32767, '0.1');
    assert.sameValue(sample.getUint16(0.9), 32767, '0.9');
    assert.sameValue(sample.getUint16(1.1), 65281, '1.1');
    assert.sameValue(sample.getUint16(1.9), 65281, '1.9');
    assert.sameValue(sample.getUint16(-0.1), 32767, '-0.1');
    assert.sameValue(sample.getUint16(-0.99999), 32767, '-0.99999');
    assert.sameValue(sample.getUint16(undefined), 32767, 'undefined');
    assert.sameValue(sample.getUint16(), 32767, 'no arg');
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