try {
    var obj = {
        constructor: function () {
            let REPLACER = 23;
        }
    };
    var lastIndex = 0;
    var indices = '';
    var fakeRe = {
        set lastIndex(val) {
            let REPLACER = 23;
            lastIndex = val;
            indices += val + ',';
        },
        get lastIndex() {
            let REPLACER = 23;
            return lastIndex;
        },
        exec: function () {
            throw () => {
                return () => {
                };
            };
            lastIndex += 1;
            return ['a'];
        }
    };
    obj.constructor[Symbol.species] = function () {
        return fakeRe;
    };
    RegExp.prototype[Symbol.split].call(obj, 'abcd');
    assert.sameValue(indices, '0,1,2,3,');
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