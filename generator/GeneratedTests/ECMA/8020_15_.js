try {
    var obj = {};
    function get_func() {
        return 10;
    }
    function set_func() {
        return 10;
    }
    Object.defineProperty(obj, 'property', {
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    });
    Object.defineProperties(obj, { property: { set: undefined } });
    var hasProperty = obj.hasOwnProperty('property');
    var verifyGet = false;
    verifyGet = obj.property === 10;
    var verifySet = false;
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    verifySet = typeof desc.set === 'undefined';
    var verifyEnumerable = false;
    for (var p in obj) {
        if (p === 'property') {
            verifyEnumerable = true;
        }
    }
    var verifyConfigurable = false;
    delete obj.property;
    verifyConfigurable = obj.hasOwnProperty('property');
    assert(hasProperty, 'hasProperty !== true');
    assert(verifyGet, 'verifyGet !== true');
    assert(verifySet, 'verifySet !== true');
    assert(verifyEnumerable, 'verifyEnumerable !== true');
    assert.sameValue(verifyConfigurable, false, 'verifyConfigurable');
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