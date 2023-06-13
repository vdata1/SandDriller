try {
    var str = 'abcdef';
    assert.compareArray(str.match(/(?<=(c))def/), [
        'def',
        'c'
    ], '#1');
    assert.compareArray(str.match(/(?<=(\w{2}))def/), [
        'def',
        'bc'
    ], '#2');
    assert.compareArray(str.match(/(?<=(\w(\w)))def/), [
        'def',
        'bc',
        'c'
    ], '#3');
    assert.compareArray(str.match(/(?<=(\w){3})def/), [
        'def',
        'a'
    ], '#4');
    assert.compareArray(str.match(/(?<=(bc)|(cd))./), [
        'd',
        'bc',
        undefined
    ], '#5');
    assert.compareArray(str.match(/(?<=([ab]{1,2})\D|(abc))\w/), [
        'c',
        'a',
        undefined
    ], '#6');
    assert.compareArray(str.match(/\D(?<=([ab]+))(\w)/), [
        'ab',
        'a',
        'b'
    ], '#7');
    assert.compareArray(str.match(/(?<=b|c)\w/g), [
        'c',
        'd'
    ], '#8');
    assert.compareArray(str.match(/(?<=[b-e])\w{2}/g), [
        'cd',
        'ef'
    ], '#9');
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