try {
    var obj = {};
    obj.unshift = Array.prototype.unshift;
    if (obj.length !== undefined) {
        $ERROR('#0: var obj = {}; obj.length === undefined. Actual: ' + obj.length);
    } else {
        var unshift = obj.unshift(-1);
        if (unshift !== 1) {
            $ERROR('#1: var obj = {}; obj.unshift = Array.prototype.unshift; obj.unshift(-1) === 1. Actual: ' + unshift);
        }
        if (obj.length !== 1) {
            $ERROR('#2: var obj = {}; obj.unshift = Array.prototype.unshift; obj.unshift(-1); obj.length === 1. Actual: ' + obj.length);
        }
        if (obj['0'] !== -1) {
            $ERROR('#3: var obj = {}; obj.unshift = Array.prototype.unshift; obj.unshift(-1); obj["0"] === -1. Actual: ' + obj['0']);
        }
    }
    obj.length = undefined;
    var unshift = obj.unshift(-4);
    if (unshift !== 1) {
        $ERROR('#4: var obj = {}; obj.length = undefined; obj.unshift = Array.prototype.unshift; obj.unshift(-4) === 1. Actual: ' + unshift);
    }
    if (obj.length !== 1) {
        $ERROR('#5: var obj = {}; obj.length = undefined; obj.unshift = Array.prototype.unshift; obj.unshift(-4); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -4) {
        $ERROR('#6: var obj = {}; obj.length = undefined; obj.unshift = Array.prototype.unshift; obj.unshift(-4); obj["0"] === -4. Actual: ' + obj['0']);
    }
    obj.length = null;
    var unshift = obj.unshift(-7);
    if (unshift !== 1) {
        $ERROR('#7: var obj = {}; obj.length = null; obj.unshift = Array.prototype.unshift; obj.unshift(-7) === 1. Actual: ' + unshift);
    }
    if (obj.length !== 1) {
        $ERROR('#8: var obj = {}; obj.length = null; obj.unshift = Array.prototype.unshift; obj.unshift(-7); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -7) {
        $ERROR('#9: var obj = {}; obj.length = null; obj.unshift = Array.prototype.unshift; obj.unshift(-7); obj["0"] === -7. Actual: ' + obj['0']);
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