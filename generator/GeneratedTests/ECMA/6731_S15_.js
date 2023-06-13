try {
    assert.sameValue(Math.max(NaN), NaN, 'NaN');
    var vals = new Array();
    vals[0] = -Infinity;
    vals[1] = -1e-15;
    vals[2] = -0;
    vals[3] = +0;
    vals[4] = 1e-15;
    vals[5] = +Infinity;
    vals[6] = NaN;
    var valnum = 7;
    var args = new Array();
    for (var i = 0; i <= 1; i++) {
        args[i] = NaN;
        for (var j = 0; j < valnum; j++) {
            args[1 - i] = vals[j];
            assert.sameValue(Math.max(args[0], args[1]), NaN, 'max(' + args[0] + ', ' + args[1] + ')');
        }
    }
    var k = 1;
    var l = 2;
    for (var i = 0; i <= 2; i++) {
        args[i] = NaN;
        if (i === 1) {
            k = 0;
        } else if (i === 2) {
            l = 1;
        }
        for (var j = 0; j < valnum; j++) {
            for (var jj = 0; jj < valnum; jj++) {
                args[k] = vals[j];
                args[l] = vals[jj];
                assert.sameValue(Math.max(args[0], args[1], args[2]), NaN, 'max(' + args[0] + ', ' + args[1] + ', ' + args[2] + ')');
            }
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