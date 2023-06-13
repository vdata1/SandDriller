try {
    const keyValueTests = [{
            key: 'ca',
            option: 'calendar',
            tests: [
                [
                    'islamicc',
                    'islamic-civil'
                ],
                [
                    'ethiopic-amete-alem',
                    'ethioaa'
                ]
            ]
        }];
    for (const {key, option, tests} of keyValueTests) {
        for (const [noncanonical, canonical] of tests) {
            let canonicalInLocale = new Intl.Locale(`en-u-${ key }-${ canonical }`);
            assert.sameValue(canonicalInLocale[option], canonical, `new Intl.Locale("en-u-${ key }-${ canonical }").${ option } returns ${ canonical }`);
            let canonicalInOption = new Intl.Locale(`en`, { [option]: canonical });
            assert.sameValue(canonicalInOption[option], canonical, `new Intl.Locale("en", { ${ option }: "${ canonical }" }).${ option } returns ${ canonical }`);
            let noncanonicalInLocale = new Intl.Locale(`en-u-${ key }-${ noncanonical }`);
            assert.sameValue(noncanonicalInLocale[option], canonical, `new Intl.Locale("en-u-${ key }-${ noncanonical }").${ option } returns ${ canonical }`);
            let noncanonicalInOption = new Intl.Locale(`en`, { [option]: noncanonical });
            assert.sameValue(noncanonicalInOption[option], canonical, `new Intl.Locale("en", { ${ option }: "${ noncanonical }" }).${ option } returns ${ canonical }`);
        }
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