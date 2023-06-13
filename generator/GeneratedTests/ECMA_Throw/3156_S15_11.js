try {
    var obj = {};
    obj.join = Array.prototype.join;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        }
    };
    if (obj.join() !== ',,') {
        $ERROR('#1: obj.length = {valueOf: function() {return 3}}  obj.join() === ",,". Actual: ' + obj.join());
    }
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        },
        toString: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    if (obj.join() !== ',,') {
        $ERROR('#2: obj.length = {valueOf: function() {return 3}, toString: function() {return 2}}  obj.join() === ",,". Actual: ' + obj.join());
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
    if (obj.join() !== ',,') {
        $ERROR('#3: obj.length = {valueOf: function() {return 3}, toString: function() {return {}}}  obj.join() === ",,". Actual: ' + obj.join());
    }
    try {
        obj.length = {
            valueOf: function () {
                let REPLACER = 23;
                return 3;
            },
            toString: function () {
                let REPLACER = 23;
                throw 'error';
            }
        };
        if (obj.join() !== ',,') {
            $ERROR('#4.1: obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.join() === ",". Actual: ' + obj.join());
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.join() not throw "error"');
        } else {
            $ERROR('#4.3: obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.join() not throw Error. Actual: ' + e);
        }
    }
    obj.length = {
        toString: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    if (obj.join() !== ',') {
        $ERROR('#5: obj.length = {toString: function() {return 2}}  obj.join() === ",". Actual: ' + obj.join());
    }
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    if (obj.join() !== ',') {
        $ERROR('#6: obj.length = {valueOf: function() {return {}}, toString: function() {return 2}}  obj.join() === ",". Actual: ' + obj.join());
    }
    try {
        obj.length = {
            valueOf: function () {
                let REPLACER = 23;
                throw 'error';
            },
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                return 2;
            }
        };
        obj.join();
        $ERROR('#7.1: obj.length = {valueOf: function() {throw "error"}, toString: function() {return 2}}; obj.join() throw "error". Actual: ' + obj.join());
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: obj.length = {valueOf: function() {throw "error"}, toString: function() {return 2}}; obj.join() throw "error". Actual: ' + e);
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
        obj.join();
        $ERROR('#8.1: obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.join() throw TypeError. Actual: ' + obj.join());
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8,2: obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.join() throw TypeError. Actual: ' + e);
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