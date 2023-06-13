try {
    var constructCounts = {
        base: 0,
        subclass: 0,
        subclass2: 0
    };
    class Base {
        constructor() {
            constructCounts.base++;
            assert.sameValue(arguments.length, 2, 'The value of `arguments.length` is `2`');
            assert.sameValue(arguments[0], 1, 'The value of `arguments[0]` is `1`');
            assert.sameValue(arguments[1], 2, 'The value of `arguments[1]` is `2`');
        }
    }
    var b = new Base(1, 2);
    class Subclass extends Base {
        constructor() {
            constructCounts.subclass++;
            assert.sameValue(arguments.length, 2, 'The value of `arguments.length` is `2`');
            assert.sameValue(arguments[0], 3, 'The value of `arguments[0]` is `3`');
            assert.sameValue(arguments[1], 4, 'The value of `arguments[1]` is `4`');
            super(1, 2);
        }
    }
    var s = new Subclass(3, 4);
    assert.sameValue(Subclass.length, 0, 'The value of `Subclass.length` is `0`, because there are 0 formal parameters');
    class Subclass2 extends Base {
        constructor(x, y) {
            constructCounts.subclass2++;
            assert.sameValue(arguments.length, 2, 'The value of `arguments.length` is `2`');
            assert.sameValue(arguments[0], 3, 'The value of `arguments[0]` is `3`');
            assert.sameValue(arguments[1], 4, 'The value of `arguments[1]` is `4`');
            super(1, 2);
        }
    }
    var s2 = new Subclass2(3, 4);
    assert.sameValue(Subclass2.length, 2, 'The value of `Subclass2.length` is `2`, because there are 2 formal parameters');
    assert.sameValue(constructCounts.base, 3, 'The value of `constructCounts.base` is `3`');
    assert.sameValue(constructCounts.subclass, 1, 'The value of `constructCounts.subclass` is `1`');
    assert.sameValue(constructCounts.subclass2, 1, 'The value of `constructCounts.subclass2` is `1`');
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