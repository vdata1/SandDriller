try {
    var obj = {};
    obj.push = Array.prototype.push;
    if (obj.length !== undefined) {
        $ERROR('#0: var obj = {}; obj.length === undefined. Actual: ' + obj.length);
    } else {
        var push = obj.push(-1);
        if (push !== 1) {
            $ERROR('#1: var obj = {}; obj.push = Array.prototype.push; obj.push(-1) === 1. Actual: ' + push);
        }
        if (obj.length !== 1) {
            $ERROR('#2: var obj = {}; obj.push = Array.prototype.push; obj.push(-1); obj.length === 1. Actual: ' + obj.length);
        }
        if (obj['0'] !== -1) {
            $ERROR('#3: var obj = {}; obj.push = Array.prototype.push; obj.push(-1); obj["0"] === -1. Actual: ' + obj['0']);
        }
    }
    obj.length = undefined;
    var push = obj.push(-4);
    if (push !== 1) {
        $ERROR('#4: var obj = {}; obj.length = undefined; obj.push = Array.prototype.push; obj.push(-4) === 1. Actual: ' + push);
    }
    if (obj.length !== 1) {
        $ERROR('#5: var obj = {}; obj.length = undefined; obj.push = Array.prototype.push; obj.push(-4); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -4) {
        $ERROR('#6: var obj = {}; obj.length = undefined; obj.push = Array.prototype.push; obj.push(-4); obj["0"] === -4. Actual: ' + obj['0']);
    }
    obj.length = null;
    var push = obj.push(-7);
    if (push !== 1) {
        $ERROR('#7: var obj = {}; obj.length = null; obj.push = Array.prototype.push; obj.push(-7) === 1. Actual: ' + push);
    }
    if (obj.length !== 1) {
        $ERROR('#8: var obj = {}; obj.length = null; obj.push = Array.prototype.push; obj.push(-7); obj.length === 1. Actual: ' + obj.length);
    }
    if (obj['0'] !== -7) {
        $ERROR('#9: var obj = {}; obj.length = null; obj.push = Array.prototype.push; obj.push(-7); obj["0"] === -7. Actual: ' + obj['0']);
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