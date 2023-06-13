try {
    const rtf = new Intl.RelativeTimeFormat('en-US');
    assert.sameValue(typeof rtf.formatToParts, 'function', 'formatToParts should be supported');
    const parts = rtf.formatToParts(3, 'second');
    assert.sameValue(Object.getPrototypeOf(parts), Array.prototype, 'parts: prototype');
    assert.sameValue(Array.isArray(parts), true, 'parts: isArray');
    assert.sameValue(parts.length, 3, 'parts: length');
    assert.sameValue(Object.getPrototypeOf(parts[0]), Object.prototype, 'parts[0]: prototype');
    verifyProperty(parts[0], 'type', {
        value: 'literal',
        writable: true,
        enumerable: true,
        configurable: true
    });
    verifyProperty(parts[0], 'value', {
        value: 'in ',
        writable: true,
        enumerable: true,
        configurable: true
    });
    assert.sameValue(Object.getPrototypeOf(parts[1]), Object.prototype, 'parts[1]: prototype');
    verifyProperty(parts[1], 'type', {
        value: 'integer',
        writable: true,
        enumerable: true,
        configurable: true
    });
    verifyProperty(parts[1], 'value', {
        value: '3',
        writable: true,
        enumerable: true,
        configurable: true
    });
    verifyProperty(parts[1], 'unit', {
        value: 'second',
        writable: true,
        enumerable: true,
        configurable: true
    });
    assert.sameValue(Object.getPrototypeOf(parts[2]), Object.prototype, 'parts[2]: prototype');
    verifyProperty(parts[2], 'type', {
        value: 'literal',
        writable: true,
        enumerable: true,
        configurable: true
    });
    verifyProperty(parts[2], 'value', {
        value: ' seconds',
        writable: true,
        enumerable: true,
        configurable: true
    });
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