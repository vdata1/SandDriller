try {
    assert.sameValue(['true'].lastIndexOf(true), -1, '["true"].lastIndexOf(true)');
    assert.sameValue(['0'].lastIndexOf(0), -1, '["0"].lastIndexOf(0)');
    assert.sameValue([false].lastIndexOf(0), -1, '[false].lastIndexOf(0)');
    assert.sameValue([undefined].lastIndexOf(0), -1, '[undefined].lastIndexOf(0)');
    assert.sameValue([null].lastIndexOf(0), -1, '[null].lastIndexOf(0)');
    assert.sameValue([[]].lastIndexOf(0), -1, '[[]].lastIndexOf(0)');
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