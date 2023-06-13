try {
    assert.compareArray('abcdef'.match(/(?<=ab(?=c)\wd)\w\w/), ['ef'], '#1');
    assert.compareArray('abcdef'.match(/(?<=a(?=([^a]{2})d)\w{3})\w\w/), [
        'ef',
        'bc'
    ], '#2');
    assert.compareArray('abcdef'.match(/(?<=a(?=([bc]{2}(?<!a{2}))d)\w{3})\w\w/), [
        'ef',
        'bc'
    ], '#3');
    assert.compareArray('faaao'.match(/^faaao?(?<=^f[oa]+(?=o))/), ['faaa'], '#4');
    assert.sameValue('abcdef'.match(/(?<=a(?=([bc]{2}(?<!a*))d)\w{3})\w\w/), null, '#5');
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