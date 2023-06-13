try {
    if (-2147483647 << 0 !== -2147483647) {
        $ERROR('#1: (-2147483647 << 0) === -2147483647. Actual: ' + (-2147483647 << 0));
    }
    if (-2147483648 << 0 !== -2147483648) {
        $ERROR('#2: (-2147483648 << 0) === -2147483648. Actual: ' + (-2147483648 << 0));
    }
    if (-2147483649 << 0 !== 2147483647) {
        $ERROR('#3: (-2147483649 << 0) === 2147483647. Actual: ' + (-2147483649 << 0));
    }
    if (4294967295 << 0 !== -1) {
        $ERROR('#4: (4294967295 << 0) === -1. Actual: ' + (4294967295 << 0));
    }
    if (4294967296 << 0 !== 0) {
        $ERROR('#5: (4294967296 << 0) === 0. Actual: ' + (4294967296 << 0));
    }
    if (4294967297 << 0 !== 1) {
        $ERROR('#6: (4294967297 << 0) === 1. Actual: ' + (4294967297 << 0));
    }
    if (-4294967295 << 0 !== 1) {
        $ERROR('#7: (-4294967295 << 0) === 1. Actual: ' + (-4294967295 << 0));
    }
    if (-4294967296 << 0 !== 0) {
        $ERROR('#8: (-4294967296 << 0) === 0. Actual: ' + (-4294967296 << 0));
    }
    if (-4294967297 << 0 !== -1) {
        $ERROR('#9: (-4294967297 << 0) === -1. Actual: ' + (-4294967297 << 0));
    }
    if (8589934591 << 0 !== -1) {
        $ERROR('#10: (8589934591 << 0) === -1. Actual: ' + (8589934591 << 0));
    }
    if (8589934592 << 0 !== 0) {
        $ERROR('#11: (8589934592 << 0) === 0. Actual: ' + (8589934592 << 0));
    }
    if (8589934593 << 0 !== 1) {
        $ERROR('#12: (8589934593 << 0) === 1. Actual: ' + (8589934593 << 0));
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