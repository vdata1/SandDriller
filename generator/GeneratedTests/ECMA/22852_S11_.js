try {
    if (1 .toString() !== '1') {
        $ERROR('#1: 1..toString() === "1". Actual: ' + 1 .toString());
    }
    if (1.1.toFixed(5) !== '1.10000') {
        $ERROR('#2: 1.1.toFixed(5) === "1.10000". Actual: ' + 1.1.toFixed(5));
    }
    if (1['toString']() !== '1') {
        $ERROR('#3: 1["toString"]() === "1". Actual: ' + 1['toString']());
    }
    if (1['toFixed'](5) !== '1.00000') {
        $ERROR('#4: 1.["toFixed"](5) === "1.00000". Actual: ' + 1['toFixed'](5));
    }
    if (new Number(1).toString() !== '1') {
        $ERROR('#5: new Number(1).toString() === "1". Actual: ' + new Number(1).toString());
    }
    if (new Number(1)['toFixed'](5) !== '1.00000') {
        $ERROR('#6: new Number(1)["toFixed"](5) === "1.00000". Actual: ' + new Number(1)['toFixed'](5));
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