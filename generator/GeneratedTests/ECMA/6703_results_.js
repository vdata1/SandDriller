try {
    assert.sameValue(Math.imul(2, 4), 8, '(2, 4)');
    assert.sameValue(Math.imul(-1, 8), -8, '(-1, 8)');
    assert.sameValue(Math.imul(-2, -2), 4, '(-2, -2)');
    assert.sameValue(Math.imul(4294967295, 5), -5, '(0xffffffff, 5)');
    assert.sameValue(Math.imul(4294967294, 5), -10, '(0xfffffffe, 5)');
    assert.sameValue(Math.imul(-0, 7), 0);
    assert.sameValue(Math.imul(7, -0), 0);
    assert.sameValue(Math.imul(0.1, 7), 0);
    assert.sameValue(Math.imul(7, 0.1), 0);
    assert.sameValue(Math.imul(0.9, 7), 0);
    assert.sameValue(Math.imul(7, 0.9), 0);
    assert.sameValue(Math.imul(1.1, 7), 7);
    assert.sameValue(Math.imul(7, 1.1), 7);
    assert.sameValue(Math.imul(1.9, 7), 7);
    assert.sameValue(Math.imul(7, 1.9), 7);
    assert.sameValue(Math.imul(1073741824, 7), -1073741824);
    assert.sameValue(Math.imul(7, 1073741824), -1073741824);
    assert.sameValue(Math.imul(1073741824, 1073741824), 0);
    assert.sameValue(Math.imul(-1073741824, 7), 1073741824);
    assert.sameValue(Math.imul(7, -1073741824), 1073741824);
    assert.sameValue(Math.imul(-1073741824, -1073741824), 0);
    assert.sameValue(Math.imul(2147483648, 7), -2147483648);
    assert.sameValue(Math.imul(7, 2147483648), -2147483648);
    assert.sameValue(Math.imul(2147483648, 2147483648), 0);
    assert.sameValue(Math.imul(-2147483648, 7), -2147483648);
    assert.sameValue(Math.imul(7, -2147483648), -2147483648);
    assert.sameValue(Math.imul(-2147483648, -2147483648), 0);
    assert.sameValue(Math.imul(2147483647, 7), 2147483641);
    assert.sameValue(Math.imul(7, 2147483647), 2147483641);
    assert.sameValue(Math.imul(2147483647, 2147483647), 1);
    assert.sameValue(Math.imul(65536, 65536), 0);
    assert.sameValue(Math.imul(65535, 65536), -65536);
    assert.sameValue(Math.imul(65536, 65535), -65536);
    assert.sameValue(Math.imul(65535, 65535), -131071);
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