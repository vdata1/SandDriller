try {
    assert.sameValue(parseInt('-1', 10), -1, 'parseInt("-1", 10) must return -1');
    assert.sameValue(parseInt('-10', 10), -10, 'parseInt("-10", 10) must return -10');
    assert.sameValue(parseInt('-100', 10), -100, 'parseInt("-100", 10) must return -100');
    assert.sameValue(parseInt('-1000', 10), -1000, 'parseInt("-1000", 10) must return -1000');
    assert.sameValue(parseInt('-10000', 10), -10000, 'parseInt("-10000", 10) must return -10000');
    assert.sameValue(parseInt('-100000', 10), -100000, 'parseInt("-100000", 10) must return -100000');
    assert.sameValue(parseInt('-1000000', 10), -1000000, 'parseInt("-1000000", 10) must return -1000000');
    assert.sameValue(parseInt('-10000000', 10), -10000000, 'parseInt("-10000000", 10) must return -10000000');
    assert.sameValue(parseInt('-100000000', 10), -100000000, 'parseInt("-100000000", 10) must return -100000000');
    assert.sameValue(parseInt('-1000000000', 10), -1000000000, 'parseInt("-1000000000", 10) must return -1000000000');
    assert.sameValue(parseInt('-10000000000', 10), -10000000000, 'parseInt("-10000000000", 10) must return -10000000000');
    assert.sameValue(parseInt('-100000000000', 10), -100000000000, 'parseInt("-100000000000", 10) must return -100000000000');
    assert.sameValue(parseInt('-1000000000000', 10), -1000000000000, 'parseInt("-1000000000000", 10) must return -1000000000000');
    assert.sameValue(parseInt('-10000000000000', 10), -10000000000000, 'parseInt("-10000000000000", 10) must return -10000000000000');
    assert.sameValue(parseInt('-100000000000000', 10), -100000000000000, 'parseInt("-100000000000000", 10) must return -100000000000000');
    assert.sameValue(parseInt('-1000000000000000', 10), -1000000000000000, 'parseInt("-1000000000000000", 10) must return -1000000000000000');
    assert.sameValue(parseInt('-10000000000000000', 10), -10000000000000000, 'parseInt("-10000000000000000", 10) must return -10000000000000000');
    assert.sameValue(parseInt('-100000000000000000', 10), -100000000000000000, 'parseInt("-100000000000000000", 10) must return -100000000000000000');
    assert.sameValue(parseInt('-1000000000000000000', 10), -1000000000000000000, 'parseInt("-1000000000000000000", 10) must return -1000000000000000000');
    assert.sameValue(parseInt('-10000000000000000000', 10), -10000000000000000000, 'parseInt("-10000000000000000000", 10) must return -10000000000000000000');
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