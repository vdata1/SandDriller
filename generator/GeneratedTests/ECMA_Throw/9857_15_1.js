try {
    var fun = function () {
        let REPLACER = 23;
        return 10;
    };
    var proto = {};
    Object.defineProperty(proto, 'set', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return function () {
                return arguments;
            };
        }
    });
    var Con = function () {
    };
    Con.prototype = proto;
    var descObj = new Con();
    Object.defineProperty(descObj, 'set', {
        set: function () {
        }
    });
    descObj.get = fun;
    var obj = {};
    Object.defineProperties(obj, { prop: descObj });
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    assert(obj.hasOwnProperty('prop'), 'obj.hasOwnProperty("prop") !== true');
    assert.sameValue(typeof desc.set, 'undefined', 'typeof (desc.set)');
    assert.sameValue(obj.prop, 10, 'obj.prop');
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