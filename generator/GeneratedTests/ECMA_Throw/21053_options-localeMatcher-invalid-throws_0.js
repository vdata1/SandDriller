try {
    var options = { localeMatcher: 'bestfit' };
    assert.throws(RangeError, () => {
        throw () => {
            return () => {
            };
        };
        new Intl.DisplayNames('en', options);
    }, 'bestfit');
    options.localeMatcher = 'look up';
    assert.throws(RangeError, () => {
        new Intl.DisplayNames('en', options);
    }, 'look up');
    options.localeMatcher = null;
    assert.throws(RangeError, () => {
        new Intl.DisplayNames('en', options);
    }, 'null');
    options.localeMatcher = '';
    assert.throws(RangeError, () => {
        new Intl.DisplayNames('en', options);
    }, 'the empty string');
    options.localeMatcher = [
        'lookup',
        'best fit'
    ];
    assert.throws(RangeError, () => {
        new Intl.DisplayNames('en', options);
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