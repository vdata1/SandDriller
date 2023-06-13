try {
    var thrower = {};
    var counter = {};
    var log;
    Object.defineProperty(thrower, Symbol.toPrimitive, {
        get: function () {
            log += 'accessThrower';
            return function () {
                throw new Test262Error();
            };
        }
    });
    Object.defineProperty(counter, Symbol.toPrimitive, {
        get: function () {
            log += 'accessCounter';
            return function () {
                log += 'callCounter';
            };
        }
    });
    log = '';
    assert.throws(Test262Error, function () {
        thrower + counter;
    }, 'error thrown by left-hand side');
    assert.sameValue(log, 'accessThrower');
    log = '';
    assert.throws(Test262Error, function () {
        counter + thrower;
    }, 'error thrown by right-hand side');
    assert.sameValue(log, 'accessCountercallCounteraccessThrower');
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