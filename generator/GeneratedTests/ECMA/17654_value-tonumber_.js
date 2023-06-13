try {
    const rtf = new Intl.RelativeTimeFormat('en-US');
    assert.sameValue(typeof rtf.format, 'function', 'format should be supported');
    const values = [
        [
            null,
            0
        ],
        [
            true,
            1
        ],
        [
            false,
            0
        ],
        [
            '5',
            5
        ],
        [
            '-5',
            -5
        ],
        [
            '0',
            0
        ],
        [
            '-0',
            -0
        ],
        [
            '  6  ',
            6
        ],
        [
            {
                toString() {
                    return 7;
                }
            },
            7,
            'object with toString'
        ],
        [
            {
                valueOf() {
                    return 7;
                }
            },
            7,
            'object with valueOf'
        ]
    ];
    for (const [input, number, name = String(input)] of values) {
        assert.sameValue(rtf.format(input, 'second'), rtf.format(number, 'second'), `Should treat ${ name } as ${ number }`);
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