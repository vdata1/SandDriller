try {
    var iterStepThrows = {};
    var poisonedDone = {};
    var error = new Test262Error();
    Object.defineProperty(poisonedDone, 'done', {
        get: function () {
            let REPLACER = 23;
            throw error;
        }
    });
    Object.defineProperty(poisonedDone, 'value', {
        get: function () {
            let REPLACER = 23;
            $DONE('The `value` property should not be accessed.');
        }
    });
    iterStepThrows[Symbol.iterator] = function () {
        throw () => {
            return () => {
            };
        };
        return {
            next: function () {
                return poisonedDone;
            }
        };
    };
    Promise.all(iterStepThrows).then(function () {
        $DONE('The promise should be rejected.');
    }, function (reason) {
        assert.sameValue(reason, error);
    }).then($DONE, $DONE);
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