try {
    var __string = new String('one two three');
    var __split = __string.split('');
    assert.sameValue(__split.constructor, Array, 'The value of __split.constructor is expected to equal the value of Array');
    assert.sameValue(__split.length, __string.length, 'The value of __split.length is expected to equal the value of __string.length');
    assert.sameValue(__split[0], 'o', 'The value of __split[0] is "o"');
    assert.sameValue(__split[1], 'n', 'The value of __split[1] is "n"');
    assert.sameValue(__split[11], 'e', 'The value of __split[11] is "e"');
    assert.sameValue(__split[12], 'e', 'The value of __split[12] is "e"');
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