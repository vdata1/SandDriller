try {
    var obj = {};
    obj.push = Array.prototype.push;
    obj.length = 4294967295;
    var push = obj.push('x', 'y', 'z');
    if (push !== 4294967298) {
        $ERROR('#1: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z") === 4294967298. Actual: ' + push);
    }
    if (obj.length !== 4294967298) {
        $ERROR('#2: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj.length === 4294967298. Actual: ' + obj.length);
    }
    if (obj[4294967295] !== 'x') {
        $ERROR('#3: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967295] === "x". Actual: ' + obj[4294967295]);
    }
    if (obj[4294967296] !== 'y') {
        $ERROR('#4: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967296] === "y". Actual: ' + obj[4294967296]);
    }
    if (obj[4294967297] !== 'z') {
        $ERROR('#5: var obj = {}; obj.push = Array.prototype.push; obj.length = 4294967295; obj.push("x", "y", "z"); obj[4294967297] === "z". Actual: ' + obj[4294967297]);
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