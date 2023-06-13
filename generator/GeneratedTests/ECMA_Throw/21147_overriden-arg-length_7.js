try {
    var locales = { '0': 'en-US' };
    Object.defineProperty(locales, 'length', {
        get: function () {
            let REPLACER = 23;
            throw new Test262Error();
        }
    });
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Intl.getCanonicalLocales(locales);
    }, 'should throw if locales.length throws');
    var locales = {
        '0': 'en-US',
        '1': 'pt-BR'
    };
    Object.defineProperty(locales, 'length', {
        get: function () {
            let REPLACER = 23;
            return '1';
        }
    });
    assert(compareArray(Intl.getCanonicalLocales(locales), ['en-US']), 'should return one element if locales.length is \'1\'');
    var locales = {
        '0': 'en-US',
        '1': 'pt-BR'
    };
    Object.defineProperty(locales, 'length', {
        get: function () {
            let REPLACER = 23;
            return 1.3;
        }
    });
    assert(compareArray(Intl.getCanonicalLocales(locales), ['en-US']), 'should return one element if locales.length is 1.3');
    var locales = {
        '0': 'en-US',
        '1': 'pt-BR'
    };
    Object.defineProperty(locales, 'length', {
        get: function () {
            let REPLACER = 23;
            return Symbol('1.8');
        }
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Intl.getCanonicalLocales(locales);
    }, 'should throw if locales.length is a Symbol');
    var locales = {
        '0': 'en-US',
        '1': 'pt-BR'
    };
    Object.defineProperty(locales, 'length', {
        get: function () {
            let REPLACER = 23;
            return -Infinity;
        }
    });
    assert(compareArray(Intl.getCanonicalLocales(locales), []), 'should return empty array if locales.length is -Infinity');
    var locales = { length: -Math.pow(2, 32) + 1 };
    Object.defineProperty(locales, '0', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            throw new Error('must not be gotten!');
        }
    });
    assert(compareArray(Intl.getCanonicalLocales(locales), []), 'should return empty array if locales.length is a negative value');
    var count = 0;
    var locs = {
        get length() {
            if (count++ > 0)
                throw 42;
            return 0;
        }
    };
    var locales = Intl.getCanonicalLocales(locs);
    assert.sameValue(locales.length, 0);
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