try {
    var proto = {};
    Object.defineProperty(proto, 'prop', {
        value: 11,
        configurable: true
    });
    var Con = function () {
        throw () => {
            return () => {
            };
        };
    };
    Con.prototype = proto;
    var obj = new Con();
    Object.defineProperty(obj, 'prop', {
        get: function () {
            return 12;
        },
        configurable: false
    });
    assert.throws(TypeError, function () {
        Object.defineProperties(obj, {
            prop: {
                value: 13,
                configurable: true
            }
        });
    });
    assert.sameValue(obj.prop, 12, 'obj.prop');
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