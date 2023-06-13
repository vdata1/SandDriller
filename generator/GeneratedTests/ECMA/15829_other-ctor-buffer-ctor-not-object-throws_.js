try {
    var sample1 = new Int8Array();
    var sample2 = new Int16Array();
    testWithTypedArrayConstructors(function (TA) {
        var sample = TA === Int8Array ? sample2 : sample1;
        sample.buffer.constructor = 1;
        assert.throws(TypeError, function () {
            new TA(sample);
        });
        sample.buffer.constructor = true;
        assert.throws(TypeError, function () {
            new TA(sample);
        });
        sample.buffer.constructor = '';
        assert.throws(TypeError, function () {
            new TA(sample);
        });
        sample.buffer.constructor = null;
        assert.throws(TypeError, function () {
            new TA(sample);
        });
        var s = Symbol('1');
        sample.buffer.constructor = s;
        assert.throws(TypeError, function () {
            new TA(sample);
        });
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