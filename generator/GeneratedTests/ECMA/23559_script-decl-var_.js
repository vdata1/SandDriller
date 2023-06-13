try {
    $262.evalScript('var brandNew;');
    assert.sameValue(this.brandNew, undefined, 'new binding on an extensible global object');
    verifyEnumerable(this, 'brandNew');
    verifyWritable(this, 'brandNew');
    verifyNotConfigurable(this, 'brandNew');
    Object.defineProperty(this, 'configurable', {
        configurable: true,
        writable: false,
        enumerable: false,
        value: 0
    });
    Object.defineProperty(this, 'nonConfigurable', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: 0
    });
    Object.preventExtensions(this);
    $262.evalScript('var configurable;');
    assert.sameValue(configurable, 0, 'like-named configurable property');
    verifyNotEnumerable(this, 'configurable');
    verifyNotWritable(this, 'configurable');
    verifyConfigurable(this, 'configurable');
    $262.evalScript('var nonConfigurable;');
    assert.sameValue(nonConfigurable, 0, 'like-named non-configurable property');
    verifyNotEnumerable(this, 'nonConfigurable');
    verifyNotWritable(this, 'nonConfigurable');
    verifyNotConfigurable(this, 'nonConfigurable');
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