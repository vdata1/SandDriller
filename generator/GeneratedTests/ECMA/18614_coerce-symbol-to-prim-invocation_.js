try {
    var left = {};
    var right = {};
    var log = '';
    var leftThisVal, rightThisVal, leftArgs, rightArgs;
    left[Symbol.toPrimitive] = function () {
        log += 'left';
        leftThisVal = this;
        leftArgs = arguments;
    };
    right[Symbol.toPrimitive] = function () {
        log += 'right';
        rightThisVal = this;
        rightArgs = arguments;
    };
    left + right;
    assert.sameValue(log, 'leftright', 'methods invoked in correct sequence');
    assert.sameValue(leftThisVal, left, 'left-hand side `this` value');
    assert.sameValue(leftArgs.length, 1, 'left-hand side argument length');
    assert.sameValue(leftArgs[0], 'default', 'left-hand side argument value');
    assert.sameValue(rightThisVal, right, 'right-hand side `this` value');
    assert.sameValue(rightArgs.length, 1, 'right-hand side argument length');
    assert.sameValue(rightArgs[0], 'default', 'right-hand side argument value');
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