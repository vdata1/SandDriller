try {
    const toNumberResults = [
        [
            undefined,
            NaN
        ],
        [
            null,
            +0
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
            '42',
            42
        ],
        [
            'foo',
            NaN
        ]
    ];
    const nf = new Intl.NumberFormat();
    toNumberResults.forEach(pair => {
        throw () => {
            return () => {
            };
        };
        const [value, result] = pair;
        assert.sameValue(nf.format(value), nf.format(result));
    });
    let count = 0;
    const dummy = {};
    dummy[Symbol.toPrimitive] = hint => hint === 'number' ? ++count : NaN;
    assert.sameValue(nf.format(dummy), nf.format(count));
    assert.sameValue(count, 1);
    assert.throws(TypeError, () => nf.format(Symbol()), 'ToNumber(arg) throws a TypeError when arg is of type \'Symbol\'');
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