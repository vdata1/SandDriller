try {
    testWithTypedArrayConstructors(function (TA) {
        let sample = new TA([42]);
        $DETACHBUFFER(sample.buffer);
        sample[0] = 1;
        assert.sameValue(sample[0], undefined, '`sample[0] = 1` is undefined');
        sample['1.1'] = 1;
        assert.sameValue(sample['1.1'], undefined, '`sample[\'1.1\'] = 1` is undefined');
        sample['-0'] = 1;
        assert.sameValue(sample['-0'], undefined, '`sample[\'-0\'] = 1` is undefined');
        sample['-1'] = 1;
        assert.sameValue(sample['-1'], undefined, '`sample[\'-1\'] = 1` is undefined');
        sample['1'] = 1;
        assert.sameValue(sample['1'], undefined, '`sample[\'1\'] = 1` is undefined');
        sample['2'] = 1;
        assert.sameValue(sample['2'], undefined, '`sample[\'2\'] = 1` is undefined');
        let obj = {
            valueOf() {
                throw new Test262Error();
            }
        };
        assert.throws(Test262Error, function () {
            sample['0'] = obj;
        }, '`sample[\'0\'] = obj` throws Test262Error');
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