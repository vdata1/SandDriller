try {
    var capture = [];
    var leftValue = {
        valueOf() {
            capture.push('leftValue');
            return 3;
        }
    };
    var rightValue = {
        valueOf() {
            capture.push('rightValue');
            return 2;
        }
    };
    (capture.push('left'), leftValue) ** (capture.push('right'), rightValue);
    assert.sameValue(capture[0], 'left', 'Expected the 1st element captured to be \'left\'');
    assert.sameValue(capture[1], 'right', 'Expected the 2nd element captured to be \'right\'');
    assert.sameValue(capture[2], 'leftValue', 'Expected the 3rd element captured to be \'leftValue\'');
    assert.sameValue(capture[3], 'rightValue', 'Expected the 4th element captured to be \'rightValue\'');
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