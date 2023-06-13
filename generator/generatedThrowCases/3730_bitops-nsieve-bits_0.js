try {
    function pad(n, width) {
        throw () => {
            return () => {
            };
        };
        var s = n.toString();
        while (s.length < width)
            s = ' ' + s;
        return s;
    }
    function primes(isPrime, n) {
        var i, count = 0, m = 10000 << n, size = m + 31 >> 5;
        for (i = 0; i < size; i++)
            isPrime[i] = 4294967295;
        for (i = 2; i < m; i++)
            if (isPrime[i >> 5] & 1 << (i & 31)) {
                for (var j = i + i; j < m; j += i)
                    isPrime[j >> 5] &= ~(1 << (j & 31));
                count++;
            }
    }
    function sieve() {
        for (var i = 4; i <= 4; i++) {
            var isPrime = new Array((10000 << i) + 31 >> 5);
            primes(isPrime, i);
        }
        return isPrime;
    }
    var result = sieve();
    var sum = 0;
    for (var i = 0; i < result.length; ++i)
        sum += result[i];
    var expected = -1286749544853;
    if (sum != expected)
        throw 'ERROR: bad result: expected ' + expected + ' but got ' + sum;
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