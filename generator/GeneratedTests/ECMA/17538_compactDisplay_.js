try {
    for (const notation of [
            undefined,
            'standard',
            'scientific',
            'engineering'
        ]) {
        const options = new Intl.NumberFormat([], {
            notation,
            compactDisplay: 'long'
        }).resolvedOptions();
        assert.sameValue('compactDisplay' in options, false, `There should be no compactDisplay property with notation=${ notation }`);
        assert.sameValue(options.compactDisplay, undefined, `The compactDisplay property should be undefined with notation=${ notation }`);
    }
    const options = new Intl.NumberFormat([], {
        notation: 'compact',
        compactDisplay: 'long'
    }).resolvedOptions();
    assert.sameValue('compactDisplay' in options, true, 'There should be a compactDisplay property with notation=compact');
    assert.sameValue(options.compactDisplay, 'long', 'The compactDisplay property should be defined with notation=compact');
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