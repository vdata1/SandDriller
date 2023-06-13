try {
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '%5E';
        }
    };
    if (decodeURIComponent(object) !== '[object Object]') {
        $ERROR('#1: var object = {valueOf: function() {return "%5E"}}; decodeURIComponent(object) === [object Object]. Actual: ' + decodeURIComponent(object));
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '';
        },
        toString: function () {
            let REPLACER = 23;
            return '%5E';
        }
    };
    if (decodeURIComponent(object) !== '^') {
        $ERROR('#2: var object = {valueOf: function() {return ""}, toString: function() {return "%5E"}}; decodeURIComponent(object) === "^". Actual: ' + decodeURIComponent(object));
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '%5E';
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    if (decodeURIComponent(object) !== '^') {
        $ERROR('#3: var object = {valueOf: function() {return "%5E"}, toString: function() {return {}}}; decodeURIComponent(object) === "^". Actual: ' + decodeURIComponent(object));
    }
    try {
        var object = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                throw 'error';
            },
            toString: function () {
                return '%5E';
            }
        };
        if (decodeURIComponent(object) !== '^') {
            $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}}; decodeURIComponent(object) === "^". Actual: ' + decodeURIComponent(object));
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}}; decodeURIComponent(object) not throw "error"');
        } else {
            $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}}; decodeURIComponent(object) not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            return '%5E';
        }
    };
    if (decodeURIComponent(object) !== '^') {
        $ERROR('#5: var object = {toString: function() {return "%5E"}}; decodeURIComponent(object) === "^". Actual: ' + decodeURIComponent(object));
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return '%5E';
        }
    };
    if (decodeURIComponent(object) !== '^') {
        $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return "%5E"}}; decodeURIComponent(object) === "^". Actual: ' + decodeURIComponent(object));
    }
    try {
        var object = {
            valueOf: function () {
                return '%5E';
            },
            toString: function () {
                throw 'error';
            }
        };
        decodeURIComponent(object);
        $ERROR('#7.1: var object = {valueOf: function() {return "%5E"}, toString: function() {throw "error"}}; decodeURIComponent(object) throw "error". Actual: ' + decodeURIComponent(object));
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {return "%5E"}, toString: function() {throw "error"}}; decodeURIComponent(object) throw "error". Actual: ' + e);
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
        decodeURIComponent(object);
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; decodeURIComponent(object) throw TypeError. Actual: ' + decodeURIComponent(object));
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; decodeURIComponent(object) throw TypeError. Actual: ' + e);
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