try {
    var sample;
    var buffer = new SharedArrayBuffer(4);
    sample = new DataView(buffer, 0, undefined);
    assert.sameValue(sample.byteLength, 4, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 0, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer);
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 1, undefined);
    assert.sameValue(sample.byteLength, 3, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 1, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer);
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 2, undefined);
    assert.sameValue(sample.byteLength, 2, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 2, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer);
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 3, undefined);
    assert.sameValue(sample.byteLength, 1, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 3, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer);
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 4, undefined);
    assert.sameValue(sample.byteLength, 0, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 4, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer);
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
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