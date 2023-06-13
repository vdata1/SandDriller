try {
    var obj1 = {
        valueOf: function () {
            return 42;
        }
    };
    var obj2 = {
        toString: function () {
            return 42;
        }
    };
    var buffer;
    buffer = new SharedArrayBuffer(obj1);
    assert.sameValue(buffer.byteLength, 42, 'object\'s valueOf');
    buffer = new SharedArrayBuffer(obj2);
    assert.sameValue(buffer.byteLength, 42, 'object\'s toString');
    buffer = new SharedArrayBuffer('');
    assert.sameValue(buffer.byteLength, 0, 'the Empty string');
    buffer = new SharedArrayBuffer('0');
    assert.sameValue(buffer.byteLength, 0, 'string \'0\'');
    buffer = new SharedArrayBuffer('1');
    assert.sameValue(buffer.byteLength, 1, 'string \'1\'');
    buffer = new SharedArrayBuffer(true);
    assert.sameValue(buffer.byteLength, 1, 'true');
    buffer = new SharedArrayBuffer(false);
    assert.sameValue(buffer.byteLength, 0, 'false');
    buffer = new SharedArrayBuffer(NaN);
    assert.sameValue(buffer.byteLength, 0, 'NaN');
    buffer = new SharedArrayBuffer(null);
    assert.sameValue(buffer.byteLength, 0, 'null');
    buffer = new SharedArrayBuffer(undefined);
    assert.sameValue(buffer.byteLength, 0, 'undefined');
    buffer = new SharedArrayBuffer(0.1);
    assert.sameValue(buffer.byteLength, 0, '0.1');
    buffer = new SharedArrayBuffer(0.9);
    assert.sameValue(buffer.byteLength, 0, '0.9');
    buffer = new SharedArrayBuffer(1.1);
    assert.sameValue(buffer.byteLength, 1, '1.1');
    buffer = new SharedArrayBuffer(1.9);
    assert.sameValue(buffer.byteLength, 1, '1.9');
    buffer = new SharedArrayBuffer(-0.1);
    assert.sameValue(buffer.byteLength, 0, '-0.1');
    buffer = new SharedArrayBuffer(-0.99999);
    assert.sameValue(buffer.byteLength, 0, '-0.99999');
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