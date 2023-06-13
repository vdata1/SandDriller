try {
    var obj = {};
    obj.shift = Array.prototype.shift;
    if (obj.length !== undefined) {
        $ERROR('#0: var obj = {}; obj.length === undefined. Actual: ' + obj.length);
    } else {
        var shift = obj.shift();
        if (shift !== undefined) {
            $ERROR('#1: var obj = {}; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + shift);
        }
        if (obj.length !== 0) {
            $ERROR('#2: var obj = {}; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + obj.length);
        }
    }
    obj.length = undefined;
    var shift = obj.shift();
    if (shift !== undefined) {
        $ERROR('#3: var obj = {}; obj.length = undefined; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + shift);
    }
    if (obj.length !== 0) {
        $ERROR('#4: var obj = {}; obj.length = undefined; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + obj.length);
    }
    obj.length = null;
    var shift = obj.shift();
    if (shift !== undefined) {
        $ERROR('#5: var obj = {}; obj.length = null; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + shift);
    }
    if (obj.length !== 0) {
        $ERROR('#6: var obj = {}; obj.length = null; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + obj.length);
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