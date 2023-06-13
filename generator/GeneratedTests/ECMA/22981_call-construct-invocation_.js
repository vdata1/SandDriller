try {
    var expectedNewTarget = function () {
    };
    var thisValue, instance, args, actualNewTarget;
    function Parent() {
        thisValue = this;
        args = arguments;
        actualNewTarget = new.target;
    }
    class Child extends Parent {
        constructor() {
            super(1, 2, 3);
        }
    }
    instance = Reflect.construct(Child, [
        4,
        5,
        6
    ], expectedNewTarget);
    assert.sameValue(thisValue, instance);
    assert.sameValue(args.length, 3, 'length of provided arguments object');
    assert.sameValue(args[0], 1, 'first argument');
    assert.sameValue(args[1], 2, 'second argument');
    assert.sameValue(args[2], 3, 'third argument');
    assert.sameValue(actualNewTarget, expectedNewTarget, 'new.target value');
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