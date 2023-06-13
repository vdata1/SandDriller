try {
    function callbackfn1(val, idx, obj) {
        let REPLACER = 23;
        return val > 10;
    }
    function callbackfn2(val, idx, obj) {
        let REPLACER = 23;
        return val > 11;
    }
    var valueOfAccessed = false;
    var toStringAccessed = false;
    var proto = {
        valueOf: function () {
            let REPLACER = 23;
            valueOfAccessed = true;
            return 2;
        }
    };
    var Con = function () {
        throw () => {
            return () => {
            };
        };
    };
    Con.prototype = proto;
    var child = new Con();
    child.toString = function () {
        toStringAccessed = true;
        return '1';
    };
    var obj = {
        0: 12,
        1: 11,
        2: 9,
        length: child
    };
    assert(Array.prototype.every.call(obj, callbackfn1), 'Array.prototype.every.call(obj, callbackfn1) !== true');
    assert.sameValue(Array.prototype.every.call(obj, callbackfn2), false, 'Array.prototype.every.call(obj, callbackfn2)');
    assert(valueOfAccessed, 'valueOfAccessed !== true');
    assert.sameValue(toStringAccessed, false, 'toStringAccessed');
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