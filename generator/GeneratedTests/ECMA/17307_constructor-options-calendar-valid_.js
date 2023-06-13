try {
    const validCalendarOptions = [
        [
            'abc',
            'en-u-ca-abc'
        ],
        [
            'abcd',
            'en-u-ca-abcd'
        ],
        [
            'abcde',
            'en-u-ca-abcde'
        ],
        [
            'abcdef',
            'en-u-ca-abcdef'
        ],
        [
            'abcdefg',
            'en-u-ca-abcdefg'
        ],
        [
            'abcdefgh',
            'en-u-ca-abcdefgh'
        ],
        [
            '12345678',
            'en-u-ca-12345678'
        ],
        [
            '1234abcd',
            'en-u-ca-1234abcd'
        ],
        [
            '1234abcd-abc123',
            'en-u-ca-1234abcd-abc123'
        ]
    ];
    for (const [calendar, expected] of validCalendarOptions) {
        assert.sameValue(new Intl.Locale('en', { calendar }).toString(), expected, `new Intl.Locale('en', { calendar: "${ calendar }" }).toString() returns "${ expected }"`);
        assert.sameValue(new Intl.Locale('en-u-ca-gregory', { calendar }).toString(), expected, `new Intl.Locale('en-u-ca-gregory', { calendar: "${ calendar }" }).toString() returns "${ expected }"`);
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