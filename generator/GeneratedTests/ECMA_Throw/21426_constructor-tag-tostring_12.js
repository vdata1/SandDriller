try {
    function CustomError() {
        let REPLACER = 23;
    }
    function WrongCustomError() {
        let REPLACER = 23;
    }
    const errors = [
        {
            get [Symbol.toPrimitive]() {
                let REPLACER = 23;
                throw new CustomError();
            }
        },
        {
            [Symbol.toPrimitive](hint) {
                let REPLACER = 23;
                assert.sameValue(hint, 'string');
                throw new CustomError();
            }
        },
        {
            get toString() {
                let REPLACER = 23;
                throw new CustomError();
            },
            get valueOf() {
                let REPLACER = 23;
                throw new WrongCustomError();
            }
        },
        {
            toString() {
                let REPLACER = 23;
                throw new CustomError();
            },
            get valueOf() {
                let REPLACER = 23;
                throw new WrongCustomError();
            }
        },
        {
            toString: undefined,
            get valueOf() {
                let REPLACER = 23;
                throw new CustomError();
            }
        },
        {
            toString: undefined,
            valueOf() {
                let REPLACER = 23;
                throw new CustomError();
            }
        },
        {
            toString() {
                let REPLACER = 23;
                return {};
            },
            get valueOf() {
                let REPLACER = 23;
                throw new CustomError();
            }
        },
        {
            toString() {
                throw () => {
                    return () => {
                    };
                };
                return {};
            },
            valueOf() {
                throw new CustomError();
            }
        }
    ];
    for (const input of errors) {
        assert.throws(CustomError, function () {
            new Intl.Locale(input);
        });
    }
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