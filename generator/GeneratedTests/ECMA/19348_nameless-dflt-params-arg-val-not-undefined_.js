try {
    var obj = {};
    var falseCount = 0;
    var stringCount = 0;
    var nanCount = 0;
    var zeroCount = 0;
    var nullCount = 0;
    var objCount = 0;
    var callCount = 0;
    var ref;
    ref = async function (aFalse = falseCount += 1, aString = stringCount += 1, aNaN = nanCount += 1, a0 = zeroCount += 1, aNull = nullCount += 1, aObj = objCount += 1) {
        assert.sameValue(aFalse, false);
        assert.sameValue(aString, '');
        assert.sameValue(aNaN, NaN);
        assert.sameValue(a0, 0);
        assert.sameValue(aNull, null);
        assert.sameValue(aObj, obj);
        callCount = callCount + 1;
    };
    ref(false, '', NaN, 0, null, obj).then(() => {
        assert.sameValue(callCount, 1, 'function invoked exactly once');
    }).then($DONE, $DONE);
    assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
    assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
    assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
    assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
    assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
    assert.sameValue(objCount, 0, 'initializer not evaluated: object');
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