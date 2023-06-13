try {
    function truncate(x) {
        if (x > 0) {
            return Math.floor(x);
        } else {
            return Math.ceil(x);
        }
    }
    var x, y;
    x = 1.3;
    y = 1.1;
    if (x % y !== 0.19999999999999996) {
        $ERROR('#1: x = 1.3; y = 1.1; x % y === 0.19999999999999996. Actual: ' + x % y);
    }
    x = -1.3;
    y = 1.1;
    if (x % y !== -0.19999999999999996) {
        $ERROR('#2: x = -1.3; y = 1.1; x % y === -0.19999999999999996. Actual: ' + x % y);
    }
    x = 1.3;
    y = -1.1;
    if (x % y !== 0.19999999999999996) {
        $ERROR('#3: x = 1.3; y = -1.1; x % y === 0.19999999999999996. Actual: ' + x % y);
    }
    x = -1.3;
    y = -1.1;
    if (x % y !== -0.19999999999999996) {
        $ERROR('#4: x = -1.3; y = -1.1; x % y === -0.19999999999999996. Actual: ' + x % y);
    }
    x = 1.3;
    y = 1.1;
    if (x % y !== x - truncate(x / y) * y) {
        $ERROR('#5: x = 1.3; y = 1.1; x % y === x - truncate(x / y) * y. Actual: ' + x % y);
    }
    x = -1.3;
    y = 1.1;
    if (x % y !== x - truncate(x / y) * y) {
        $ERROR('#6: x = -1.3; y = 1.1; x % y === x - truncate(x / y) * y. Actual: ' + x % y);
    }
    x = 1.3;
    y = -1.1;
    if (x % y !== x - truncate(x / y) * y) {
        $ERROR('#7: x = 1.3; y = -1.1; x % y === x - truncate(x / y) * y. Actual: ' + x % y);
    }
    x = -1.3;
    y = -1.1;
    if (x % y !== x - truncate(x / y) * y) {
        $ERROR('#8: x = -1.3; y = -1.1; x % y === x - truncate(x / y) * y. Actual: ' + x % y);
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