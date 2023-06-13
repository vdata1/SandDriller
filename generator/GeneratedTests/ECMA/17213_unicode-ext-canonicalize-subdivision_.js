try {
    const testData = {
        'no23': 'no50',
        'cn11': 'cnbj',
        'cz10a': 'cz110',
        'fra': 'frges',
        'frg': 'frges',
        'lud': 'lucl'
    };
    for (let [alias, name] of Object.entries(testData)) {
        let region = name.substring(0, 2).toUpperCase();
        let tag = `und-${ region }-u-sd-${ alias }`;
        let canonical = `und-${ region }-u-sd-${ name }`;
        assert.sameValue(isCanonicalizedStructurallyValidLanguageTag(tag), false, '"' + tag + '" isn\'t a canonical language tag.');
        assert(isCanonicalizedStructurallyValidLanguageTag(canonical), '"' + canonical + '" is a canonical and structurally valid language tag.');
        let result = Intl.getCanonicalLocales(tag);
        assert.sameValue(result.length, 1);
        assert.sameValue(result[0], canonical);
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