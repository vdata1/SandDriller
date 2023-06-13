try {
    var buffer = new ArrayBuffer(4);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 39);
    sample.setUint8(1, 42);
    sample.setUint8(2, 7);
    sample.setUint8(3, 77);
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
    assert.sameValue(sample.getInt8(-0), 39, '-0');
    assert.sameValue(sample.getInt8(obj1), 7, 'object\'s valueOf');
    assert.sameValue(sample.getInt8(obj2), 77, 'object\'s toString');
    assert.sameValue(sample.getInt8(''), 39, 'the Empty string');
    assert.sameValue(sample.getInt8('0'), 39, 'string \'0\'');
    assert.sameValue(sample.getInt8('2'), 7, 'string \'2\'');
    assert.sameValue(sample.getInt8(true), 42, 'true');
    assert.sameValue(sample.getInt8(false), 39, 'false');
    assert.sameValue(sample.getInt8(NaN), 39, 'NaN');
    assert.sameValue(sample.getInt8(null), 39, 'null');
    assert.sameValue(sample.getInt8(0.1), 39, '0.1');
    assert.sameValue(sample.getInt8(0.9), 39, '0.9');
    assert.sameValue(sample.getInt8(1.1), 42, '1.1');
    assert.sameValue(sample.getInt8(1.9), 42, '1.9');
    assert.sameValue(sample.getInt8(-0.1), 39, '-0.1');
    assert.sameValue(sample.getInt8(-0.99999), 39, '-0.99999');
    assert.sameValue(sample.getInt8(undefined), 39, 'undefined');
    assert.sameValue(sample.getInt8(), 39, 'no arg');
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