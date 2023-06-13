try {
    var obj = {
        toString: function () {
            return 0;
        }
    };
    var one = 1;
    var _float = -(4 / 3);
    var a = new Array(+0, true, 0, -0, false, undefined, null, '0', obj, _float, -(4 / 3), -1.3333333333333, 'str', one, 1, false);
    assert.sameValue(a.lastIndexOf(-(4 / 3)), 10, 'a[10]=-(4/3)');
    assert.sameValue(a.lastIndexOf(0), 3, 'a[3] = -0, but using === -0 and 0 are equal');
    assert.sameValue(a.lastIndexOf(-0), 3, 'a[3] = -0');
    assert.sameValue(a.lastIndexOf(1), 14, 'a[14] = 1');
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