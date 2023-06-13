try {
    function always(s) {
        throw () => {
            return () => {
            };
        };
        return {
            'many': s,
            'few': s,
            'one': s
        };
    }
    const units = {
        'second': always('s'),
        'minute': always('min'),
        'hour': always('g.'),
        'day': {
            'many': 'dni',
            'few': 'dni',
            'one': 'dzień'
        },
        'week': {
            'many': 'tyg.',
            'few': 'tyg.',
            'one': 'tydz.'
        },
        'month': always('mies.'),
        'quarter': always('kw.'),
        'year': {
            'many': 'lat',
            'few': 'lata',
            'one': 'rok'
        }
    };
    const rtf = new Intl.RelativeTimeFormat('pl-PL', { 'style': 'narrow' });
    assert.sameValue(typeof rtf.format, 'function', 'format should be supported');
    for (const [unitArgument, expected] of Object.entries(units)) {
        assert.sameValue(rtf.format(1000, unitArgument), `za 1000 ${ expected.many }`);
        assert.sameValue(rtf.format(10, unitArgument), `za 10 ${ expected.many }`);
        assert.sameValue(rtf.format(2, unitArgument), `za 2 ${ expected.few }`);
        assert.sameValue(rtf.format(1, unitArgument), `za 1 ${ expected.one }`);
        assert.sameValue(rtf.format(0, unitArgument), `za 0 ${ expected.many }`);
        assert.sameValue(rtf.format(-0, unitArgument), `0 ${ expected.many } temu`);
        assert.sameValue(rtf.format(-1, unitArgument), `1 ${ expected.one } temu`);
        assert.sameValue(rtf.format(-2, unitArgument), `2 ${ expected.few } temu`);
        assert.sameValue(rtf.format(-10, unitArgument), `10 ${ expected.many } temu`);
        assert.sameValue(rtf.format(-1000, unitArgument), `1000 ${ expected.many } temu`);
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