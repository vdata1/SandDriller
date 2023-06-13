try {
    assert.sameValue(typeof this, 'object', 'typeof this === "object"');
    assert.sameValue(typeof new Object(), 'object', 'typeof new Object() === "object"');
    assert.sameValue(typeof new Array(), 'object', 'typeof new Array() === "object"');
    assert.sameValue(typeof new String(), 'object', 'typeof new String() === "object"');
    assert.sameValue(typeof new Boolean(), 'object', 'typeof new Boolean() === "object"');
    assert.sameValue(typeof new Number(), 'object', 'typeof new Number() === "object"');
    assert.sameValue(typeof new Date(), 'object', 'typeof new Date() === "object"');
    assert.sameValue(typeof new Error(), 'object', ' typeof new Error() === "object"');
    assert.sameValue(typeof new RegExp(), 'object', ' typeof new RegExp() === "object"');
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