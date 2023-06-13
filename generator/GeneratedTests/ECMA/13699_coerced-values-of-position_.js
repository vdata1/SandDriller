try {
    var str = 'The future is cool!';
    assert(str.endsWith('', NaN), 'NaN coerced to 0');
    assert(str.endsWith('', null), 'null coerced to 0');
    assert(str.endsWith('', false), 'false coerced to 0');
    assert(str.endsWith('', ''), '"" coerced to 0');
    assert(str.endsWith('', '0'), '"0" coerced to 0');
    assert(str.endsWith('', undefined), 'undefined coerced to 0');
    assert(str.endsWith('The future', 10.4), '10.4 coerced to 10');
    assert(str.endsWith('T', true), 'true coerced to 1');
    assert(str.endsWith('The future', '10'), '"10" coerced to 10');
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