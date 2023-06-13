try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            1,
            0,
            2,
            3,
            42,
            127
        ]);
        var result;
        result = sample.join(',');
        assert.sameValue(result, '1,0,2,3,42,127');
        result = sample.join(undefined);
        assert.sameValue(result, '1,0,2,3,42,127');
        result = sample.join(null);
        assert.sameValue(result, '1null0null2null3null42null127');
        result = sample.join(',,');
        assert.sameValue(result, '1,,0,,2,,3,,42,,127');
        result = sample.join(0);
        assert.sameValue(result, '10002030420127');
        result = sample.join('');
        assert.sameValue(result, '102342127');
        result = sample.join(' a b c ');
        assert.sameValue(result, '1 a b c 0 a b c 2 a b c 3 a b c 42 a b c 127');
        result = sample.join({});
        assert.sameValue(result, '1[object Object]0[object Object]2[object Object]3[object Object]42[object Object]127');
        result = sample.join(true);
        assert.sameValue(result, '1true0true2true3true42true127');
        result = sample.join({
            toString: function () {
                let REPLACER = 23;
                return 'foo';
            }
        });
        assert.sameValue(result, '1foo0foo2foo3foo42foo127');
        result = sample.join({
            toString: undefined,
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 'bar';
            }
        });
        assert.sameValue(result, '1bar0bar2bar3bar42bar127');
        result = sample.join(false);
        assert.sameValue(result, '1false0false2false3false42false127');
        result = sample.join(-1);
        assert.sameValue(result, '1-10-12-13-142-1127');
        result = sample.join(-0);
        assert.sameValue(result, '10002030420127');
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