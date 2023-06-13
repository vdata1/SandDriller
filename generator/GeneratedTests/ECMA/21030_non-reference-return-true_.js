try {
    var a = { b: 42 };
    assert.sameValue(delete void a.b, true, 'delete void a.b');
    assert.sameValue(delete void 0, true, 'delete void 0');
    assert.sameValue(delete typeof 0, true, 'delete typeof 0');
    assert.sameValue(delete delete 0, true, 'delete delete 0');
    assert.sameValue(delete void typeof +-~!0, true, 'delete void typeof +-~!0');
    assert.sameValue(delete { x: 1 }, true, 'delete {x:1}');
    assert.sameValue(delete null, true, 'delete null');
    assert.sameValue(delete true, true, 'delete true');
    assert.sameValue(delete false, true, 'delete false');
    assert.sameValue(delete 0, true, 'delete 0');
    assert.sameValue(delete 1, true, 'delete 1');
    assert.sameValue(delete '', true, 'delete ""');
    assert.sameValue(delete 'Test262', true, 'delete "Test262"');
    assert.sameValue(delete 'Test262'[100], true, 'delete "Test262"[100]');
    assert.sameValue(delete typeof +-~!0, true, 'delete typeof +-~!0');
    assert.sameValue(delete +-~!0, true, 'delete +-~!0');
    assert.sameValue(delete -~!0, true, 'delete -~!0');
    assert.sameValue(delete ~!0, true, 'delete ~!0');
    assert.sameValue(delete !0, true, 'delete !0');
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