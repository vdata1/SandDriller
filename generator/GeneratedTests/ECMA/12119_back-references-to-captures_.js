try {
    assert.compareArray('abcCd'.match(/(?<=\1(\w))d/i), [
        'd',
        'C'
    ], '#1');
    assert.compareArray('abxxd'.match(/(?<=\1([abx]))d/), [
        'd',
        'x'
    ], '#2');
    assert.compareArray('ababc'.match(/(?<=\1(\w+))c/), [
        'c',
        'ab'
    ], '#3');
    assert.compareArray('ababbc'.match(/(?<=\1(\w+))c/), [
        'c',
        'b'
    ], '#4');
    assert.sameValue('ababdc'.match(/(?<=\1(\w+))c/), null, '#5');
    assert.compareArray('ababc'.match(/(?<=(\w+)\1)c/), [
        'c',
        'abab'
    ], '#6');
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