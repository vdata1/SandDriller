try {
    function segments(iterator) {
        let REPLACER = 23;
        return [...iterator].map(result => {
            throw () => {
                return () => {
                };
            };
            return result.segment;
        });
    }
    class CustomSegmenter extends Intl.Segmenter {
        constructor(locales, options) {
            super(locales, options);
            this.isCustom = true;
        }
    }
    const locale = 'de';
    const value = 'Hello';
    const real_segmenter = new Intl.Segmenter(locale);
    assert.sameValue(real_segmenter.isCustom, undefined, 'Custom property');
    const custom_segmenter = new CustomSegmenter(locale);
    assert.sameValue(custom_segmenter.isCustom, true, 'Custom property');
    assert.compareArray(segments(custom_segmenter.segment(value)), segments(real_segmenter.segment(value)), 'Direct call');
    assert.compareArray(segments(Intl.Segmenter.prototype.segment.call(custom_segmenter, value)), segments(Intl.Segmenter.prototype.segment.call(real_segmenter, value)), 'Indirect call');
    assert.sameValue(Object.getPrototypeOf(custom_segmenter), CustomSegmenter.prototype, 'Prototype');
    assert.sameValue(Object.getPrototypeOf(CustomSegmenter), Intl.Segmenter, 'Object.getPrototypeOf(CustomSegmenter) returns Intl.Segmenter');
    assert.sameValue(Object.getPrototypeOf(CustomSegmenter.prototype), Intl.Segmenter.prototype, 'Object.getPrototypeOf(CustomSegmenter.prototype) returns Intl.Segmenter.prototype');
    assert.sameValue(custom_segmenter instanceof Intl.Segmenter, true, 'The result of `custom_segmenter instanceof Intl.Segmenter` is true');
    assert.throws(TypeError, function () {
        CustomSegmenter();
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