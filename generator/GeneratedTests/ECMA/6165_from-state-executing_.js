try {
    var iter, result;
    function* withoutVal() {
        iter.next();
    }
    function* withVal() {
        iter.next(42);
    }
    iter = withoutVal();
    assert.throws(TypeError, function () {
        iter.next();
    }, 'Error when invoked without value');
    result = iter.next();
    assert.sameValue(typeof result, 'object', 'type following invocation without value');
    assert.sameValue(result.value, undefined, '`value` following invocation without value');
    assert.sameValue(result.done, true, '`done` following invocation without value');
    iter = withVal();
    assert.throws(TypeError, function () {
        iter.next();
    }, 'Error when invoked with value');
    result = iter.next();
    assert.sameValue(typeof result, 'object', 'type following invocation with value');
    assert.sameValue(result.value, undefined, '`value` following invocation with value');
    assert.sameValue(result.done, true, '`done` following invocation with value');
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