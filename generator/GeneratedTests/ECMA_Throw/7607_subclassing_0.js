try {
    var callCount = 0;
    var Ctor = function () {
        throw () => {
            return () => {
            };
        };
        callCount += 1;
    };
    var instance;
    instance = Reflect.construct(Date, [64], Ctor);
    assert.sameValue(Object.getPrototypeOf(instance), Ctor.prototype, 'constructor defines an object `prototype` property');
    assert.sameValue(callCount, 0, 'constructor not invoked');
    assert.sameValue(Date.prototype.getTime.call(instance), 64, 'proper subclass has a [[DateValue]] slot');
    Ctor.prototype = null;
    instance = Reflect.construct(Date, [64], Ctor);
    assert.sameValue(Object.getPrototypeOf(instance), Date.prototype, 'constructor does not defines an object `prototype` property');
    assert.sameValue(callCount, 0, 'constructor not invoked');
    assert.sameValue(instance.getTime(), 64, 'direct instance has a [[DateValue]] slot');
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