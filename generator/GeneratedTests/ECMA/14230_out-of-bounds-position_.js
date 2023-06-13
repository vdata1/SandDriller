try {
    var str = 'The future is cool!';
    assert.sameValue(str.startsWith('!', str.length), false, 'str.startsWith("!", str.length) returns false');
    assert.sameValue(str.startsWith('!', 100), false, 'str.startsWith("!", 100) returns false');
    assert.sameValue(str.startsWith('!', Infinity), false, 'str.startsWith("!", Infinity) returns false');
    assert(str.startsWith('The future', -1), 'position argument < 0 will search from the start of the string (-1)');
    assert(str.startsWith('The future', -Infinity), 'position argument < 0 will search from the start of the string (-Infinity)');
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