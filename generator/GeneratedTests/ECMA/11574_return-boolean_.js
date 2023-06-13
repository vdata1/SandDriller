try {
    var o = {};
    o.p1 = 'foo';
    assert.sameValue(Reflect.defineProperty(o, 'p1', {}), true);
    assert.sameValue(o.hasOwnProperty('p1'), true);
    assert.sameValue(Reflect.defineProperty(o, 'p2', { value: 42 }), true);
    assert.sameValue(o.hasOwnProperty('p2'), true);
    Object.freeze(o);
    assert.sameValue(Reflect.defineProperty(o, 'p2', { value: 43 }), false);
    assert.sameValue(o.p2, 42);
    assert.sameValue(Reflect.defineProperty(o, 'p3', {}), false);
    assert.sameValue(o.hasOwnProperty('p4'), false);
    assert.sameValue(Reflect.defineProperty(o, 'p4', { value: 1 }), false);
    assert.sameValue(o.hasOwnProperty('p4'), false);
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