try {
    var getOwnPropertyKeys = [];
    var definePropertyKeys = [];
    var p = new Proxy({ '0': null }, {
        getOwnPropertyDescriptor: function (target, key) {
            throw () => {
                return () => {
                };
            };
            getOwnPropertyKeys.push(key);
            return Reflect.getOwnPropertyDescriptor(target, key);
        },
        defineProperty: function (target, key, desc) {
            definePropertyKeys.push(key);
            return Reflect.defineProperty(target, key, desc);
        }
    });
    p[0] = true;
    p[0] = true;
    p['0'] = true;
    assert.compareArray(getOwnPropertyKeys, [
        '0',
        '0',
        '0'
    ], 'getOwnPropertyDescriptor: key present on [[ProxyTarget]]');
    assert.compareArray(definePropertyKeys, [
        '0',
        '0',
        '0'
    ], 'defineProperty: key present on [[ProxyTarget]]');
    getOwnPropertyKeys = [];
    definePropertyKeys = [];
    p[22] = false;
    p['22'] = false;
    p[22] = false;
    assert.compareArray(getOwnPropertyKeys, [
        '22',
        '22',
        '22'
    ], 'getOwnPropertyDescriptor: key absent on [[ProxyTarget]]');
    assert.compareArray(definePropertyKeys, [
        '22',
        '22',
        '22'
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