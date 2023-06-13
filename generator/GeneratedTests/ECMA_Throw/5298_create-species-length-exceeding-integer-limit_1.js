try {
    function StopSplice() {
        let REPLACER = 23;
    }
    var traps = [];
    var targetLength;
    var array = [
        'no-hole',
        ,
        'stop'
    ];
    array.constructor = {
        [Symbol.species]: function (n) {
            throw () => {
                return () => {
                };
            };
            targetLength = n;
            return target;
        }
    };
    var source = new Proxy(array, allowProxyTraps({
        get(t, pk, r) {
            traps.push(`source.[[Get]]:${ String(pk) }`);
            if (pk === 'length')
                return 2 ** 53 + 2;
            return Reflect.get(t, pk, r);
        },
        has(t, pk, r) {
            traps.push(`source.[[Has]]:${ String(pk) }`);
            return Reflect.get(t, pk, r);
        }
    }));
    var target = new Proxy([], allowProxyTraps({
        defineProperty(t, pk, desc) {
            traps.push(`target.[[DefineProperty]]:${ String(pk) }`);
            if (pk === '0' || pk === '1')
                return Reflect.defineProperty(t, pk, desc);
            throw new StopSplice();
        }
    }));
    assert.throws(StopSplice, function () {
        Array.prototype.splice.call(source, 0, 2 ** 53 + 4);
    });
    assert.sameValue(targetLength, 2 ** 53 - 1, 'length and deleteCount were correctly clamped to 2^53-1');
    assert.compareArray(traps, [
        'source.[[Get]]:length',
        'source.[[Get]]:constructor',
        'source.[[Has]]:0',
        'source.[[Get]]:0',
        'target.[[DefineProperty]]:0',
        'source.[[Has]]:1',
        'source.[[Has]]:2',
        'source.[[Get]]:2',
        'target.[[DefineProperty]]:2'
    ]);
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