try {
    const rtf = new Intl.RelativeTimeFormat('en-US');
    assert.sameValue(typeof rtf.formatToParts, 'function', 'formatToParts should be supported');
    const units = [
        'second',
        'minute',
        'hour',
        'day',
        'week',
        'month',
        'quarter',
        'year'
    ];
    for (const unit of units) {
        const plural = rtf.formatToParts(3, unit + 's');
        const singular = rtf.formatToParts(3, unit);
        assert.sameValue(plural.length, singular.length, `Should support unit ${ unit }s as a synonym for ${ unit }: length`);
        for (let i = 0; i < plural.length; ++i) {
            assert.sameValue(plural[i].type, singular[i].type, `Should support unit ${ unit }s as a synonym for ${ unit }: [${ i }].type`);
            assert.sameValue(plural[i].value, singular[i].value, `Should support unit ${ unit }s as a synonym for ${ unit }: [${ i }].value`);
            assert.sameValue(plural[i].unit, singular[i].unit, `Should support unit ${ unit }s as a synonym for ${ unit }: [${ i }].unit`);
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