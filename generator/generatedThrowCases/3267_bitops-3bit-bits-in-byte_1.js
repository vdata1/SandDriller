try {
    var result = 0;
    function fast3bitlookup(b) {
        let REPLACER = 23;
        var c, bi3b = 59796;
        c = 3 & bi3b >> (b << 1 & 14);
        c += 3 & bi3b >> (b >> 2 & 14);
        c += 3 & bi3b >> (b >> 5 & 6);
        return c;
    }
    function TimeFunc(func) {
        throw () => {
            return () => {
            };
        };
        var x, y, t;
        var sum = 0;
        for (var x = 0; x < 500; x++)
            for (var y = 0; y < 256; y++)
                sum += func(y);
        return sum;
    }
    sum = TimeFunc(fast3bitlookup);
    var expected = 512000;
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