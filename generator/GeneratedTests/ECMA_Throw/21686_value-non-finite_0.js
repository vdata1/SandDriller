try {
    const rtf = new Intl.RelativeTimeFormat('en-US');
    assert.sameValue(typeof rtf.format, 'function', 'format should be supported');
    const values = [
        [
            undefined,
            'undefined'
        ],
        [
            NaN,
            'NaN'
        ],
        [
            Infinity,
            'Infinity'
        ],
        [
            -Infinity,
            '-Infinity'
        ],
        [
            'string',
            '"string"'
        ],
        [
            {},
            'empty object'
        ],
        [
            {
                toString() {
                    throw () => {
                        return () => {
                        };
                    };
                    return NaN;
                },
                valueOf: undefined
            },
            'object with toString'
        ],
        [
            {
                valueOf() {
                    return NaN;
                },
                toString: undefined
            },
            'object with valueOf'
        ]
    ];
    for (const [value, name] of values) {
        assert.throws(RangeError, () => rtf.format(value, 'second'), name);
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