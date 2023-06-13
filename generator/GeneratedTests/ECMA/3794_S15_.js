try {
    var x = new Array();
    var unshift = x.unshift(1);
    if (unshift !== 1) {
        $ERROR('#1: x = new Array(); x.unshift(1) === 1. Actual: ' + unshift);
    }
    if (x[0] !== 1) {
        $ERROR('#2: x = new Array(); x.unshift(1); x[0] === 1. Actual: ' + x[0]);
    }
    var unshift = x.unshift();
    if (unshift !== 1) {
        $ERROR('#3: x = new Array(); x.unshift(1); x.unshift() === 1. Actual: ' + unshift);
    }
    if (x[1] !== undefined) {
        $ERROR('#4: x = new Array(); x.unshift(1); x.unshift(); x[1] === unedfined. Actual: ' + x[1]);
    }
    var unshift = x.unshift(-1);
    if (unshift !== 2) {
        $ERROR('#5: x = new Array(); x.unshift(1); x.unshift(); x.unshift(-1) === 2. Actual: ' + unshift);
    }
    if (x[0] !== -1) {
        $ERROR('#6: x = new Array(); x.unshift(1); x.unshift(-1); x[0] === -1. Actual: ' + x[0]);
    }
    if (x[1] !== 1) {
        $ERROR('#7: x = new Array(); x.unshift(1); x.unshift(-1); x[1] === 1. Actual: ' + x[1]);
    }
    if (x.length !== 2) {
        $ERROR('#8: x = new Array(); x.unshift(1); x.unshift(); x.unshift(-1); x.length === 2. Actual: ' + x.length);
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