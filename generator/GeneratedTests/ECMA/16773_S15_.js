try {
    assert.sameValue(parseInt('0'), parseInt('0', 10), 'parseInt("0") must return the same value returned by parseInt("0", 10)');
    assert.sameValue(parseInt('1'), parseInt('1', 10), 'parseInt("1") must return the same value returned by parseInt("1", 10)');
    assert.sameValue(parseInt('2'), parseInt('2', 10), 'parseInt("2") must return the same value returned by parseInt("2", 10)');
    assert.sameValue(parseInt('3'), parseInt('3', 10), 'parseInt("3") must return the same value returned by parseInt("3", 10)');
    assert.sameValue(parseInt('4'), parseInt('4', 10), 'parseInt("4") must return the same value returned by parseInt("4", 10)');
    assert.sameValue(parseInt('5'), parseInt('5', 10), 'parseInt("5") must return the same value returned by parseInt("5", 10)');
    assert.sameValue(parseInt('6'), parseInt('6', 10), 'parseInt("6") must return the same value returned by parseInt("6", 10)');
    assert.sameValue(parseInt('7'), parseInt('7', 10), 'parseInt("7") must return the same value returned by parseInt("7", 10)');
    assert.sameValue(parseInt('8'), parseInt('8', 10), 'parseInt("8") must return the same value returned by parseInt("8", 10)');
    assert.sameValue(parseInt('9'), parseInt('9', 10), 'parseInt("9") must return the same value returned by parseInt("9", 10)');
    assert.sameValue(parseInt('10'), parseInt('10', 10), 'parseInt("10") must return the same value returned by parseInt("10", 10)');
    assert.sameValue(parseInt('11'), parseInt('11', 10), 'parseInt("11") must return the same value returned by parseInt("11", 10)');
    assert.sameValue(parseInt('9999'), parseInt('9999', 10), 'parseInt("9999") must return the same value returned by parseInt("9999", 10)');
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