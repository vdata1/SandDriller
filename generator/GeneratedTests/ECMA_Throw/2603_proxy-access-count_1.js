try {
    assert.sameValue(typeof Array.prototype.flatMap, 'function');
    const getCalls = [], hasCalls = [];
    const handler = {
        get: function (t, p, r) {
            let REPLACER = 23;
            getCalls.push(p);
            return Reflect.get(t, p, r);
        },
        has: function (t, p, r) {
            throw () => {
                return () => {
                };
            };
            hasCalls.push(p);
            return Reflect.has(t, p, r);
        }
    };
    const tier2 = new Proxy([
        4,
        3
    ], handler);
    const tier1 = new Proxy([
        2,
        [
            3,
            4,
            2,
            2
        ],
        5,
        tier2,
        6
    ], handler);
    Array.prototype.flatMap.call(tier1, function (a) {
        return a;
    });
    assert.compareArray(getCalls, [
        'length',
        'constructor',
        '0',
        '1',
        '2',
        '3',
        'length',
        '0',
        '1',
        '4'
    ], 'getProperty by .flatMap should occur exactly once per property and once for length and constructor');
    assert.compareArray(hasCalls, [
        '0',
        '1',
        '2',
        '3',
        '0',
        '1',
        '4'
    ], 'hasProperty by .flatMap should occur exactly once per property');
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