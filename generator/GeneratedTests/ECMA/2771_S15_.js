try {
    var obj = {};
    obj.pop = Array.prototype.pop;
    obj.length = NaN;
    var pop = obj.pop();
    if (pop !== undefined) {
        $ERROR('#1: var obj = {}; obj.length = NaN; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + pop);
    }
    if (obj.length !== 0) {
        $ERROR('#2: var obj = {}; obj.length = NaN; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + obj.length);
    }
    obj.length = Number.POSITIVE_INFINITY;
    var pop = obj.pop();
    if (pop !== undefined) {
        $ERROR('#3: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + pop);
    }
    if (obj.length !== 9007199254740990) {
        $ERROR('#4: var obj = {}; obj.length = Number.POSITIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 9007199254740990. Actual: ' + obj.length);
    }
    obj.length = Number.NEGATIVE_INFINITY;
    var pop = obj.pop();
    if (pop !== undefined) {
        $ERROR('#5: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + pop);
    }
    if (obj.length !== 0) {
        $ERROR('#6: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + obj.length);
    }
    obj.length = -0;
    var pop = obj.pop();
    if (pop !== undefined) {
        $ERROR('#7: var obj = {}; obj.length = -0; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + pop);
    }
    if (obj.length !== 0) {
        $ERROR('#8: var obj = {}; obj.length = -0; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + obj.length);
    } else {
        if (1 / obj.length !== Number.POSITIVE_INFINITY) {
            $ERROR('#8: var obj = {}; obj.length = -0; obj.pop = Array.prototype.pop; obj.pop(); obj.length === +0. Actual: ' + obj.length);
        }
    }
    obj.length = 0.5;
    var pop = obj.pop();
    if (pop !== undefined) {
        $ERROR('#9: var obj = {}; obj.length = 0.5; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + pop);
    }
    if (obj.length !== 0) {
        $ERROR('#10: var obj = {}; obj.length = 0.5; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + obj.length);
    }
    obj.length = new Number(0);
    var pop = obj.pop();
    if (pop !== undefined) {
        $ERROR('#11: var obj = {}; obj.length = new Number(0); obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + pop);
    }
    if (obj.length !== 0) {
        $ERROR('#12: var obj = {}; obj.length = new Number(0); obj.pop = Array.prototype.pop; obj.pop(); obj.length === 0. Actual: ' + obj.length);
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