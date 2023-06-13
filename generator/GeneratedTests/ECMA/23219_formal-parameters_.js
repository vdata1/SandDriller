try {
    function* g(a, b, c, d) {
        yield a;
        yield b;
        yield c;
        yield d;
    }
    var iter = g(23, 45, 33);
    var result;
    result = iter.next();
    assert.sameValue(result.value, 23, 'First result `value`');
    assert.sameValue(result.done, false, 'First result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, 45, 'Second result `value`');
    assert.sameValue(result.done, false, 'Second result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, 33, 'Third result `value`');
    assert.sameValue(result.done, false, 'Third result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Fourth result `value` (unspecified parameter)');
    assert.sameValue(result.done, false, 'Fourth result `done` flag (unspecified parameter)');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Final result `value`');
    assert.sameValue(result.done, true, 'Final result `done` flag');
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