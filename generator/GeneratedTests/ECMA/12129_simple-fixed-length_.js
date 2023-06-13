try {
    assert.sameValue('b'.match(/^.(?<=a)/), null, '#1');
    assert.sameValue('boo'.match(/^f\w\w(?<=\woo)/), null, '#2');
    assert.sameValue('fao'.match(/^f\w\w(?<=\woo)/), null, '#3');
    assert.sameValue('foa'.match(/^f\w\w(?<=\woo)/), null, '#4');
    assert.compareArray('a'.match(/^.(?<=a)/), ['a'], '#5');
    assert.compareArray('foo1'.match(/^f..(?<=.oo)/), ['foo'], '#6');
    assert.compareArray('foo2'.match(/^f\w\w(?<=\woo)/), ['foo'], '#7');
    assert.compareArray('abcdef'.match(/(?<=abc)\w\w\w/), ['def'], '#8');
    assert.compareArray('abcdef'.match(/(?<=a.c)\w\w\w/), ['def'], '#9');
    assert.compareArray('abcdef'.match(/(?<=a\wc)\w\w\w/), ['def'], '#10');
    assert.compareArray('abcdef'.match(/(?<=a[a-z])\w\w\w/), ['cde'], '#11');
    assert.compareArray('abcdef'.match(/(?<=a[a-z][a-z])\w\w\w/), ['def'], '#12');
    assert.compareArray('abcdef'.match(/(?<=a[a-z]{2})\w\w\w/), ['def'], '#13');
    assert.compareArray('abcdef'.match(/(?<=a{1})\w\w\w/), ['bcd'], '#14');
    assert.compareArray('abcdef'.match(/(?<=a{1}b{1})\w\w\w/), ['cde'], '#15');
    assert.compareArray('abcdef'.match(/(?<=a{1}[a-z]{2})\w\w\w/), ['def'], '#16');
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