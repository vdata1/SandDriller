try {
    if (typeof new Number() !== 'object') {
        $ERROR('#1: typeof new Number() === \'object\'');
    }
    if (new Number() === undefined) {
        $ERROR('#2: new Number() should not be undefined');
    }
    var x3 = new Number();
    if (typeof x3 !== 'object') {
        $ERROR('#3: typeof new Number() === \'object\'');
    }
    var x4 = new Number();
    if (x4 === undefined) {
        $ERROR('#4: new Number() should not be undefined');
    }
    if (typeof new Number(10) !== 'object') {
        $ERROR('#5: typeof new Number(10) === \'object\'');
    }
    if (new Number(10) === undefined) {
        $ERROR('#6: new Number(10) should not be undefined');
    }
    var x7 = new Number(10);
    if (typeof x7 !== 'object') {
        $ERROR('#7: typeof new Number(10) === \'object\'');
    }
    var x8 = new Number(10);
    if (x8 === undefined) {
        $ERROR('#8: new Number(10) should not be undefined');
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