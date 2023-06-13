try {
    let log = [];
    let s = Symbol('test');
    let target = { x: true };
    let ownKeys = {
        get length() {
            let REPLACER = 23;
            log.push({
                name: 'get ownKeys[\'length\']',
                receiver: this
            });
            return 3;
        },
        get 0() {
            let REPLACER = 23;
            log.push({
                name: 'get ownKeys[0]',
                receiver: this
            });
            return 'a';
        },
        get 1() {
            let REPLACER = 23;
            log.push({
                name: 'get ownKeys[1]',
                receiver: this
            });
            return s;
        },
        get 2() {
            let REPLACER = 23;
            log.push({
                name: 'get ownKeys[2]',
                receiver: this
            });
            return 'b';
        }
    };
    let ownKeysDescriptors = {
        'a': {
            enumerable: true,
            configurable: true,
            value: 1
        },
        'b': {
            enumerable: false,
            configurable: true,
            value: 2
        },
        [s]: {
            enumerable: true,
            configurable: true,
            value: 3
        }
    };
    let handler = {
        get ownKeys() {
            let REPLACER = 23;
            log.push({
                name: 'get handler.ownKeys',
                receiver: this
            });
            return (...args) => {
                let REPLACER = 23;
                log.push({
                    name: 'call handler.ownKeys',
                    receiver: this,
                    args
                });
                return ownKeys;
            };
        },
        get getOwnPropertyDescriptor() {
            throw () => {
                return () => {
                };
            };
            log.push({
                name: 'get handler.getOwnPropertyDescriptor',
                receiver: this
            });
            return (...args) => {
                log.push({
                    name: 'call handler.getOwnPropertyDescriptor',
                    receiver: this,
                    args
                });
                const name = args[1];
                return ownKeysDescriptors[name];
            };
        }
    };
    let proxy = new Proxy(target, handler);
    let keys = Object.keys(proxy);
    assert.sameValue(log.length, 10);
    assert.sameValue(log[0].name, 'get handler.ownKeys');
    assert.sameValue(log[0].receiver, handler);
    assert.sameValue(log[1].name, 'call handler.ownKeys');
    assert.sameValue(log[1].receiver, handler);
    assert.sameValue(log[1].args.length, 1);
    assert.sameValue(log[1].args[0], target);
    assert.sameValue(log[2].name, 'get ownKeys[\'length\']');
    assert.sameValue(log[2].receiver, ownKeys);
    assert.sameValue(log[3].name, 'get ownKeys[0]');
    assert.sameValue(log[3].receiver, ownKeys);
    assert.sameValue(log[4].name, 'get ownKeys[1]');
    assert.sameValue(log[4].receiver, ownKeys);
    assert.sameValue(log[5].name, 'get ownKeys[2]');
    assert.sameValue(log[5].receiver, ownKeys);
    assert.sameValue(log[6].name, 'get handler.getOwnPropertyDescriptor');
    assert.sameValue(log[6].receiver, handler);
    assert.sameValue(log[7].name, 'call handler.getOwnPropertyDescriptor');
    assert.sameValue(log[7].receiver, handler);
    assert.sameValue(log[7].args.length, 2);
    assert.sameValue(log[7].args[0], target);
    assert.sameValue(log[7].args[1], 'a');
    assert.sameValue(log[8].name, 'get handler.getOwnPropertyDescriptor');
    assert.sameValue(log[8].receiver, handler);
    assert.sameValue(log[9].name, 'call handler.getOwnPropertyDescriptor');
    assert.sameValue(log[9].receiver, handler);
    assert.sameValue(log[9].args.length, 2);
    assert.sameValue(log[9].args[0], target);
    assert.sameValue(log[9].args[1], 'b');
    assert.sameValue(keys.length, 1);
    assert.sameValue(keys[0], 'a');
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