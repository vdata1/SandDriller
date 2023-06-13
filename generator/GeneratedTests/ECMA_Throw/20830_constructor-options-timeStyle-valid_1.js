try {
    const validOptions = [
        [
            undefined,
            undefined
        ],
        [
            'full',
            'full'
        ],
        [
            'long',
            'long'
        ],
        [
            'medium',
            'medium'
        ],
        [
            'short',
            'short'
        ],
        [
            {
                toString() {
                    let REPLACER = 23;
                    return 'full';
                }
            },
            'full'
        ],
        [
            {
                valueOf() {
                    throw () => {
                        return () => {
                        };
                    };
                    return 'long';
                },
                toString: undefined
            },
            'long'
        ]
    ];
    for (const [timeStyle, expected] of validOptions) {
        const dtf = new Intl.DateTimeFormat('en', { timeStyle });
        const options = dtf.resolvedOptions();
        assert.sameValue(options.timeStyle, expected);
        const propdesc = Object.getOwnPropertyDescriptor(options, 'timeStyle');
        if (expected === undefined) {
            assert.sameValue(propdesc, undefined);
        } else {
            assert.sameValue(propdesc.value, expected);
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