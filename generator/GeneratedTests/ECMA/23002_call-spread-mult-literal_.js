try {
    var callCount = 0;
    class Test262ParentClass {
        constructor() {
            assert.sameValue(arguments.length, 5);
            assert.sameValue(arguments[0], 5);
            assert.sameValue(arguments[1], 6);
            assert.sameValue(arguments[2], 7);
            assert.sameValue(arguments[3], 8);
            assert.sameValue(arguments[4], 9);
            callCount += 1;
        }
    }
    class Test262ChildClass extends Test262ParentClass {
        constructor() {
            super(5, ...[
                6,
                7,
                8
            ], 9);
        }
    }
    new Test262ChildClass();
    assert.sameValue(callCount, 1);
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