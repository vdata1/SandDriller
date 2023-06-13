try {
    assert.sameValue('abcdef'.match(/(?<=$abc)def/), null, '#1');
    assert.sameValue('fno'.match(/^f.o(?<=foo)$/), null, '#2');
    assert.sameValue('foo'.match(/^foo(?<!foo)$/), null, '#3');
    assert.sameValue('foo'.match(/^f.o(?<!foo)$/), null, '#4');
    assert.compareArray('foo'.match(/^foo(?<=foo)$/), ['foo'], '#5');
    assert.compareArray('foo'.match(/^f.o(?<=foo)$/), ['foo'], '#6');
    assert.compareArray('fno'.match(/^f.o(?<!foo)$/), ['fno'], '#7');
    assert.compareArray('foooo'.match(/^foooo(?<=fo+)$/), ['foooo'], '#8');
    assert.compareArray('foooo'.match(/^foooo(?<=fo*)$/), ['foooo'], '#9');
    assert.compareArray(/(abc\1)/.exec('abc'), [
        'abc',
        'abc'
    ], '#10');
    assert.compareArray(/(abc\1)/.exec('abcሴ'), [
        'abc',
        'abc'
    ], '#11');
    assert.compareArray(/(abc\1)/i.exec('abc'), [
        'abc',
        'abc'
    ], '#12');
    assert.compareArray(/(abc\1)/i.exec('abcሴ'), [
        'abc',
        'abc'
    ], '#13');
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