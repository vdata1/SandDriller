try {
    var o = {};
    var desc;
    var s1 = Symbol('1');
    Reflect.defineProperty(o, s1, {
        value: 42,
        writable: true,
        enumerable: true
    });
    assert.sameValue(o[s1], 42);
    desc = Object.getOwnPropertyDescriptor(o, s1);
    assert.sameValue(desc.writable, true);
    assert.sameValue(desc.configurable, false);
    assert.sameValue(desc.enumerable, true);
    var s2 = Symbol('2');
    var f1 = function () {
    };
    var f2 = function () {
    };
    Reflect.defineProperty(o, s2, {
        get: f1,
        set: f2
    });
    desc = Object.getOwnPropertyDescriptor(o, s2);
    assert.sameValue(desc.get, f1);
    assert.sameValue(desc.set, f2);
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