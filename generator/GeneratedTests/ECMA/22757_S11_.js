try {
    var object = {
        valueOf: function () {
            return 1;
        }
    };
    var y = object++;
    if (y !== 1) {
        $ERROR('#1: var object = {valueOf: function() {return 1}}; var y = object++; y === 1. Actual: ' + y);
    } else {
        if (object !== 1 + 1) {
            $ERROR('#1: var object = {valueOf: function() {return 1}}; object++; object === 1 + 1. Actual: ' + object);
        }
    }
    var object = {
        valueOf: function () {
            return 1;
        },
        toString: function () {
            return 0;
        }
    };
    var y = object++;
    if (y !== 1) {
        $ERROR('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; var y = object++; y === 1. Actual: ' + y);
    } else {
        if (object !== 1 + 1) {
            $ERROR('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; object++; object === 1 + 1. Actual: ' + object);
        }
    }
    var object = {
        valueOf: function () {
            return 1;
        },
        toString: function () {
            return {};
        }
    };
    var y = object++;
    if (y !== 1) {
        $ERROR('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; var y = object++; y === 1. Actual: ' + y);
    } else {
        if (object !== 1 + 1) {
            $ERROR('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; object++; object === 1 + 1. Actual: ' + object);
        }
    }
    try {
        var object = {
            valueOf: function () {
                return 1;
            },
            toString: function () {
                throw 'error';
            }
        };
        var y = object++;
        if (y !== 1) {
            $ERROR('#4.1: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; var y = object++; y === 1. Actual: ' + y);
        } else {
            if (object !== 1 + 1) {
                $ERROR('#4.2: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; object++; object === 1 + 1. Actual: ' + object);
            }
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.3: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; var y = object++; y not throw "error"');
        } else {
            $ERROR('#4.4: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; var y = object++; y not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            return 1;
        }
    };
    var y = object++;
    if (y !== 1) {
        $ERROR('#5.1: var object = {toString: function() {return 1}}; var y = object++; y === 1. Actual: ' + y);
    } else {
        if (object !== 1 + 1) {
            $ERROR('#5.2: var object = {toString: function() {return 1}}; object++; object === 1 + 1. Actual: ' + object);
        }
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 1;
        }
    };
    var y = object++;
    if (y !== 1) {
        $ERROR('#6.1: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; var y = object++; y === 1. Actual: ' + y);
    } else {
        if (object !== 1 + 1) {
            $ERROR('#6.2: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; object++; object === 1 + 1. Actual: ' + object);
        }
    }
    try {
        var object = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        var y = object++;
        $ERROR('#7.1: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; object++ throw "error". Actual: ' + y);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; object++ throw "error". Actual: ' + e);
        }
    }
    try {
        var object = {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        var y = object++;
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; object++ throw TypeError. Actual: ' + y);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; object++ throw TypeError. Actual: ' + e);
        }
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