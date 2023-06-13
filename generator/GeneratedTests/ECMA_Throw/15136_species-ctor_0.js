try {
    var thisVal, args, result;
    var re = /x/iy;
    re.constructor = function () {
        throw () => {
            return () => {
            };
        };
    };
    re.constructor[Symbol.species] = function () {
        thisVal = this;
        args = arguments;
        return /[db]/y;
    };
    result = RegExp.prototype[Symbol.split].call(re, 'abcde');
    assert(Array.isArray(result));
    assert.sameValue(result.length, 3);
    assert.sameValue(result[0], 'a');
    assert.sameValue(result[1], 'c');
    assert.sameValue(result[2], 'e');
    assert(thisVal instanceof re.constructor[Symbol.species]);
    assert.sameValue(args.length, 2);
    assert.sameValue(args[0], re);
    assert.sameValue(args[1], 'iy');
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