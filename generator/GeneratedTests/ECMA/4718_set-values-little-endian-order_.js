try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    var result;
    result = sample.setUint16(0, -1870724872, true);
    assert.sameValue(result, undefined, 'returns undefined #1');
    assert.sameValue(sample.getUint16(0), 63488);
    result = sample.setUint16(0, -134185072, true);
    assert.sameValue(result, undefined, 'returns undefined #2');
    assert.sameValue(sample.getUint16(0), 36991);
    result = sample.setUint16(0, 1870724872, true);
    assert.sameValue(result, undefined, 'returns undefined #3');
    assert.sameValue(sample.getUint16(0), 2303);
    result = sample.setUint16(0, 150962287, true);
    assert.sameValue(result, undefined, 'returns undefined #4');
    assert.sameValue(sample.getUint16(0), 28544);
    result = sample.setUint16(0, 4160782224, true);
    assert.sameValue(result, undefined, 'returns undefined #5');
    assert.sameValue(sample.getUint16(0), 36991);
    result = sample.setUint16(0, 2424242424, true);
    assert.sameValue(result, undefined, 'returns undefined #6');
    assert.sameValue(sample.getUint16(0), 63488);
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