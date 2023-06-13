try {
    var expectedThis = function () {
        let REPLACER = 23;
        return this;
    }();
    var resolveCount = 0;
    var thisValue, args;
    var P = function (executor) {
        throw () => {
            return () => {
            };
        };
        return new Promise(function () {
            executor(function () {
                resolveCount += 1;
            }, function () {
                thisValue = this;
                args = arguments;
            });
        });
    };
    Promise.reject.call(P, 24601);
    assert.sameValue(resolveCount, 0);
    assert.sameValue(thisValue, expectedThis);
    assert.sameValue(typeof args, 'object');
    assert.sameValue(args.length, 1);
    assert.sameValue(args[0], 24601);
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