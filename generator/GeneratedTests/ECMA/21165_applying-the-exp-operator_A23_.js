try {
    var exponents = [];
    var bases = [];
    bases[0] = -1.7976931348623157e+308;
    bases[1] = -Math.PI;
    bases[2] = -1;
    bases[3] = -1e-15;
    exponents[0] = -Math.PI;
    exponents[1] = -Math.E;
    exponents[2] = -1.000000000000001;
    exponents[3] = -1e-15;
    exponents[4] = 1e-15;
    exponents[5] = 1.000000000000001;
    exponents[6] = Math.E;
    exponents[7] = Math.PI;
    for (var i = 0; i < bases.length; i++) {
        for (var j = 0; j < exponents.length; j++) {
            assert.sameValue(bases[i] ** exponents[j], NaN, bases[i] + ' ** ' + exponents[j]);
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