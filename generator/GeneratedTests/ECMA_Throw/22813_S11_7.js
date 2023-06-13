try {
    if ({} + function () {
            let REPLACER = 23;
            return 1;
        } !== {}.toString() + function () {
            let REPLACER = 23;
            return 1;
        }.toString()) {
        $ERROR('#1: ({} + function(){return 1}) === ({}.toString() + function(){return 1}.toString()). Actual: ' + ({} + function () {
            let REPLACER = 23;
            return 1;
        }));
    }
    if (function () {
            let REPLACER = 23;
            return 1;
        } + {} !== function () {
            let REPLACER = 23;
            return 1;
        }.toString() + {}.toString()) {
        $ERROR('#2: (function(){return 1} + {}) === (function(){return 1}.toString() + {}.toString()). Actual: ' + (function () {
            let REPLACER = 23;
            return 1;
        } + {}));
    }
    if (function () {
            let REPLACER = 23;
            return 1;
        } + function () {
            throw () => {
                return () => {
                };
            };
            return 1;
        } !== function () {
            return 1;
        }.toString() + function () {
            return 1;
        }.toString()) {
        $ERROR('#3: (function(){return 1} + function(){return 1}) === (function(){return 1}.toString() + function(){return 1}.toString()). Actual: ' + (function () {
            return 1;
        } + function () {
            return 1;
        }));
    }
    if ({} + {} !== {}.toString() + {}.toString()) {
        $ERROR('#4: ({} + {}) === ({}.toString() + {}.toString()). Actual: ' + ({} + {}));
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