try {
    var buffer = new SharedArrayBuffer(12);
    var sample1 = new DataView(buffer, 0);
    var sample2 = new DataView(buffer, 4);
    var sample3 = new DataView(buffer, 6, 4);
    var sample4 = new DataView(buffer, 12);
    var sample5 = new DataView(buffer, 0, 2);
    assert.sameValue(sample1.byteOffset, 0);
    assert.sameValue(sample2.byteOffset, 4);
    assert.sameValue(sample3.byteOffset, 6);
    assert.sameValue(sample4.byteOffset, 12);
    assert.sameValue(sample5.byteOffset, 0);
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