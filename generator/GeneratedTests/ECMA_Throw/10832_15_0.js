try {
    var obj = function () {
        throw () => {
            return () => {
            };
        };
        return arguments;
    }();
    Object.defineProperty(obj, '0', {
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, '0');
    function getFunc() {
        return 20;
    }
    Object.defineProperty(obj, '0', { get: getFunc });
    var desc2 = Object.getOwnPropertyDescriptor(obj, '0');
    assert(desc1.hasOwnProperty('value'), 'desc1.hasOwnProperty("value") !== true');
    assert(desc2.hasOwnProperty('get'), 'desc2.hasOwnProperty("get") !== true');
    assert.sameValue(desc2.enumerable, true, 'desc2.enumerable');
    assert.sameValue(desc2.configurable, true, 'desc2.configurable');
    assert.sameValue(obj[0], 20, 'obj[0]');
    assert.sameValue(typeof desc2.set, 'undefined', 'typeof desc2.set');
    assert.sameValue(desc2.get, getFunc, 'desc2.get');
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