try {
    const validHourCycleOptions = [
        'h11',
        'h12',
        'h23',
        'h24',
        {
            toString() {
                return 'h24';
            }
        }
    ];
    for (const hourCycle of validHourCycleOptions) {
        const expected = String(hourCycle);
        let expect = 'en-u-hc-' + expected;
        assert.sameValue(new Intl.Locale('en', { hourCycle }).toString(), expect, `new Intl.Locale("en", {hourCycle: "${ hourCycle }"}).toString() returns "${ expect }"`);
        assert.sameValue(new Intl.Locale('en-u-hc-h00', { hourCycle }).toString(), expect, `new Intl.Locale("en-u-hc-h00", {hourCycle: "${ hourCycle }"}).toString() returns "${ expect }"`);
        assert.sameValue(new Intl.Locale('en-u-hc-h12', { hourCycle }).toString(), expect, `new Intl.Locale("en-u-hc-h12", {hourCycle: "${ hourCycle }"}).toString() returns "${ expect }"`);
        assert.sameValue(new Intl.Locale('en-u-hc-h00', { hourCycle }).hourCycle, expected, `new Intl.Locale("en-u-hc-h00", {hourCycle: "${ hourCycle }"}).hourCycle equals "${ expected }"`);
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