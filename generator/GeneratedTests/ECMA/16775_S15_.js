try {
    assert.sameValue(parseInt('0', 37), NaN, 'parseInt("0", 37) must return NaN');
    assert.sameValue(parseInt('1', 37), NaN, 'parseInt("1", 37) must return NaN');
    assert.sameValue(parseInt('2', 37), NaN, 'parseInt("2", 37) must return NaN');
    assert.sameValue(parseInt('3', 37), NaN, 'parseInt("3", 37) must return NaN');
    assert.sameValue(parseInt('4', 37), NaN, 'parseInt("4", 37) must return NaN');
    assert.sameValue(parseInt('5', 37), NaN, 'parseInt("5", 37) must return NaN');
    assert.sameValue(parseInt('6', 37), NaN, 'parseInt("6", 37) must return NaN');
    assert.sameValue(parseInt('7', 37), NaN, 'parseInt("7", 37) must return NaN');
    assert.sameValue(parseInt('8', 37), NaN, 'parseInt("8", 37) must return NaN');
    assert.sameValue(parseInt('9', 37), NaN, 'parseInt("9", 37) must return NaN');
    assert.sameValue(parseInt('10', 37), NaN, 'parseInt("10", 37) must return NaN');
    assert.sameValue(parseInt('11', 37), NaN, 'parseInt("11", 37) must return NaN');
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