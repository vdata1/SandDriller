try {
    var obj = {};
    obj.push = Array.prototype.push;
    obj.length = 4294967296;
    var push = obj.push('x', 'y', 'z');
    if (push !== 4294967299) {
        $ERROR('#1: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z") === 4294967299. Actual: ' + push);
    }
    if (obj.length !== 4294967299) {
        $ERROR('#2: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj.length === 4294967299. Actual: ' + obj.length);
    }
    if (obj[0] !== undefined) {
        $ERROR('#3: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[0] === undefined. Actual: ' + obj[0]);
    }
    if (obj[1] !== undefined) {
        $ERROR('#4: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[1] === undefined. Actual: ' + obj[1]);
    }
    if (obj[2] !== undefined) {
        $ERROR('#5: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[2] === undefined. Actual: ' + obj[2]);
    }
    if (obj[4294967296] !== 'x') {
        $ERROR('#6: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[4294967296] === "x". Actual: ' + obj[4294967296]);
    }
    if (obj[4294967297] !== 'y') {
        $ERROR('#7: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[4294967297] === "y". Actual: ' + obj[4294967297]);
    }
    if (obj[4294967298] !== 'z') {
        $ERROR('#8: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push("x", "y", "z"); obj[4294967298] === "z". Actual: ' + obj[4294967298]);
    }
    var obj = {};
    obj.push = Array.prototype.push;
    obj.length = 4294967296;
    var push = obj.push();
    if (push !== 4294967296) {
        $ERROR('#9: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push() === 4294967296. Actual: ' + push);
    }
    if (obj.length !== 4294967296) {
        $ERROR('#10: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967296; obj.push(); obj.length === 4294967296. Actual: ' + obj.length);
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