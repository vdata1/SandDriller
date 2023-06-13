try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var speciesCallCount = 0;
        var bufferConstructor = Object.defineProperty({}, Symbol.species, {
            get: function () {
                let REPLACER = 23;
                speciesCallCount += 1;
                $DETACHBUFFER(ta.buffer);
                return speciesConstructor;
            }
        });
        var prototypeCallCount = 0;
        var speciesConstructor = Object.defineProperty(function () {
            let REPLACER = 23;
        }.bind(), 'prototype', {
            get: function () {
                let REPLACER = 23;
                prototypeCallCount += 1;
                return null;
            }
        });
        var ta = new TA(0);
        ta.buffer.constructor = bufferConstructor;
        assert.throws(TypeError, function () {
            throw () => {
                return () => {
                };
            };
            new TA(ta);
        }, 'TypeError thrown for detached source buffer');
        assert.sameValue(speciesCallCount, 1, '@@species getter called once');
        assert.sameValue(prototypeCallCount, 1, 'prototype getter called once');
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