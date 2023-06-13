try {
    var actual = new Intl.PluralRules().resolvedOptions();
    var actual2 = new Intl.PluralRules().resolvedOptions();
    assert.notSameValue(actual2, actual, 'resolvedOptions returned the same object twice.');
    assert(isCanonicalizedStructurallyValidLanguageTag(actual.locale), 'Invalid locale: ' + actual.locale);
    assert.sameValue(actual.type, 'cardinal');
    assert.sameValue(actual.minimumIntegerDigits, 1);
    assert.sameValue(actual.minimumFractionDigits, 0);
    assert.sameValue(actual.maximumFractionDigits, 3);
    var dataPropertyDesc = {
        writable: true,
        enumerable: true,
        configurable: true
    };
    verifyProperty(actual, 'locale', dataPropertyDesc);
    verifyProperty(actual, 'type', dataPropertyDesc);
    verifyProperty(actual, 'currency', undefined);
    verifyProperty(actual, 'currencyDisplay', undefined);
    verifyProperty(actual, 'minimumIntegerDigits', dataPropertyDesc);
    verifyProperty(actual, 'minimumFractionDigits', dataPropertyDesc);
    verifyProperty(actual, 'maximumFractionDigits', dataPropertyDesc);
    verifyProperty(actual, 'minimumSignificantDigits', undefined);
    verifyProperty(actual, 'maximumSignificantDigits', undefined);
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