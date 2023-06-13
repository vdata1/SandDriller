try {
    var m1 = class {
        m(x = 42) {
        }
    }.prototype.m;
    assert.sameValue(m1.length, 0, 'formalslist: x = 42');
    verifyNotEnumerable(m1, 'length');
    verifyNotWritable(m1, 'length');
    verifyConfigurable(m1, 'length');
    var m2 = class {
        m(x = 42, y) {
        }
    }.prototype.m;
    assert.sameValue(m2.length, 0, 'formalslist: x = 42, y');
    verifyNotEnumerable(m2, 'length');
    verifyNotWritable(m2, 'length');
    verifyConfigurable(m2, 'length');
    var m3 = class {
        m(x, y = 42) {
        }
    }.prototype.m;
    assert.sameValue(m3.length, 1, 'formalslist: x, y = 42');
    verifyNotEnumerable(m3, 'length');
    verifyNotWritable(m3, 'length');
    verifyConfigurable(m3, 'length');
    var m4 = class {
        m(x, y = 42, z) {
        }
    }.prototype.m;
    assert.sameValue(m4.length, 1, 'formalslist: x, y = 42, z');
    verifyNotEnumerable(m4, 'length');
    verifyNotWritable(m4, 'length');
    verifyConfigurable(m4, 'length');
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