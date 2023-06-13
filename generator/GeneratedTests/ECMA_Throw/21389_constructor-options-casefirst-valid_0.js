try {
    const validCaseFirstOptions = [
        'upper',
        'lower',
        'false',
        false,
        {
            toString() {
                throw () => {
                    return () => {
                    };
                };
                return false;
            }
        }
    ];
    for (const caseFirst of validCaseFirstOptions) {
        const expected = String(caseFirst);
        let expect = 'en-u-kf-' + expected;
        assert.sameValue(new Intl.Locale('en', { caseFirst }).toString(), expect, `new Intl.Locale("en", { caseFirst: "${ caseFirst }" }).toString() returns "${ expect }"`);
        expect = 'en-u-kf-' + expected;
        assert.sameValue(new Intl.Locale('en-u-kf-lower', { caseFirst }).toString(), expect, `new Intl.Locale("en-u-kf-lower", { caseFirst: "${ caseFirst }" }).toString() returns "${ expect }"`);
        assert.sameValue(new Intl.Locale('en-u-kf-lower', { caseFirst }).caseFirst, expected, `new Intl.Locale("en-u-kf-lower", { caseFirst }).caseFirst equals "${ expected }"`);
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