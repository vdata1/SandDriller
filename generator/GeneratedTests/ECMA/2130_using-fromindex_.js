try {
    var sample = [
        'a',
        'b',
        'c'
    ];
    assert.sameValue(sample.includes('a', 0), true, 'includes(\'a\', 0)');
    assert.sameValue(sample.includes('a', 1), false, 'includes(\'a\', 1)');
    assert.sameValue(sample.includes('a', 2), false, 'includes(\'a\', 2)');
    assert.sameValue(sample.includes('b', 0), true, 'includes(\'b\', 0)');
    assert.sameValue(sample.includes('b', 1), true, 'includes(\'b\', 1)');
    assert.sameValue(sample.includes('b', 2), false, 'includes(\'b\', 2)');
    assert.sameValue(sample.includes('c', 0), true, 'includes(\'c\', 0)');
    assert.sameValue(sample.includes('c', 1), true, 'includes(\'c\', 1)');
    assert.sameValue(sample.includes('c', 2), true, 'includes(\'c\', 2)');
    assert.sameValue(sample.includes('a', -1), false, 'includes(\'a\', -1)');
    assert.sameValue(sample.includes('a', -2), false, 'includes(\'a\', -2)');
    assert.sameValue(sample.includes('a', -3), true, 'includes(\'a\', -3)');
    assert.sameValue(sample.includes('a', -4), true, 'includes(\'a\', -4)');
    assert.sameValue(sample.includes('b', -1), false, 'includes(\'b\', -1)');
    assert.sameValue(sample.includes('b', -2), true, 'includes(\'b\', -2)');
    assert.sameValue(sample.includes('b', -3), true, 'includes(\'b\', -3)');
    assert.sameValue(sample.includes('b', -4), true, 'includes(\'b\', -4)');
    assert.sameValue(sample.includes('c', -1), true, 'includes(\'c\', -1)');
    assert.sameValue(sample.includes('c', -2), true, 'includes(\'c\', -2)');
    assert.sameValue(sample.includes('c', -3), true, 'includes(\'c\', -3)');
    assert.sameValue(sample.includes('c', -4), true, 'includes(\'c\', -4)');
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