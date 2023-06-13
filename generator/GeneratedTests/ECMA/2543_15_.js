try {
    var a = new Array();
    a[100] = 1;
    a[99999] = '';
    a[10] = new Object();
    a[5555] = 5.5;
    a[123456] = 'str';
    a[5] = 1e+400;
    assert.sameValue(a.lastIndexOf(1), 100, 'a.lastIndexOf(1)');
    assert.sameValue(a.lastIndexOf(''), 99999, 'a.lastIndexOf("")');
    assert.sameValue(a.lastIndexOf('str'), 123456, 'a.lastIndexOf("str")');
    assert.sameValue(a.lastIndexOf(5.5), 5555, 'a.lastIndexOf(5.5)');
    assert.sameValue(a.lastIndexOf(1e+400), 5, 'a.lastIndexOf(1E+309)');
    assert.sameValue(a.lastIndexOf(true), -1, 'a.lastIndexOf(true)');
    assert.sameValue(a.lastIndexOf(5), -1, 'a.lastIndexOf(5)');
    assert.sameValue(a.lastIndexOf('str1'), -1, 'a.lastIndexOf("str1")');
    assert.sameValue(a.lastIndexOf(null), -1, 'a.lastIndexOf(null)');
    assert.sameValue(a.lastIndexOf(new Object()), -1, 'a.lastIndexOf(new Object())');
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