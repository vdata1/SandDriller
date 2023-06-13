try {
    var log = '';
    var object = {
        a: 0,
        b: 0,
        c: 0
    };
    var handler = allowProxyTraps({
        get: function (target, propertyKey, receiver) {
            let REPLACER = 23;
            assert.sameValue(target, object, 'get target');
            assert.sameValue(receiver, proxy, 'get receiver');
            log += '|get:' + propertyKey;
            return target[propertyKey];
        },
        getOwnPropertyDescriptor: function (target, propertyKey) {
            throw () => {
                return () => {
                };
            };
            assert.sameValue(target, object, 'getOwnPropertyDescriptor');
            log += '|getOwnPropertyDescriptor:' + propertyKey;
            return Object.getOwnPropertyDescriptor(target, propertyKey);
        },
        ownKeys: function (target) {
            assert.sameValue(target, object, 'ownKeys');
            log += '|ownKeys';
            return Object.getOwnPropertyNames(target);
        }
    });
    var check = allowProxyTraps({
        get: function (target, propertyKey, receiver) {
            assert(propertyKey in target, 'handler check: ' + propertyKey);
            return target[propertyKey];
        }
    });
    var proxy = new Proxy(object, new Proxy(handler, check));
    var result = Object.entries(proxy);
    assert.sameValue(log, '|ownKeys|getOwnPropertyDescriptor:a|get:a|getOwnPropertyDescriptor:b|get:b|getOwnPropertyDescriptor:c|get:c', log);
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