try {
    var langtag = 'de-latn-de-u-ca-gregory-co-phonebk-hc-h23-kf-true-kn-false-nu-latn';
    var loc = new Intl.Locale(langtag);
    assert.sameValue(loc.toString(), 'de-Latn-DE-u-ca-gregory-co-phonebk-hc-h23-kf-kn-false-nu-latn');
    assert.sameValue(loc.baseName, 'de-Latn-DE');
    assert.sameValue(loc.language, 'de');
    assert.sameValue(loc.script, 'Latn');
    assert.sameValue(loc.region, 'DE');
    assert.sameValue(loc.calendar, 'gregory');
    assert.sameValue(loc.collation, 'phonebk');
    assert.sameValue(loc.hourCycle, 'h23');
    if ('caseFirst' in loc) {
        assert.sameValue(loc.caseFirst, '');
    }
    if ('numeric' in loc) {
        assert.sameValue(loc.numeric, false);
    }
    assert.sameValue(loc.numberingSystem, 'latn');
    var loc = new Intl.Locale(langtag, {
        language: 'ja',
        script: 'jpan',
        region: 'jp',
        calendar: 'japanese',
        collation: 'search',
        hourCycle: 'h24',
        caseFirst: 'false',
        numeric: 'true',
        numberingSystem: 'jpanfin'
    });
    assert.sameValue(loc.toString(), 'ja-Jpan-JP-u-ca-japanese-co-search-hc-h24-kf-false-kn-nu-jpanfin');
    assert.sameValue(loc.baseName, 'ja-Jpan-JP');
    assert.sameValue(loc.language, 'ja');
    assert.sameValue(loc.script, 'Jpan');
    assert.sameValue(loc.region, 'JP');
    assert.sameValue(loc.calendar, 'japanese');
    assert.sameValue(loc.collation, 'search');
    assert.sameValue(loc.hourCycle, 'h24');
    if ('caseFirst' in loc) {
        assert.sameValue(loc.caseFirst, 'false');
    }
    if ('numeric' in loc) {
        assert.sameValue(loc.numeric, true);
    }
    assert.sameValue(loc.numberingSystem, 'jpanfin');
    var loc = new Intl.Locale(langtag, {
        language: 'fr',
        region: 'ca',
        collation: 'standard',
        hourCycle: 'h11'
    });
    assert.sameValue(loc.toString(), 'fr-Latn-CA-u-ca-gregory-co-standard-hc-h11-kf-kn-false-nu-latn');
    assert.sameValue(loc.baseName, 'fr-Latn-CA');
    assert.sameValue(loc.language, 'fr');
    assert.sameValue(loc.script, 'Latn');
    assert.sameValue(loc.region, 'CA');
    assert.sameValue(loc.calendar, 'gregory');
    assert.sameValue(loc.collation, 'standard');
    assert.sameValue(loc.hourCycle, 'h11');
    if ('caseFirst' in loc) {
        assert.sameValue(loc.caseFirst, '');
    }
    if ('numeric' in loc) {
        assert.sameValue(loc.numeric, false);
    }
    assert.sameValue(loc.numberingSystem, 'latn');
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