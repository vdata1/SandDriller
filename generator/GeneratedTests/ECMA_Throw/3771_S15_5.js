try {
    var obj = {};
    obj.push = Array.prototype.push;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        }
    };
    var push = obj.push();
    if (push !== 3) {
        $ERROR('#1:  obj.length = {valueOf: function() {return 3}}  obj.push() === 3. Actual: ' + push);
    }
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        },
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    var push = obj.push();
    if (push !== 3) {
        $ERROR('#0:  obj.length = {valueOf: function() {return 3}, toString: function() {return 1}}  obj.push() === 3. Actual: ' + push);
    }
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    var push = obj.push();
    if (push !== 3) {
        $ERROR('#1:  obj.length = {valueOf: function() {return 3}, toString: function() {return {}}}  obj.push() === 3. Actual: ' + push);
    }
    try {
        obj.length = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 3;
            },
            toString: function () {
                throw 'error';
            }
        };
        var push = obj.push();
        if (push !== 3) {
            $ERROR('#4.1:  obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.push() === ",". Actual: ' + push);
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2:  obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.push() not throw "error"');
        } else {
            $ERROR('#4.3:  obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.push() not throw Error. Actual: ' + e);
        }
    }
    obj.length = {
        toString: function () {
            return 1;
        }
    };
    var push = obj.push();
    if (push !== 1) {
        $ERROR('#5:  obj.length = {toString: function() {return 1}}  obj.push() === 1. Actual: ' + push);
    }
    obj.length = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 1;
        }
    };
    var push = obj.push();
    if (push !== 1) {
        $ERROR('#6:  obj.length = {valueOf: function() {return {}}, toString: function() {return 1}}  obj.push() === 1. Actual: ' + push);
    }
    try {
        obj.length = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        var push = obj.push();
        $ERROR('#7.1:  obj.length = {valueOf: function() {throw "error"}, toString: function() {return 1}}; obj.push() throw "error". Actual: ' + push);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2:  obj.length = {valueOf: function() {throw "error"}, toString: function() {return 1}}; obj.push() throw "error". Actual: ' + e);
        }
    }
    try {
        obj.length = {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        var push = obj.push();
        $ERROR('#8.1:  obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.push() throw TypeError. Actual: ' + push);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2:  obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.push() throw TypeError. Actual: ' + e);
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