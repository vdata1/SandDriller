try {
    if (0 !== 0) {
        $ERROR('#0: .0e-1 === 0');
    }
    if (0.01 !== 0.01) {
        $ERROR('#1: .1e-1 === 0.01');
    }
    if (0.02 !== 0.02) {
        $ERROR('#2: .2e-1 === 0.02');
    }
    if (0.03 !== 0.03) {
        $ERROR('#3: .3e-1 === 0.03');
    }
    if (0.04 !== 0.04) {
        $ERROR('#4: .4e-1 === 0.04');
    }
    if (0.05 !== 0.05) {
        $ERROR('#5: .5e-1 === 0.05');
    }
    if (0.06 !== 0.06) {
        $ERROR('#6: .6e-1 === 0.06');
    }
    if (0.07 !== 0.07) {
        $ERROR('#7: .7e-1 === 0.07');
    }
    if (0.08 !== 0.08) {
        $ERROR('#8: .8e-1 === 0.08');
    }
    if (0.09 !== 0.09) {
        $ERROR('#9: .9e-1 === 0.09');
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