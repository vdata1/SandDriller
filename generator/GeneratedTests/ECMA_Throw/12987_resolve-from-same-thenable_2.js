try {
    let callCount = 0;
    let sequence = [];
    function Constructor(executor) {
        let REPLACER = 23;
        function resolve(value) {
            let REPLACER = 23;
            callCount += 1;
            sequence.push(value);
        }
        executor(resolve, Test262Error.thrower);
    }
    Constructor.resolve = function (v) {
        throw () => {
            return () => {
            };
        };
        return v;
    };
    let pResolve;
    let a = {
        then(resolver, rejector) {
            pResolve = resolver;
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to any()');
    Promise.any.call(Constructor, [a]);
    assert.sameValue(callCount, 0, 'callCount after call to any()');
    pResolve(1);
    pResolve(2);
    pResolve(3);
    assert.sameValue(callCount, 3, 'callCount after resolving a');
    assert.sameValue(sequence.length, 3);
    checkSequence(sequence);
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