try {
    var x = [];
    x[new Boolean(true)] = 1;
    if (x[1] !== undefined) {
        $ERROR('#1: x = []; x[new Boolean(true)] = 1; x[1] === undefined. Actual: ' + x[1]);
    }
    if (x['true'] !== 1) {
        $ERROR('#2: x = []; x[true] = 1; x["true"] === 1. Actual: ' + x['true']);
    }
    x[new Boolean(false)] = 0;
    if (x[0] !== undefined) {
        $ERROR('#3: x = []; x[true] = 1; x[new Boolean(false)] = 0; x[0] === undefined. Actual: ' + x[0]);
    }
    if (x['false'] !== 0) {
        $ERROR('#4: x = []; x[false] = 1; x["false"] === 0. Actual: ' + x['false']);
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