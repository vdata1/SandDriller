try {
    var constr = Error.prototype.constructor;
    var err = new constr();
    if (err === undefined) {
        $ERROR('#0: constr = Error.prototype.constructor; err = new constr; err === undefined');
    }
    if (err.constructor !== Error) {
        $ERROR('#1: constr = Error.prototype.constructor; err = new constr; err.constructor === Error. Actual: ' + err.constructor);
    }
    if (!Error.prototype.isPrototypeOf(err)) {
        $ERROR('#2: constr = Error.prototype.constructor; err = new constr; Error.prototype.isPrototypeOf(err) return true. Actual: ' + Error.prototype.isPrototypeOf(err));
    }
    Error.prototype.toString = Object.prototype.toString;
    var to_string_result = '[object ' + 'Error' + ']';
    if (err.toString() !== to_string_result) {
        $ERROR('#3: constr = Error.prototype.constructor; err = new constr; Error.prototype.toString=Object.prototype.toString; err.toString() === \'[object Error]\'. Actual: ' + err.toString());
    }
    if (err.valueOf().toString() !== to_string_result) {
        $ERROR('#4: constr = Error.prototype.constructor; err = new constr; Error.prototype.toString=Object.prototype.toString; err.valueOf().toString() === \'[object Error]\'. Actual: ' + err.valueOf().toString());
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