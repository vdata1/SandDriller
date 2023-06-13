try {
    var a = 1;
    assert.sameValue(a, 1);
    var b = 1;
    assert.sameValue(b, 1);
    var c = 1;
    assert.sameValue(c, 1);
    var d = 1;
    assert.sameValue(d, 1);
    var e = 1;
    assert.sameValue(e, 1);
    var f = 1;
    assert.sameValue(f, 1);
    var g = 1;
    assert.sameValue(g, 1);
    var h = 1;
    assert.sameValue(h, 1);
    var i = 1;
    assert.sameValue(i, 1);
    var j = 1;
    assert.sameValue(j, 1);
    var k = 1;
    assert.sameValue(k, 1);
    var l = 1;
    assert.sameValue(l, 1);
    var m = 1;
    assert.sameValue(m, 1);
    var n = 1;
    assert.sameValue(n, 1);
    var o = 1;
    assert.sameValue(o, 1);
    var p = 1;
    assert.sameValue(p, 1);
    var q = 1;
    assert.sameValue(q, 1);
    var r = 1;
    assert.sameValue(r, 1);
    var s = 1;
    assert.sameValue(s, 1);
    var t = 1;
    assert.sameValue(t, 1);
    var u = 1;
    assert.sameValue(u, 1);
    var v = 1;
    assert.sameValue(v, 1);
    var w = 1;
    assert.sameValue(w, 1);
    var x = 1;
    assert.sameValue(x, 1);
    var y = 1;
    assert.sameValue(y, 1);
    var z = 1;
    assert.sameValue(z, 1);
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