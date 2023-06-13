try {
    function f1() {
        return arguments.length;
    }
    if (!(f1() === 0)) {
        $ERROR('#1: argument.length === 0');
    }
    if (!(f1(0) === 1)) {
        $ERROR('#2: argument.length === 1');
    }
    if (!(f1(0, 1) === 2)) {
        $ERROR('#3: argument.length === 2');
    }
    if (!(f1(0, 1, 2) === 3)) {
        $ERROR('#4: argument.length === 3');
    }
    if (!(f1(0, 1, 2, 3) === 4)) {
        $ERROR('#5: argument.length === 4');
    }
    var f2 = function () {
        return arguments.length;
    };
    if (!(f2() === 0)) {
        $ERROR('#6: argument.length === 0');
    }
    if (!(f2(0) === 1)) {
        $ERROR('#7: argument.length === 1');
    }
    if (!(f2(0, 1) === 2)) {
        $ERROR('#8: argument.length === 2');
    }
    if (!(f2(0, 1, 2) === 3)) {
        $ERROR('#9: argument.length === 3');
    }
    if (!(f2(0, 1, 2, 3) === 4)) {
        $ERROR('#10: argument.length === 4');
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