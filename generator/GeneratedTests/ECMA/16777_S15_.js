try {
    assert.sameValue(parseInt('0x0', 0), parseInt('0', 16), 'parseInt("0x0", 0) must return the same value returned by parseInt("0", 16)');
    assert.sameValue(parseInt('0x1', 0), parseInt('1', 16), 'parseInt("0x1", 0) must return the same value returned by parseInt("1", 16)');
    assert.sameValue(parseInt('0x2', 0), parseInt('2', 16), 'parseInt("0x2", 0) must return the same value returned by parseInt("2", 16)');
    assert.sameValue(parseInt('0x3', 0), parseInt('3', 16), 'parseInt("0x3", 0) must return the same value returned by parseInt("3", 16)');
    assert.sameValue(parseInt('0x4', 0), parseInt('4', 16), 'parseInt("0x4", 0) must return the same value returned by parseInt("4", 16)');
    assert.sameValue(parseInt('0x5', 0), parseInt('5', 16), 'parseInt("0x5", 0) must return the same value returned by parseInt("5", 16)');
    assert.sameValue(parseInt('0x6', 0), parseInt('6', 16), 'parseInt("0x6", 0) must return the same value returned by parseInt("6", 16)');
    assert.sameValue(parseInt('0x7', 0), parseInt('7', 16), 'parseInt("0x7", 0) must return the same value returned by parseInt("7", 16)');
    assert.sameValue(parseInt('0x8', 0), parseInt('8', 16), 'parseInt("0x8", 0) must return the same value returned by parseInt("8", 16)');
    assert.sameValue(parseInt('0x9', 0), parseInt('9', 16), 'parseInt("0x9", 0) must return the same value returned by parseInt("9", 16)');
    assert.sameValue(parseInt('0xA', 0), parseInt('A', 16), 'parseInt("0xA", 0) must return the same value returned by parseInt("A", 16)');
    assert.sameValue(parseInt('0xB', 0), parseInt('B', 16), 'parseInt("0xB", 0) must return the same value returned by parseInt("B", 16)');
    assert.sameValue(parseInt('0xC', 0), parseInt('C', 16), 'parseInt("0xC", 0) must return the same value returned by parseInt("C", 16)');
    assert.sameValue(parseInt('0xD', 0), parseInt('D', 16), 'parseInt("0xD", 0) must return the same value returned by parseInt("D", 16)');
    assert.sameValue(parseInt('0xE', 0), parseInt('E', 16), 'parseInt("0xE", 0) must return the same value returned by parseInt("E", 16)');
    assert.sameValue(parseInt('0xF', 0), parseInt('F', 16), 'parseInt("0xF", 0) must return the same value returned by parseInt("F", 16)');
    assert.sameValue(parseInt('0xE', 0), parseInt('E', 16), 'parseInt("0xE", 0) must return the same value returned by parseInt("E", 16)');
    assert.sameValue(parseInt('0xABCDEF', 0), parseInt('ABCDEF', 16), 'parseInt("0xABCDEF", 0) must return the same value returned by parseInt("ABCDEF", 16)');
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