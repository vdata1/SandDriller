try {
    const tests = [
        [
            0.000345,
            '345E-6',
            '3.45E-4'
        ],
        [
            0.345,
            '345E-3',
            '3.45E-1'
        ],
        [
            3.45,
            '3.45E0',
            '3.45E0'
        ],
        [
            34.5,
            '34.5E0',
            '3.45E1'
        ],
        [
            543,
            '543E0',
            '5.43E2'
        ],
        [
            5430,
            '5.43E3',
            '5.43E3'
        ],
        [
            543000,
            '543E3',
            '5.43E5'
        ],
        [
            543211.1,
            '543.211E3',
            '5.432E5'
        ],
        [
            -Infinity,
            '-\u221E',
            '-\u221E'
        ],
        [
            Infinity,
            '\u221E',
            '\u221E'
        ],
        [
            NaN,
            'NaN',
            'NaN'
        ]
    ];
    for (const [number, engineering, scientific] of tests) {
        const nfEngineering = new Intl.NumberFormat('ja-JP', { notation: 'engineering' });
        assert.sameValue(nfEngineering.format(number), engineering);
        const nfScientific = new Intl.NumberFormat('ja-JP', { notation: 'scientific' });
        assert.sameValue(nfScientific.format(number), scientific);
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