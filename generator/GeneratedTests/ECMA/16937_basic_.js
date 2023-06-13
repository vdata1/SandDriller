try {
    var actual = new Intl.Collator().resolvedOptions();
    var actual2 = new Intl.Collator().resolvedOptions();
    assert.notSameValue(actual2, actual, 'resolvedOptions returned the same object twice.');
    var collations = [
        'default',
        'big5han',
        'compat',
        'dict',
        'direct',
        'ducet',
        'emoji',
        'eor',
        'gb2312',
        'phonebk',
        'phonetic',
        'pinyin',
        'reformed',
        'searchjl',
        'stroke',
        'trad',
        'unihan',
        'zhuyin'
    ];
    assert(isCanonicalizedStructurallyValidLanguageTag(actual.locale), 'Invalid locale: ' + actual.locale);
    assert.sameValue(actual.usage, 'sort');
    assert.sameValue(actual.sensitivity, 'variant');
    assert.sameValue(actual.ignorePunctuation, false);
    assert.notSameValue(collations.indexOf(actual.collation), -1, 'Invalid collation: ' + actual.collation);
    var dataPropertyDesc = {
        writable: true,
        enumerable: true,
        configurable: true
    };
    verifyProperty(actual, 'locale', dataPropertyDesc);
    verifyProperty(actual, 'usage', dataPropertyDesc);
    verifyProperty(actual, 'sensitivity', dataPropertyDesc);
    verifyProperty(actual, 'ignorePunctuation', dataPropertyDesc);
    verifyProperty(actual, 'collation', dataPropertyDesc);
    if (actual.hasOwnProperty('numeric')) {
        assert.notSameValue([
            true,
            false
        ].indexOf(actual.numeric), -1);
        verifyProperty(actual, 'numeric', dataPropertyDesc);
    }
    if (actual.hasOwnProperty('caseFirst')) {
        assert.notSameValue([
            'upper',
            'lower',
            'false'
        ].indexOf(actual.caseFirst), -1);
        verifyProperty(actual, 'caseFirst', dataPropertyDesc);
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