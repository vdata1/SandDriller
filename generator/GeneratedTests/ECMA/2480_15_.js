try {
    var a = new Array(0, 1);
    a[4294967294] = 2;
    a[4294967295] = 3;
    a[4294967296] = 4;
    a[4294967297] = 5;
    a[4294967200] = 3;
    a[4294967201] = 4;
    a[4294967202] = 5;
    assert.sameValue(a.lastIndexOf(2), 4294967294, 'a.lastIndexOf(2)');
    assert.sameValue(a.lastIndexOf(3), 4294967200, 'a.lastIndexOf(3)');
    assert.sameValue(a.lastIndexOf(4), 4294967201, 'a.lastIndexOf(4)');
    assert.sameValue(a.lastIndexOf(5), 4294967202, 'a.lastIndexOf(5)');
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