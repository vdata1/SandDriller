try {
    var sample;
    var buffer = new ArrayBuffer(3);
    sample = new DataView(buffer, 1, 2);
    assert.sameValue(sample.byteLength, 2, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 1, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer, 'sample.buffer');
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 1, 0);
    assert.sameValue(sample.byteLength, 0, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 1, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer, 'sample.buffer');
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 0, 3);
    assert.sameValue(sample.byteLength, 3, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 0, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer, 'sample.buffer');
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 3, 0);
    assert.sameValue(sample.byteLength, 0, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 3, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer, 'sample.buffer');
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 0, 1);
    assert.sameValue(sample.byteLength, 1, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 0, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer, 'sample.buffer');
    assert.sameValue(sample.constructor, DataView);
    assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
    sample = new DataView(buffer, 0, 2);
    assert.sameValue(sample.byteLength, 2, 'sample.byteLength');
    assert.sameValue(sample.byteOffset, 0, 'sample.byteOffset');
    assert.sameValue(sample.buffer, buffer, 'sample.buffer');
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