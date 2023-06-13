try {
    assert.sameValue(typeof Intl.Locale, 'function');
    function mustReject(tag) {
        assert.throws(RangeError, () => {
            new Intl.Locale(tag);
        }, `tag "${ tag }" must be considered structurally invalid`);
    }
    mustReject('en-emodeng-emodeng');
    mustReject('en-Emodeng-emodeng');
    mustReject('en-emodeng-Emodeng');
    mustReject('en-variant-emodeng-emodeng');
    mustReject('en-variant-Emodeng-emodeng');
    mustReject('en-variant-emodeng-Emodeng');
    mustReject('en-emodeng-variant-emodeng');
    mustReject('en-Emodeng-variant-emodeng');
    mustReject('en-emodeng-variant-Emodeng');
    mustReject('en-emodeng-emodeng-variant');
    mustReject('en-Emodeng-emodeng-variant');
    mustReject('en-emodeng-Emodeng-variant');
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