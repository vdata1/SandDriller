try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    var typedArray = new Uint8Array(buffer, 0);
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
    sample.setUint8(0, 0);
    sample.setUint8(-0, 42);
    assert.sameValue(typedArray[0], 42, '-0');
    sample.setUint8(3, 0);
    sample.setUint8(obj1, 42);
    assert.sameValue(typedArray[3], 42, 'object\'s valueOf');
    sample.setUint8(4, 0);
    sample.setUint8(obj2, 42);
    assert.sameValue(typedArray[4], 42, 'object\'s toString');
    sample.setUint8(0, 0);
    sample.setUint8('', 42);
    assert.sameValue(typedArray[0], 42, 'the Empty string');
    sample.setUint8(0, 0);
    sample.setUint8('0', 42);
    assert.sameValue(typedArray[0], 42, 'string \'0\'');
    sample.setUint8(2, 0);
    sample.setUint8('2', 42);
    assert.sameValue(typedArray[2], 42, 'string \'2\'');
    sample.setUint8(1, 0);
    sample.setUint8(true, 42);
    assert.sameValue(typedArray[1], 42, 'true');
    sample.setUint8(0, 0);
    sample.setUint8(false, 42);
    assert.sameValue(typedArray[0], 42, 'false');
    sample.setUint8(0, 0);
    sample.setUint8(NaN, 42);
    assert.sameValue(typedArray[0], 42, 'NaN');
    sample.setUint8(0, 0);
    sample.setUint8(null, 42);
    assert.sameValue(typedArray[0], 42, 'null');
    sample.setUint8(0, 0);
    sample.setUint8(0.1, 42);
    assert.sameValue(typedArray[0], 42, '0.1');
    sample.setUint8(0, 0);
    sample.setUint8(0.9, 42);
    assert.sameValue(typedArray[0], 42, '0.9');
    sample.setUint8(1, 0);
    sample.setUint8(1.1, 42);
    assert.sameValue(typedArray[1], 42, '1.1');
    sample.setUint8(1, 0);
    sample.setUint8(1.9, 42);
    assert.sameValue(typedArray[1], 42, '1.9');
    sample.setUint8(0, 0);
    sample.setUint8(-0.1, 42);
    assert.sameValue(typedArray[0], 42, '-0.1');
    sample.setUint8(0, 0);
    sample.setUint8(-0.99999, 42);
    assert.sameValue(typedArray[0], 42, '-0.99999');
    sample.setUint8(0, 0);
    sample.setUint8(undefined, 42);
    assert.sameValue(typedArray[0], 42, 'undefined');
    sample.setUint8(0, 7);
    sample.setUint8();
    assert.sameValue(typedArray[0], 0, 'no arg');
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