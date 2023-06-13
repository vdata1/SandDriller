try {
    var __obj = {
        toString: function () {
            let REPLACER = 23;
            return 'BB';
        }
    };
    var __obj2 = {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return '2';
        }
    };
    var __split = 'ABBABABABBcc^^BBvv%%BBxxx'.split(__obj, __obj2);
    assert.sameValue(typeof __split, 'object', 'The value of `typeof __split` is "object"');
    assert.sameValue(__split.constructor, Array, 'The value of __split.constructor is expected to equal the value of Array');
    assert.sameValue(__split.length, 2, 'The value of __split.length is 2');
    assert.sameValue(__split[0], 'A', 'The value of __split[0] is "A"');
    assert.sameValue(__split[1], 'ABABA', 'The value of __split[1] is "ABABA"');
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