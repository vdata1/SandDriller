try {
    var a = new Array(0, 1);
    a[4294967294] = 2;
    a[4294967295] = 3;
    a[4294967296] = 4;
    a[4294967297] = 5;
    assert.sameValue(a.indexOf(2, 4294967290), 4294967294, 'a.indexOf(2,4294967290 )');
    assert.sameValue(a.indexOf(3, 4294967290), -1, 'a.indexOf(3,4294967290)');
    assert.sameValue(a.indexOf(4, 4294967290), -1, 'a.indexOf(4,4294967290)');
    assert.sameValue(a.indexOf(5, 4294967290), -1, 'a.indexOf(5,4294967290)');
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