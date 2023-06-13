try {
    var buffer = new ArrayBuffer(2);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 0);
    sample.setUint8(1, 42);
    assert.sameValue(sample.getInt16(0), 42, 'no arg');
    assert.sameValue(sample.getInt16(0, undefined), 42, 'undefined');
    assert.sameValue(sample.getInt16(0, null), 42, 'null');
    assert.sameValue(sample.getInt16(0, 0), 42, '0');
    assert.sameValue(sample.getInt16(0, ''), 42, 'the empty string');
    assert.sameValue(sample.getInt16(0, {}), 10752, '{}');
    assert.sameValue(sample.getInt16(0, Symbol('1')), 10752, 'symbol');
    assert.sameValue(sample.getInt16(0, 1), 10752, '1');
    assert.sameValue(sample.getInt16(0, 'string'), 10752, 'string');
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