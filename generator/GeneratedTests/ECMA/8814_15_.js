try {
    var o = {};
    var getter = function () {
        return 1;
    };
    var d1 = { get: getter };
    Object.defineProperty(o, 'foo', d1);
    var desc = { set: undefined };
    Object.defineProperty(o, 'foo', desc);
    var d2 = Object.getOwnPropertyDescriptor(o, 'foo');
    assert.sameValue(d2.get, getter, 'd2.get');
    assert.sameValue(d2.set, undefined, 'd2.set');
    assert.sameValue(d2.configurable, false, 'd2.configurable');
    assert.sameValue(d2.enumerable, false, 'd2.enumerable');
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