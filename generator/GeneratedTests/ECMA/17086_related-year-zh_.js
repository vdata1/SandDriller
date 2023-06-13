try {
    const df = new Intl.DateTimeFormat('zh-u-ca-chinese', { year: 'numeric' });
    const date = new Date(2019, 5, 1);
    const actual = df.formatToParts(date);
    const expected = [
        {
            type: 'relatedYear',
            value: '2019'
        },
        {
            type: 'yearName',
            value: '己亥'
        },
        {
            type: 'literal',
            value: '年'
        }
    ];
    assert.sameValue(Array.isArray(actual), true, 'actual is Array');
    if (actual.length <= 2) {
        expected.shift();
    }
    actual.forEach(({type, value}, i) => {
        const {
            type: eType,
            value: eValue
        } = expected[i];
        assert.sameValue(type, eType, `actual[${ i }].type should be ${ eType }`);
        assert.sameValue(value, eValue, `actual[${ i }].value should be ${ eValue }`);
    });
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