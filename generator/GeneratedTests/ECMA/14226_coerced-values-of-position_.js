try {
    var str = 'The future is cool!';
    assert(str.startsWith('The future', NaN), 'NaN coerced to 0');
    assert(str.startsWith('The future', null), 'null coerced to 0');
    assert(str.startsWith('The future', false), 'false coerced to 0');
    assert(str.startsWith('The future', ''), '"" coerced to 0');
    assert(str.startsWith('The future', '0'), '"0" coerced to 0');
    assert(str.startsWith('The future', undefined), 'undefined coerced to 0');
    assert(str.startsWith('The future', 0.4), '0.4 coerced to 0');
    assert.sameValue(str.startsWith('The future', true), false, 'true coerced to 1');
    assert.sameValue(str.startsWith('The future', '1'), false, '"1" coerced to 1');
    assert.sameValue(str.startsWith('The future', 1.4), false, '1.4 coerced to 1');
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