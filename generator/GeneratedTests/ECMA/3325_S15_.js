try {
    var obj = {};
    obj.length = 10;
    obj.reverse = Array.prototype.reverse;
    obj[0] = true;
    obj[2] = Infinity;
    obj[4] = undefined;
    obj[5] = undefined;
    obj[8] = 'NaN';
    obj[9] = '-1';
    var reverse = obj.reverse();
    if (reverse !== obj) {
        $ERROR('#1: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse() === obj. Actual: ' + reverse);
    }
    if (obj[0] !== '-1') {
        $ERROR('#2: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[0] === "-1". Actual: ' + obj[0]);
    }
    if (obj[1] !== 'NaN') {
        $ERROR('#3: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[1] === "NaN". Actual: ' + obj[1]);
    }
    if (obj[2] !== undefined) {
        $ERROR('#4: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[2] === undefined. Actual: ' + obj[2]);
    }
    if (obj[3] !== undefined) {
        $ERROR('#5: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[3] === undefined. Actual: ' + obj[3]);
    }
    if (obj[4] !== undefined) {
        $ERROR('#6: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[4] === undefined. Actual: ' + obj[4]);
    }
    if (obj[5] !== undefined) {
        $ERROR('#7: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[5] === undefined. Actual: ' + obj[5]);
    }
    if (obj[6] !== undefined) {
        $ERROR('#8: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[6] === undefined. Actual: ' + obj[6]);
    }
    if (obj[7] !== Infinity) {
        $ERROR('#9: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[7] === Infinity. Actual: ' + obj[7]);
    }
    if (obj[8] !== undefined) {
        $ERROR('#10: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[8] === undefined. Actual: ' + obj[8]);
    }
    if (obj[9] !== true) {
        $ERROR('#11: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj[9] === true. Actual: ' + obj[9]);
    }
    obj.length = 9;
    var reverse = obj.reverse();
    if (reverse !== obj) {
        $ERROR('#1: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse() === obj. Actual: ' + reverse);
    }
    if (obj[0] !== undefined) {
        $ERROR('#12: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[0] === undefined. Actual: ' + obj[0]);
    }
    if (obj[1] !== Infinity) {
        $ERROR('#13: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[1] === Infinity. Actual: ' + obj[1]);
    }
    if (obj[2] !== undefined) {
        $ERROR('#14: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[2] === undefined. Actual: ' + obj[2]);
    }
    if (obj[3] !== undefined) {
        $ERROR('#15: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[3] === undefined. Actual: ' + obj[3]);
    }
    if (obj[4] !== undefined) {
        $ERROR('#16: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[4] === undefined. Actual: ' + obj[4]);
    }
    if (obj[5] !== undefined) {
        $ERROR('#17: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[5] === undefined. Actual: ' + obj[5]);
    }
    if (obj[6] !== undefined) {
        $ERROR('#18: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[6] === undefined. Actual: ' + obj[6]);
    }
    if (obj[7] !== 'NaN') {
        $ERROR('#19: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[7] === "NaN". Actual: ' + obj[7]);
    }
    if (obj[8] !== '-1') {
        $ERROR('#20: var obj = {}; obj.reverse = Array.prototype.reverse; obj.length = 10; obj[0] = true; obj[2] = Infinity; obj[4] = undefined; obj[5] = undefined; obj[8] = "NaN"; obj[9] = "-1"; obj.reverse(); obj.length = 9; obj.reverse(); obj[8] === "-1". Actual: ' + obj[8]);
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