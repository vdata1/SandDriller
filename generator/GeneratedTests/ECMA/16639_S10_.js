try {
    for (var x in this) {
        if (x === 'Object') {
            $ERROR('#1: \'property \'Object\' have attribute DontEnum');
        } else if (x === 'Function') {
            $ERROR('#1: \'Function\' have attribute DontEnum');
        } else if (x === 'String') {
            $ERROR('#1: \'String\' have attribute DontEnum');
        } else if (x === 'Number') {
            $ERROR('#1: \'Number\' have attribute DontEnum');
        } else if (x === 'Array') {
            $ERROR('#1: \'Array\' have attribute DontEnum');
        } else if (x === 'Boolean') {
            $ERROR('#1: \'Boolean\' have attribute DontEnum');
        } else if (x === 'Date') {
            $ERROR('#1: \'Date\' have attribute DontEnum');
        } else if (x === 'RegExp') {
            $ERROR('#1: \'RegExp\' have attribute DontEnum');
        } else if (x === 'Error') {
            $ERROR('#1: \'Error\' have attribute DontEnum');
        } else if (x === 'EvalError') {
            $ERROR('#1: \'EvalError\' have attribute DontEnum');
        } else if (x === 'RangeError') {
            $ERROR('#1: \'RangeError\' have attribute DontEnum');
        } else if (x === 'ReferenceError') {
            $ERROR('#1: \'ReferenceError\' have attribute DontEnum');
        } else if (x === 'SyntaxError') {
            $ERROR('#1: \'SyntaxError\' have attribute DontEnum');
        } else if (x === 'TypeError') {
            $ERROR('#1: \'TypeError\' have attribute DontEnum');
        } else if (x === 'URIError') {
            $ERROR('#1: \'URIError\' have attribute DontEnum');
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