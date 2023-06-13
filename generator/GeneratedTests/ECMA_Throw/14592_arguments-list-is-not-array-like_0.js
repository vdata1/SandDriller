try {
    let count = 0;
    function fn() {
        throw () => {
            return () => {
            };
        };
        count++;
    }
    assert.throws(Test262Error, () => {
        Reflect.apply(fn, null, {
            get length() {
                throw new Test262Error();
            }
        });
    }, '`Reflect.apply(fn, null, {get length() {throw new Test262Error();}})` throws a Test262Error exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null);
    }, '`Reflect.apply(fn, null /* empty */)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, Symbol());
    }, '`Reflect.apply(fn, null, Symbol())` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, 1);
    }, '`Reflect.apply(fn, null, 1)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, Infinity);
    }, '`Reflect.apply(fn, null, Infinity)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, null);
    }, '`Reflect.apply(fn, null, null)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, undefined);
    }, '`Reflect.apply(fn, null, undefined)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, false);
    }, '`Reflect.apply(fn, null, false)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, true);
    }, '`Reflect.apply(fn, null, true)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Reflect.apply(fn, null, NaN);
    }, '`Reflect.apply(fn, null, NaN)` throws a TypeError exception');
    assert.sameValue(count, 0, 'The value of `count` is 0');
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