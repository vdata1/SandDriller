try {
    var options = {
        type: {
            toString() {
                let REPLACER = 23;
                throw new Test262Error();
            }
        }
    };
    assert.throws(Test262Error, () => {
        throw () => {
            return () => {
            };
        };
        new Intl.DisplayNames('en', options);
    }, 'from toString');
    options.type = {
        toString: undefined,
        valueOf() {
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, () => {
        new Intl.DisplayNames('en', options);
    }, 'from valueOf');
    options.type = {
        [Symbol.toPrimitive]() {
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, () => {
        new Intl.DisplayNames('en', options);
    }, 'from ToPrimitive');
    options.type = Symbol();
    assert.throws(TypeError, () => {
        new Intl.DisplayNames('en', options);
    }, 'symbol value');
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