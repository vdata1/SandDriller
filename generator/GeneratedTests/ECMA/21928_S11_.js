try {
    if ((-1 && -0) !== 0) {
        $ERROR('#1.1: (-1 && -0) === 0');
    } else {
        if (1 / (-1 && -0) !== Number.NEGATIVE_INFINITY) {
            $ERROR('#1.2: (-1 && -0) === -0');
        }
    }
    if ((-1 && 0) !== 0) {
        $ERROR('#2.1: (-1 && 0) === 0');
    } else {
        if (1 / (-1 && 0) !== Number.POSITIVE_INFINITY) {
            $ERROR('#2.2: (-1 && 0) === +0');
        }
    }
    if (isNaN(0.1 && NaN) !== true) {
        $ERROR('#3: (0.1 && NaN) === Not-a-Number');
    }
    var y = new Number(0);
    if ((new Number(-1) && y) !== y) {
        $ERROR('#4: (var y = new Number(0); (new Number(-1) && y) === y');
    }
    var y = new Number(NaN);
    if ((new Number(0) && y) !== y) {
        $ERROR('#5: (var y = new Number(NaN); (new Number(0) && y) === y');
    }
    var y = new Number(-1);
    if ((new Number(NaN) && y) !== y) {
        $ERROR('#6: (var y = new Number(-1); (new Number(NaN) && y) === y');
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