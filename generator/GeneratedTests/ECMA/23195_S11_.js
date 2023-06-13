try {
    if (2147483648.1 >>> 0 !== 2147483648) {
        $ERROR('#1: 2147483648.1 >>> 0 === 2147483648. Actual: ' + (2147483648.1 >>> 0));
    }
    if (4294967296.1 >>> 0 !== 0) {
        $ERROR('#2: 4294967296.1 >>> 0 === 0. Actual: ' + (4294967296.1 >>> 0));
    }
    if (6442450944.1 >>> 0 !== 2147483648) {
        $ERROR('#3: 6442450944.1 >>> 0 === 2147483648. Actual: ' + (6442450944.1 >>> 0));
    }
    if (4294967295.1 >>> 0 !== 4294967295) {
        $ERROR('#4: 4294967295.1 >>> 0 === 4294967295. Actual: ' + (4294967295.1 >>> 0));
    }
    if (6442450943.1 >>> 0 !== 2147483647) {
        $ERROR('#5: 6442450943.1 >>> 0 === 2147483647. Actual: ' + (6442450943.1 >>> 0));
    }
    if (-2147483649.1 >>> 0 !== 2147483647) {
        $ERROR('#6: -2147483649.1 >>> 0 === 2147483647. Actual: ' + (-2147483649.1 >>> 0));
    }
    if (-4294967297.1 >>> 0 !== 4294967295) {
        $ERROR('#7: -4294967297.1 >>> 0 === 4294967295. Actual: ' + (-4294967297.1 >>> 0));
    }
    if (-6442450945.1 >>> 0 !== 2147483647) {
        $ERROR('#8: -6442450945.1 >>> 0 === 2147483647. Actual: ' + (-6442450945.1 >>> 0));
    }
    if (-4294967296.1 >>> 0 !== 0) {
        $ERROR('#9: -4294967296.1 >>> 0 === 0 . Actual: ' + (-4294967296.1 >>> 0));
    }
    if (-6442450944.1 >>> 0 !== 2147483648) {
        $ERROR('#10: -6442450944.1 >>> 0 === 2147483648. Actual: ' + (-6442450944.1 >>> 0));
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