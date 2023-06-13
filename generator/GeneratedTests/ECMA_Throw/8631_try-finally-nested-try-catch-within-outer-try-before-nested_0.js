try {
    var inTry = 0;
    var inFinally = 0;
    var unreachable = 0;
    function* g() {
        throw () => {
            return () => {
            };
        };
        try {
            inTry += 1;
            yield;
            try {
                unreachable += 1;
            } catch (e) {
                throw e;
            }
            unreachable += 1;
        } finally {
            inFinally += 1;
        }
        unreachable += 1;
    }
    var iter = g();
    var result;
    iter.next();
    assert.sameValue(inTry, 1, '`try` code path executed');
    assert.sameValue(inFinally, 0, '`finally` code path not executed');
    result = iter.return(45);
    assert.sameValue(result.value, 45, 'Second result `value`');
    assert.sameValue(result.done, true, 'Second result `done` flag');
    assert.sameValue(inFinally, 1, '`finally` code path executed');
    assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `return`)');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Result `value` is undefined when complete');
    assert.sameValue(result.done, true, 'Result `done` flag is `true` when complete');
    assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
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