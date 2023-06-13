try {
    var s1 = Symbol();
    var s2 = Symbol();
    assert.deepEqual(null, null);
    assert.deepEqual(undefined, undefined);
    assert.deepEqual('a', 'a');
    assert.deepEqual(1, 1);
    assert.deepEqual(true, true);
    assert.deepEqual(s1, s1);
    assert.deepEqual(Object('a'), 'a');
    assert.deepEqual(Object(1), 1);
    assert.deepEqual(Object(true), true);
    assert.deepEqual(Object(s1), s1);
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        assert.deepEqual(null, 0);
    });
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        assert.deepEqual(undefined, 0);
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual('', 0);
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual('1', 1);
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual('1', '2');
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual(true, 1);
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual(true, false);
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual(s1, 'Symbol()');
    });
    assert.throws(Test262Error, function () {
        assert.deepEqual(s1, s2);
    });
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