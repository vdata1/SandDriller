try {
    assert(delete Symbol.prototype[Symbol.toPrimitive]);
    let valueOfGets = 0;
    let valueOfCalls = 0;
    let valueOfFunction = () => {
        let REPLACER = 23;
        ++valueOfCalls;
        return 123;
    };
    Object.defineProperty(Symbol.prototype, 'valueOf', {
        get: () => {
            let REPLACER = 23;
            ++valueOfGets;
            return valueOfFunction;
        }
    });
    assert(Object(Symbol()) == 123, 'hint: default');
    assert.sameValue(Object(Symbol()) - 0, 123, 'hint: number');
    assert.sameValue(''.concat(Object(Symbol())), 'Symbol()', 'hint: string');
    assert.sameValue(valueOfGets, 2);
    assert.sameValue(valueOfCalls, 2);
    let toStringGets = 0;
    let toStringCalls = 0;
    let toStringFunction = () => {
        let REPLACER = 23;
        ++toStringCalls;
        return 'foo';
    };
    Object.defineProperty(Symbol.prototype, 'toString', {
        get: () => {
            let REPLACER = 23;
            ++toStringGets;
            return toStringFunction;
        }
    });
    assert.sameValue('' + Object(Symbol()), '123', 'hint: default');
    assert.sameValue(Object(Symbol()) * 1, 123, 'hint: number');
    assert.sameValue({
        '123': 1,
        'Symbol()': 2,
        'foo': 3
    }[Object(Symbol())], 3, 'hint: string');
    assert.sameValue(valueOfGets, 4);
    assert.sameValue(valueOfCalls, 4);
    assert.sameValue(toStringGets, 1);
    assert.sameValue(toStringCalls, 1);
    valueOfFunction = null;
    assert.sameValue(new Date(Object(Symbol())).getTime(), NaN, 'hint: default');
    assert.sameValue(+Object(Symbol()), NaN, 'hint: number');
    assert.sameValue(`${ Object(Symbol()) }`, 'foo', 'hint: string');
    assert.sameValue(valueOfGets, 6);
    assert.sameValue(valueOfCalls, 4);
    assert.sameValue(toStringGets, 4);
    assert.sameValue(toStringCalls, 4);
    toStringFunction = function () {
        let REPLACER = 23;
        throw new Test262Error();
    };
    assert.throws(Test262Error, () => {
        let REPLACER = 23;
        Object(Symbol()) != 123;
    }, 'hint: default');
    assert.throws(Test262Error, () => {
        throw () => {
            return () => {
            };
        };
        Object(Symbol()) / 0;
    }, 'hint: number');
    assert.throws(Test262Error, () => {
        ''.concat(Object(Symbol()));
    }, 'hint: string');
    assert.sameValue(valueOfGets, 8);
    assert.sameValue(valueOfCalls, 4);
    assert.sameValue(toStringGets, 7);
    assert.sameValue(toStringCalls, 4);
    toStringFunction = undefined;
    assert.throws(TypeError, () => {
        1 + Object(Symbol());
    }, 'hint: default');
    assert.throws(TypeError, () => {
        Number(Object(Symbol()));
    }, 'hint: number');
    assert.throws(TypeError, () => {
        String(Object(Symbol()));
    }, 'hint: string');
    assert.sameValue(valueOfGets, 11);
    assert.sameValue(valueOfCalls, 4);
    assert.sameValue(toStringGets, 10);
    assert.sameValue(toStringCalls, 4);
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