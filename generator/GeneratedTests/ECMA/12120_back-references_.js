try {
    assert.compareArray('abb'.match(/(.)(?<=(\1\1))/), [
        'b',
        'b',
        'bb'
    ], '#1');
    assert.compareArray('abB'.match(/(.)(?<=(\1\1))/i), [
        'B',
        'B',
        'bB'
    ], '#2');
    assert.compareArray('aabAaBa'.match(/((\w)\w)(?<=\1\2\1)/i), [
        'aB',
        'aB',
        'a'
    ], '#3');
    assert.compareArray('aabAaBa'.match(/(\w(\w))(?<=\1\2\1)/i), [
        'Ba',
        'Ba',
        'a'
    ], '#4');
    assert.compareArray('abaBbAa'.match(/(?=(\w))(?<=(\1))./i), [
        'b',
        'b',
        'B'
    ], '#5');
    assert.compareArray('  \'foo\'  '.match(/(?<=(.))(\w+)(?=\1)/), [
        'foo',
        '\'',
        'foo'
    ], '#6');
    assert.compareArray('  "foo"  '.match(/(?<=(.))(\w+)(?=\1)/), [
        'foo',
        '"',
        'foo'
    ], '#7');
    assert.compareArray('abbb'.match(/(.)(?<=\1\1\1)/), [
        'b',
        'b'
    ], '#8');
    assert.compareArray('fababab'.match(/(..)(?<=\1\1\1)/), [
        'ab',
        'ab'
    ], '#9');
    assert.sameValue('  .foo"  '.match(/(?<=(.))(\w+)(?=\1)/), null, '#10');
    assert.sameValue('ab'.match(/(.)(?<=\1\1\1)/), null, '#11');
    assert.sameValue('abb'.match(/(.)(?<=\1\1\1)/), null, '#12');
    assert.sameValue('ab'.match(/(..)(?<=\1\1\1)/), null, '#13');
    assert.sameValue('abb'.match(/(..)(?<=\1\1\1)/), null, '#14');
    assert.sameValue('aabb'.match(/(..)(?<=\1\1\1)/), null, '#15');
    assert.sameValue('abab'.match(/(..)(?<=\1\1\1)/), null, '#16');
    assert.sameValue('fabxbab'.match(/(..)(?<=\1\1\1)/), null, '#17');
    assert.sameValue('faxabab'.match(/(..)(?<=\1\1\1)/), null, '#18');
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