try {
    var stringTarget = new Proxy(new String('str'), {});
    var stringProxy = new Proxy(stringTarget, { get: null });
    assert.sameValue(stringProxy.length, 3);
    assert.sameValue(stringProxy[0], 's');
    assert.sameValue(stringProxy[4], undefined);
    var sym = Symbol();
    var target = new Proxy({}, {
        get: function (_target, key) {
            switch (key) {
            case sym:
                return 1;
            case '10':
                return 2;
            case 'foo':
                return 3;
            }
        }
    });
    var proxy = new Proxy(target, { get: null });
    assert.sameValue(proxy[sym], 1);
    assert.sameValue(proxy[10], 2);
    assert.sameValue(Object.create(proxy).foo, 3);
    assert.sameValue(proxy.bar, undefined);
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