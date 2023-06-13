try {
    const validRegionOptions = [
        [
            undefined,
            undefined
        ],
        [
            'FR',
            'en-FR'
        ],
        [
            '554',
            'en-NZ'
        ],
        [
            554,
            'en-NZ'
        ]
    ];
    for (const [region, expected] of validRegionOptions) {
        let options = { region };
        let expect = expected || 'en';
        assert.sameValue(new Intl.Locale('en', options).toString(), expect, `new Intl.Locale('en', {region: "${ region }"}).toString() returns "${ expect }"`);
        expect = expected || 'en-US';
        assert.sameValue(new Intl.Locale('en-US', options).toString(), expect, `new Intl.Locale('en-US', {region: "${ region }"}).toString() returns "${ expect }"`);
        expect = (expected || 'en') + '-u-ca-gregory';
        assert.sameValue(new Intl.Locale('en-u-ca-gregory', options).toString(), expect, `new Intl.Locale('en-u-ca-gregory', {region: "${ region }"}).toString() returns "${ expect }"`);
        expect = (expected || 'en-US') + '-u-ca-gregory';
        assert.sameValue(new Intl.Locale('en-US-u-ca-gregory', options).toString(), expect, `new Intl.Locale('en-US-u-ca-gregory', {region: "${ region }"}).toString() returns "${ expect }"`);
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