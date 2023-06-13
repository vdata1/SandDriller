try {
    var obj = {};
    obj.unshift = Array.prototype.unshift;
    obj.length = NaN;
    var unshift = obj.unshift(-1);
    if (unshift !== 1) {
        $ERROR('#1: var obj = {}; obj.length = NaN; obj.unshift = Array.prototype.unshift; obj.unshift(-1) === 1. Actual: ' + unshift);
    }
    if (obj.length !== 1) {
        $ERROR('#2: var obj = {}; obj.length = NaN; obj.unshift = Array.prototype.unshift; obj.unshift(-1); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -1) {
        $ERROR('#3: var obj = {}; obj.length = NaN; obj.unshift = Array.prototype.unshift; obj.unshift(-1); obj["0"] === -1. Actual: ' + obj['0']);
    }
    obj.length = Number.NEGATIVE_INFINITY;
    var unshift = obj.unshift(-7);
    if (unshift !== 1) {
        $ERROR('#7: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.unshift = Array.prototype.unshift; obj.unshift(-7) === 1. Actual: ' + unshift);
    }
    if (obj.length !== 1) {
        $ERROR('#8: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.unshift = Array.prototype.unshift; obj.unshift(-7); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -7) {
        $ERROR('#9: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.unshift = Array.prototype.unshift; obj.unshift(-7); obj["0"] === -7. Actual: ' + obj['0']);
    }
    obj.length = 0.5;
    var unshift = obj.unshift(-10);
    if (unshift !== 1) {
        $ERROR('#10: var obj = {}; obj.length = 0.5; obj.unshift = Array.prototype.unshift; obj.unshift(-10) === 1. Actual: ' + unshift);
    }
    if (obj.length !== 1) {
        $ERROR('#11: var obj = {}; obj.length = 0.5; obj.unshift = Array.prototype.unshift; obj.unshift(-10); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -10) {
        $ERROR('#12: var obj = {}; obj.length = 0.5; obj.unshift = Array.prototype.unshift; obj.unshift(-10); obj["0"] === -10. Actual: ' + obj['0']);
    }
    obj.length = 1.5;
    var unshift = obj.unshift(-13);
    if (unshift !== 2) {
        $ERROR('#13: var obj = {}; obj.length = 1.5; obj.unshift = Array.prototype.unshift; obj.unshift(-13) === 2. Actual: ' + unshift);
    }
    if (obj.length !== 2) {
        $ERROR('#14: var obj = {}; obj.length = 1.5; obj.unshift = Array.prototype.unshift; obj.unshift(-13); obj.length === 2. Actual: ' + obj.length);
    }
    if (obj['0'] !== -13) {
        $ERROR('#15: var obj = {}; obj.length = 1.5; obj.unshift = Array.prototype.unshift; obj.unshift(-13); obj["0"] === -13. Actual: ' + obj['0']);
    }
    obj.length = new Number(0);
    var unshift = obj.unshift(-16);
    if (unshift !== 1) {
        $ERROR('#16: var obj = {}; obj.length = new Number(0); obj.unshift = Array.prototype.unshift; obj.unshift(-16) === 1. Actual: ' + unshift);
    }
    if (obj.length !== 1) {
        $ERROR('#17: var obj = {}; obj.length = new Number(0); obj.unshift = Array.prototype.unshift; obj.unshift(-16); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -16) {
        $ERROR('#18: var obj = {}; obj.length = new Number(0); obj.unshift = Array.prototype.unshift; obj.unshift(-16); obj["0"] === -16. Actual: ' + obj['0']);
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