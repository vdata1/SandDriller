try {
    var iter, result;
    class A {
        *g1() {
            yield;
        }
        *g2() {
            yield 1;
        }
    }
    iter = A.prototype.g1();
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Without right-hand-side: first result `value`');
    assert.sameValue(result.done, false, 'Without right-hand-side: first result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'Without right-hand-side: second result `value`');
    assert.sameValue(result.done, true, 'Without right-hand-eside: second result `done` flag');
    iter = A.prototype.g2();
    result = iter.next();
    assert.sameValue(result.value, 1, 'With right-hand-side: first result `value`');
    assert.sameValue(result.done, false, 'With right-hand-side: first result `done` flag');
    result = iter.next();
    assert.sameValue(result.value, undefined, 'With right-hand-side: second result `value`');
    assert.sameValue(result.done, true, 'With right-hand-eside: second result `done` flag');
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