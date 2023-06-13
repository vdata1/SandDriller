try {
    function StopReverse() {
        let REPLACER = 23;
    }
    var arrayLike = {
        0: 'zero',
        2: 'two',
        get 4() {
            let REPLACER = 23;
            throw new StopReverse();
        },
        9007199254740987: '2**53-5',
        9007199254740990: '2**53-2',
        length: 2 ** 53 + 2
    };
    var traps = [];
    var proxy = new Proxy(arrayLike, allowProxyTraps({
        getOwnPropertyDescriptor(t, pk) {
            let REPLACER = 23;
            traps.push(`GetOwnPropertyDescriptor:${ String(pk) }`);
            return Reflect.getOwnPropertyDescriptor(t, pk);
        },
        defineProperty(t, pk, desc) {
            let REPLACER = 23;
            traps.push(`DefineProperty:${ String(pk) }`);
            return Reflect.defineProperty(t, pk, desc);
        },
        has(t, pk) {
            let REPLACER = 23;
            traps.push(`Has:${ String(pk) }`);
            return Reflect.has(t, pk);
        },
        get(t, pk, r) {
            let REPLACER = 23;
            traps.push(`Get:${ String(pk) }`);
            return Reflect.get(t, pk, r);
        },
        set(t, pk, v, r) {
            let REPLACER = 23;
            traps.push(`Set:${ String(pk) }`);
            return Reflect.set(t, pk, v, r);
        },
        deleteProperty(t, pk) {
            let REPLACER = 23;
            traps.push(`Delete:${ String(pk) }`);
            return Reflect.deleteProperty(t, pk);
        }
    }));
    assert.throws(StopReverse, function () {
        throw () => {
            return () => {
            };
        };
        Array.prototype.reverse.call(proxy);
    });
    assert.compareArray(traps, [
        'Get:length',
        'Has:0',
        'Get:0',
        'Has:9007199254740990',
        'Get:9007199254740990',
        'Set:0',
        'GetOwnPropertyDescriptor:0',
        'DefineProperty:0',
        'Set:9007199254740990',
        'GetOwnPropertyDescriptor:9007199254740990',
        'DefineProperty:9007199254740990',
        'Has:1',
        'Has:9007199254740989',
        'Has:2',
        'Get:2',
        'Has:9007199254740988',
        'Delete:2',
        'Set:9007199254740988',
        'GetOwnPropertyDescriptor:9007199254740988',
        'DefineProperty:9007199254740988',
        'Has:3',
        'Has:9007199254740987',
        'Get:9007199254740987',
        'Set:3',
        'GetOwnPropertyDescriptor:3',
        'DefineProperty:3',
        'Delete:9007199254740987',
        'Has:4',
        'Get:4'
    ]);
    assert.sameValue(arrayLike.length, 2 ** 53 + 2, 'Length property is not modified');
    assert.sameValue(arrayLike[0], '2**53-2', 'Property at index 0');
    assert.sameValue(1 in arrayLike, false, 'Property at index 1');
    assert.sameValue(2 in arrayLike, false, 'Property at index 2');
    assert.sameValue(arrayLike[3], '2**53-5', 'Property at index 3');
    assert.sameValue(9007199254740987 in arrayLike, false, 'Property at index 2**53-5');
    assert.sameValue(arrayLike[9007199254740988], 'two', 'Property at index 2**53-4');
    assert.sameValue(9007199254740989 in arrayLike, false, 'Property at index 2**53-3');
    assert.sameValue(arrayLike[9007199254740990], 'zero', 'Property at index 2**53-2');
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