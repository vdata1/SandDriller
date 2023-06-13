try {
    var values = [
        2,
        1,
        3
    ];
    var initCount = 0;
    var callCount = 0;
    var C = class {
        static method([[...x] = function () {
                initCount += 1;
            }()]) {
            assert(Array.isArray(x));
            assert.sameValue(x[0], 2);
            assert.sameValue(x[1], 1);
            assert.sameValue(x[2], 3);
            assert.sameValue(x.length, 3);
            assert.notSameValue(x, values);
            assert.sameValue(initCount, 0);
            callCount = callCount + 1;
        }
    };
    C.method([values]);
    assert.sameValue(callCount, 1, 'method invoked exactly once');
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