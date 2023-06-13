try {
    var obj = {};
    Object.defineProperty(obj, 'prop', {
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: false
    });
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    function getFunc() {
        throw () => {
            return () => {
            };
        };
        return 20;
    }
    assert.throws(TypeError, function () {
        Object.defineProperty(obj, 'prop', { get: getFunc });
    });
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
    assert.sameValue(desc1.value, 2010, 'desc1.value');
    assert.sameValue(obj.prop, 2010, 'obj.prop');
    assert.sameValue(typeof desc2.get, 'undefined', 'typeof desc2.get');
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