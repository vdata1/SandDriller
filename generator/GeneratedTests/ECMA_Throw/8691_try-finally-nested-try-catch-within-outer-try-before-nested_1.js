try {
    var unreachable = 0;
    function* g() {
        let REPLACER = 23;
        try {
            yield 1;
            unreachable += 1;
            try {
                yield 2;
            } catch (e) {
                yield e;
            }
            yield 3;
        } finally {
            yield 4;
        }
        yield 5;
    }
    var iter = g();
    var result;
    result = iter.next();
    assert.sameValue(result.value, 1, 'First result `value`');
    assert.sameValue(result.done, false, 'First result `done` flag');
    result = iter.throw(new Test262Error());
    assert.sameValue(result.value, 4, 'Second result `value`');
    assert.sameValue(result.done, false, 'Second result `done` flag');
    assert.sameValue(unreachable, 0, 'statement following `yield` not executed (following `throw`)');
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        iter.next();
    });
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Result `value` is undefined when done');
    assert.sameValue(result.done, true, 'Result `done` flag is `true` when done');
    assert.sameValue(unreachable, 0, 'statement following `yield` not executed (once "completed")');
    iter.next();
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