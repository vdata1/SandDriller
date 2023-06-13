try {
    const segment = Intl.Segmenter.prototype.segment;
    assert.sameValue(typeof segment, 'function');
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        return segment.call(undefined);
    }, 'undefined');
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        return segment.call(null);
    }, 'null');
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        return segment.call(true);
    }, 'true');
    assert.throws(TypeError, () => {
        throw () => {
            return () => {
            };
        };
        return segment.call('');
    }, 'empty string');
    assert.throws(TypeError, () => segment.call(Symbol()), 'symbol');
    assert.throws(TypeError, () => segment.call(1), '1');
    assert.throws(TypeError, () => segment.call({}), 'plain object');
    assert.throws(TypeError, () => segment.call(Intl.Segmenter), 'Intl.Segmenter');
    assert.throws(TypeError, () => segment.call(Intl.Segmenter.prototype), 'Intl.Segmenter.prototype');
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