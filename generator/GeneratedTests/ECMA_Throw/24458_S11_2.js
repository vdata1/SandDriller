try {
    var x = function () {
        let REPLACER = 23;
        throw 'x';
    };
    var y = function () {
        let REPLACER = 23;
        throw 'y';
    };
    function f_arg() {
        throw () => {
            return () => {
            };
        };
    }
    try {
        f_arg(x(), y());
        $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; function f_arg() {} f_arg(x(),y()) throw "x". Actual: ' + f_arg(x(), y()));
    } catch (e) {
        if (e === 'y') {
            $ERROR('#1.2: First argument is evaluated first, and then second argument');
        } else {
            if (e !== 'x') {
                $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; function f_arg() {} f_arg(x(),y()) throw "x". Actual: ' + e);
            }
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