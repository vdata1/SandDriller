try {
    assert.sameValue('abcdef'.match(/(?<=^[^a-c]{3})def/), null, '#1');
    assert.sameValue('foooo'.match(/"^foooo(?<=^o+)$/), null, '#2');
    assert.sameValue('foooo'.match(/"^foooo(?<=^o*)$/), null, '#3');
    assert.compareArray('abcdef'.match(/(?<=^abc)def/), ['def'], '#4');
    assert.compareArray('abcdef'.match(/(?<=^[a-c]{3})def/), ['def'], '#5');
    assert.compareArray('xyz\nabcdef'.match(/(?<=^[a-c]{3})def/m), ['def'], '#6');
    assert.compareArray('ab\ncd\nefg'.match(/(?<=^)\w+/gm), [
        'ab',
        'cd',
        'efg'
    ], '#7');
    assert.compareArray('ab\ncd\nefg'.match(/\w+(?<=$)/gm), [
        'ab',
        'cd',
        'efg'
    ], '#8');
    assert.compareArray('ab\ncd\nefg'.match(/(?<=^)\w+(?<=$)/gm), [
        'ab',
        'cd',
        'efg'
    ], '#9');
    assert.compareArray('foo'.match(/^foo(?<=^fo+)$/), ['foo'], '#10');
    assert.compareArray('foooo'.match(/^foooo(?<=^fo*)/), ['foooo'], '#11');
    assert.compareArray('foo'.match(/^(f)oo(?<=^\1o+)$/), [
        'foo',
        'f'
    ], '#12');
    assert.compareArray('foo'.match(/^(f)oo(?<=^\1o+)$/i), [
        'foo',
        'f'
    ], '#13');
    assert.compareArray('fooሴ'.match(/^(f)oo(?<=^\1o+).$/i), [
        'fooሴ',
        'f'
    ], '#14');
    assert.compareArray('abcdefdef'.match(/(?<=^\w+)def/), ['def'], '#15');
    assert.compareArray('abcdefdef'.match(/(?<=^\w+)def/g), [
        'def',
        'def'
    ], '#16');
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