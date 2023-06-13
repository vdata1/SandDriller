try {
    var obj = {};
    obj.push = Array.prototype.push;
    obj.length = -1;
    var push = obj.push('x', 'y', 'z');
    if (push !== 3) {
        $ERROR('#1: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z") === 3. Actual: ' + push);
    }
    if (obj.length !== 3) {
        $ERROR('#2: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj.length === 3. Actual: ' + obj.length);
    }
    if (obj[4294967295] !== undefined) {
        $ERROR('#3: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[4294967295] === undefined. Actual: ' + obj[4294967295]);
    }
    if (obj[4294967296] !== undefined) {
        $ERROR('#4: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[4294967296] === undefined. Actual: ' + obj[4294967296]);
    }
    if (obj[4294967297] !== undefined) {
        $ERROR('#5: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[4294967297] === undefined. Actual: ' + obj[4294967297]);
    }
    if (obj[0] !== 'x') {
        $ERROR('#3: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[0] === "x". Actual: ' + obj[0]);
    }
    if (obj[1] !== 'y') {
        $ERROR('#4: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[1] === "y". Actual: ' + obj[1]);
    }
    if (obj[2] !== 'z') {
        $ERROR('#5: var obj = {}; obj.push = Array.prototype.push; obj.length = -1; obj.push("x", "y", "z"); obj[2] === "z". Actual: ' + obj[2]);
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