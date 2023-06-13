try {
    const tests = [
        [
            [],
            'undefined'
        ],
        [
            [undefined],
            'undefined'
        ],
        [
            [null],
            'null'
        ],
        [
            [true],
            'true'
        ],
        [
            [false],
            'false'
        ],
        [
            [12],
            '12'
        ],
        [
            [1.23],
            '1.23'
        ],
        [
            [[
                    'a',
                    'b'
                ]],
            'a'
        ],
        [
            [{}],
            '['
        ]
    ];
    const segmenter = new Intl.Segmenter('en', { 'granularity': 'word' });
    for (const [args, expected] of tests) {
        const segments = segmenter.segment(...args);
        const actual = [...segments][0].segment;
        assert.sameValue(actual, expected, `Expected segment "${ expected }", found "${ actual }" for arguments ${ args }`);
    }
    const symbol = Symbol();
    assert.throws(TypeError, () => segmenter.segment(symbol));
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