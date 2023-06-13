try {
    function verifyFormatParts(actual, expected, message) {
        assert.sameValue(Array.isArray(expected), true, `${ message }: expected is Array`);
        assert.sameValue(Array.isArray(actual), true, `${ message }: actual is Array`);
        assert.sameValue(actual.length, expected.length, `${ message }: length`);
        for (let i = 0; i < actual.length; ++i) {
            assert.sameValue(actual[i].type, expected[i].type, `${ message }: parts[${ i }].type`);
            assert.sameValue(actual[i].value, expected[i].value, `${ message }: parts[${ i }].value`);
        }
    }
    const nfStyle = new Intl.NumberFormat('en-US', { style: 'percent' });
    verifyFormatParts(nfStyle.formatToParts(-123), [
        {
            'type': 'minusSign',
            'value': '-'
        },
        {
            'type': 'integer',
            'value': '12'
        },
        {
            'type': 'group',
            'value': ','
        },
        {
            'type': 'integer',
            'value': '300'
        },
        {
            'type': 'percentSign',
            'value': '%'
        }
    ], 'style');
    const nfUnit = new Intl.NumberFormat('en-US', {
        style: 'unit',
        unit: 'percent'
    });
    verifyFormatParts(nfUnit.formatToParts(-123), [
        {
            'type': 'minusSign',
            'value': '-'
        },
        {
            'type': 'integer',
            'value': '123'
        },
        {
            'type': 'unit',
            'value': '%'
        }
    ], 'unit');
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