try {
    const validCollationOptions = [
        [
            'abc',
            'en-u-co-abc'
        ],
        [
            'abcd',
            'en-u-co-abcd'
        ],
        [
            'abcde',
            'en-u-co-abcde'
        ],
        [
            'abcdef',
            'en-u-co-abcdef'
        ],
        [
            'abcdefg',
            'en-u-co-abcdefg'
        ],
        [
            'abcdefgh',
            'en-u-co-abcdefgh'
        ],
        [
            '12345678',
            'en-u-co-12345678'
        ],
        [
            '1234abcd',
            'en-u-co-1234abcd'
        ],
        [
            '1234abcd-abc123',
            'en-u-co-1234abcd-abc123'
        ]
    ];
    for (const [collation, expected] of validCollationOptions) {
        assert.sameValue(new Intl.Locale('en', { collation }).toString(), expected, `new Intl.Locale('en', {collation: "${ collation }"}).toString() returns "${ expected }"`);
        assert.sameValue(new Intl.Locale('en-u-co-gregory', { collation }).toString(), expected, `new Intl.Locale('en-u-co-gregory', {collation: "${ collation }"}).toString() returns "${ expected }"`);
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