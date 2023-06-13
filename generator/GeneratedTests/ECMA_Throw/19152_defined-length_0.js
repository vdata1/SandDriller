try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var bpe = TA.BYTES_PER_ELEMENT;
        var length = 4;
        var buffer = new ArrayBuffer(bpe * length * 4);
        var ta1 = new TA(buffer, 0, length);
        assert.sameValue(ta1.length, length);
        assert.sameValue(ta1.buffer, buffer);
        assert.sameValue(ta1.constructor, TA);
        assert.sameValue(Object.getPrototypeOf(ta1), TA.prototype);
        var ta2 = new TA(buffer, 0, 0);
        assert.sameValue(ta2.length, 0);
        assert.sameValue(ta2.buffer, buffer);
        assert.sameValue(ta2.constructor, TA);
        assert.sameValue(Object.getPrototypeOf(ta2), TA.prototype);
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