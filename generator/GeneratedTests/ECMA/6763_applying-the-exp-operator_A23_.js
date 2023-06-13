try {
    var exponent = new Array();
    var base = new Array();
    base[0] = -1.7976931348623157e+308;
    base[1] = -Math.PI;
    base[2] = -1;
    base[3] = -1e-15;
    var basenum = 4;
    exponent[0] = -Math.PI;
    exponent[1] = -Math.E;
    exponent[2] = -1.000000000000001;
    exponent[3] = -1e-15;
    exponent[4] = 1e-15;
    exponent[5] = 1.000000000000001;
    exponent[6] = Math.E;
    exponent[7] = Math.PI;
    var exponentnum = 8;
    for (var i = 0; i < basenum; i++) {
        for (var j = 0; j < exponentnum; j++) {
            assert.sameValue(Math.pow(base[i], exponent[j]), NaN, '(' + base[i] + ', ' + exponent[j] + ')');
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