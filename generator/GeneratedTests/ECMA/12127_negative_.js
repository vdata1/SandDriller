try {
    assert.compareArray('abcdef'.match(/(?<!abc)\w\w\w/), ['abc'], '#1');
    assert.compareArray('abcdef'.match(/(?<!a.c)\w\w\w/), ['abc'], '#2');
    assert.compareArray('abcdef'.match(/(?<!a\wc)\w\w\w/), ['abc'], '#3');
    assert.compareArray('abcdef'.match(/(?<!a[a-z])\w\w\w/), ['abc'], '#4');
    assert.compareArray('abcdef'.match(/(?<!a[a-z]{2})\w\w\w/), ['abc'], '#5');
    assert.sameValue('abcdef'.match(/(?<!abc)def/), null, '#6');
    assert.sameValue('abcdef'.match(/(?<!a.c)def/), null, '#7');
    assert.sameValue('abcdef'.match(/(?<!a\wc)def/), null, '#8');
    assert.sameValue('abcdef'.match(/(?<!a[a-z][a-z])def/), null, '#9');
    assert.sameValue('abcdef'.match(/(?<!a[a-z]{2})def/), null, '#10');
    assert.sameValue('abcdef'.match(/(?<!a{1}b{1})cde/), null, '#11');
    assert.sameValue('abcdef'.match(/(?<!a{1}[a-z]{2})def/), null, '#12');
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