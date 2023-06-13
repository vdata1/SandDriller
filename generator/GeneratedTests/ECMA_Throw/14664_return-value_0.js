try {
    var o = {};
    o.p1 = 'value 1';
    assert.sameValue(Reflect.get(o, 'p1'), 'value 1', 'Return value from data descriptor');
    Object.defineProperty(o, 'p2', { get: undefined });
    assert.sameValue(Reflect.get(o, 'p2'), undefined, 'Return undefined if getter is undefined');
    Object.defineProperty(o, 'p3', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            return 'foo';
        }
    });
    assert.sameValue(Reflect.get(o, 'p3'), 'foo', 'Return Call(getter, Receiver)');
    var o2 = Object.create({ p: 42 });
    assert.sameValue(Reflect.get(o2, 'p'), 42, 'Return value from prototype without own property.');
    assert.sameValue(Reflect.get(o2, 'u'), undefined, 'Return undefined without property on the object and its prototype');
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