try {
    if (true != {
            valueOf: function () {
                return 1;
            }
        } !== false) {
        $ERROR('#1: (true != {valueOf: function() {return 1}}) === false');
    }
    if (1 != {
            valueOf: function () {
                return 1;
            },
            toString: function () {
                return 0;
            }
        } !== false) {
        $ERROR('#2: (1 != {valueOf: function() {return 1}, toString: function() {return 0}}) === false');
    }
    if ('+1' != {
            valueOf: function () {
                return 1;
            },
            toString: function () {
                return {};
            }
        } !== false) {
        $ERROR('#3: ("+1" != {valueOf: function() {return 1}, toString: function() {return {}}}) === false');
    }
    try {
        if (true != {
                valueOf: function () {
                    return '+1';
                },
                toString: function () {
                    throw 'error';
                }
            } !== false) {
            $ERROR('#4.1: (true != {valueOf: function() {return "+1"}, toString: function() {throw "error"}}) === false');
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: (true != {valueOf: function() {return "+1"}, toString: function() {throw "error"}}) not throw "error"');
        } else {
            $ERROR('#4.3: (true != {valueOf: function() {return "+1"}, toString: function() {throw "error"}}) not throw Error. Actual: ' + e);
        }
    }
    if (1 != {
            toString: function () {
                return '+1';
            }
        } !== false) {
        $ERROR('#5: (1 != {toString: function() {return "+1"}}) === false');
    }
    if ('1' != {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return '+1';
            }
        } !== true) {
        $ERROR('#6.1: ("1" != {valueOf: function() {return {}}, toString: function() {return "+1"}}) === true');
    } else {
        if ('+1' != {
                valueOf: function () {
                    return {};
                },
                toString: function () {
                    return '+1';
                }
            } !== false) {
            $ERROR('#6.2: ("+1" != {valueOf: function() {return {}}, toString: function() {return "+1"}}) === false');
        }
    }
    try {
        1 != {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        $ERROR('#7: (1 != {valueOf: function() {throw "error"}, toString: function() {return 1}}) throw "error"');
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7: (1 != {valueOf: function() {throw "error"}, toString: function() {return 1}}) throw "error"');
        }
    }
    try {
        1 != {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        $ERROR('#8: (1 != {valueOf: function() {return {}}, toString: function() {return {}}}) throw TypeError');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8: (1 != {valueOf: function() {return {}}, toString: function() {return {}}}) throw TypeError');
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