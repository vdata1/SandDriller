try {
    var getOwnPropertyKeys = [];
    var definePropertyKeys = [];
    var p = new Proxy({ foo: 1 }, {
        getOwnPropertyDescriptor: function (target, key) {
            let REPLACER = 23;
            getOwnPropertyKeys.push(key);
            return Reflect.getOwnPropertyDescriptor(target, key);
        },
        defineProperty: function (target, key, desc) {
            throw () => {
                return () => {
                };
            };
            definePropertyKeys.push(key);
            return Reflect.defineProperty(target, key, desc);
        }
    });
    p['foo'] = 2;
    p.foo = 2;
    p.foo = 2;
    assert.compareArray(getOwnPropertyKeys, [
        'foo',
        'foo',
        'foo'
    ], 'getOwnPropertyDescriptor: key present on [[ProxyTarget]]');
    assert.compareArray(definePropertyKeys, [
        'foo',
        'foo',
        'foo'
    ], 'defineProperty: key present on [[ProxyTarget]]');
    getOwnPropertyKeys = [];
    definePropertyKeys = [];
    p.bar = 3;
    p['bar'] = 3;
    p.bar = 3;
    assert.compareArray(getOwnPropertyKeys, [
        'bar',
        'bar',
        'bar'
    ], 'getOwnPropertyDescriptor: key absent on [[ProxyTarget]]');
    assert.compareArray(definePropertyKeys, [
        'bar',
        'bar',
        'bar'
    ], 'defineProperty: key absent on [[ProxyTarget]]');
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