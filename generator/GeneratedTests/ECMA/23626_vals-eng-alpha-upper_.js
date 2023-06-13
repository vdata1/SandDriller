try {
    var A = 1;
    assert.sameValue(A, 1);
    var B = 1;
    assert.sameValue(B, 1);
    var C = 1;
    assert.sameValue(C, 1);
    var D = 1;
    assert.sameValue(D, 1);
    var E = 1;
    assert.sameValue(E, 1);
    var F = 1;
    assert.sameValue(F, 1);
    var G = 1;
    assert.sameValue(G, 1);
    var H = 1;
    assert.sameValue(H, 1);
    var I = 1;
    assert.sameValue(I, 1);
    var J = 1;
    assert.sameValue(J, 1);
    var K = 1;
    assert.sameValue(K, 1);
    var L = 1;
    assert.sameValue(L, 1);
    var M = 1;
    assert.sameValue(M, 1);
    var N = 1;
    assert.sameValue(N, 1);
    var O = 1;
    assert.sameValue(O, 1);
    var P = 1;
    assert.sameValue(P, 1);
    var Q = 1;
    assert.sameValue(Q, 1);
    var R = 1;
    assert.sameValue(R, 1);
    var S = 1;
    assert.sameValue(S, 1);
    var T = 1;
    assert.sameValue(T, 1);
    var U = 1;
    assert.sameValue(U, 1);
    var V = 1;
    assert.sameValue(V, 1);
    var W = 1;
    assert.sameValue(W, 1);
    var X = 1;
    assert.sameValue(X, 1);
    var Y = 1;
    assert.sameValue(Y, 1);
    var Z = 1;
    assert.sameValue(Z, 1);
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