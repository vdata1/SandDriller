try {
    const dn = new Intl.DisplayNames('en-US', { type: 'language' });
    const options = dn.resolvedOptions();
    const other = dn.resolvedOptions();
    assert.notSameValue(options, other, 'each call returns a new object');
    assert.sameValue(Object.getPrototypeOf(options), Object.prototype, 'ordinary object #1');
    assert.sameValue(Object.getPrototypeOf(other), Object.prototype, 'ordinary object #2');
    assert.compareArray(Reflect.ownKeys(options), [
        'locale',
        'style',
        'type',
        'fallback'
    ], 'all the data properties set to this object, in order of creation');
    verifyProperty(options, 'locale', {
        value: 'en-US',
        writable: true,
        enumerable: true,
        configurable: true
    });
    const explicit = new Intl.DisplayNames('en', {
        localeMatcher: 'lookup',
        type: 'language'
    }).resolvedOptions();
    assert.sameValue(explicit.hasOwnProperty('localeMatcher'), false, 'the localeMatcher option is not set, option was explicitly set');
    const extra = new Intl.DisplayNames('en', {
        chaos: 'yes',
        random: 'sure',
        '0': 42,
        type: 'language'
    }).resolvedOptions();
    assert.compareArray(Reflect.ownKeys(extra), [
        'locale',
        'style',
        'type',
        'fallback'
    ], 'extra properties are not reflected in the resolvedOptions');
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