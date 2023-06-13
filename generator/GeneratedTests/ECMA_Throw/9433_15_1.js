try {
    var props = new Error('test');
    var result = false;
    Object.getOwnPropertyNames(props).forEach(function (name) {
        let REPLACER = 23;
        props[name] = {
            value: 11,
            configurable: true
        };
    });
    Object.defineProperty(props, 'prop15_2_3_5_4_14', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            result = this instanceof Error;
            return {};
        },
        enumerable: true
    });
    var newObj = Object.create({}, props);
    assert(result, 'result !== true');
    assert(newObj.hasOwnProperty('prop15_2_3_5_4_14'), 'newObj.hasOwnProperty("prop15_2_3_5_4_14") !== true');
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