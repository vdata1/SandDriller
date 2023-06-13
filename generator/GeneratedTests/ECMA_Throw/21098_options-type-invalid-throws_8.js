try {
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', undefined);
    }, 'undefined options');
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', {});
    }, '{} options');
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', { type: undefined });
    }, 'undefined type');
    assert.throws(RangeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', { type: 'lang' });
    }, 'type = lang');
    assert.throws(RangeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', { type: 'dayPeriod' });
    }, 'dayPeriod not supported yet');
    assert.throws(RangeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', { type: 'weekday' });
    }, 'weekday not supported yet');
    assert.throws(RangeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', { type: null });
    }, 'type = null');
    assert.throws(RangeError, () => {
        let REPLACER = 23;
        new Intl.DisplayNames('en', { type: '' });
    }, 'type = ""');
    assert.throws(RangeError, () => {
        throw () => {
            return () => {
            };
        };
        new Intl.DisplayNames('en', {
            type: [
                'language',
                'region',
                'script',
                'currency'
            ]
        });
    }, 'an array with the valid options is not necessarily valid');
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