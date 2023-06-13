try {
    const tests = [
        [
            -987,
            {
                'short': '-987 km/h',
                'narrow': '-987km/h',
                'long': '-987 kilometers per hour'
            }
        ],
        [
            -0.001,
            {
                'short': '-0.001 km/h',
                'narrow': '-0.001km/h',
                'long': '-0.001 kilometers per hour'
            }
        ],
        [
            -0,
            {
                'short': '-0 km/h',
                'narrow': '-0km/h',
                'long': '-0 kilometers per hour'
            }
        ],
        [
            0,
            {
                'short': '0 km/h',
                'narrow': '0km/h',
                'long': '0 kilometers per hour'
            }
        ],
        [
            0.001,
            {
                'short': '0.001 km/h',
                'narrow': '0.001km/h',
                'long': '0.001 kilometers per hour'
            }
        ],
        [
            987,
            {
                'short': '987 km/h',
                'narrow': '987km/h',
                'long': '987 kilometers per hour'
            }
        ]
    ];
    for (const [number, expectedData] of tests) {
        for (const [unitDisplay, expected] of Object.entries(expectedData)) {
            const nf = new Intl.NumberFormat('en-US', {
                style: 'unit',
                unit: 'kilometer-per-hour',
                unitDisplay
            });
            assert.sameValue(nf.format(number), expected);
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