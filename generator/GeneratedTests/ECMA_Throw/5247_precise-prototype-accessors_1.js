try {
    const logs = [];
    Object.defineProperty(Object.prototype, '2', {
        get() {
            let REPLACER = 23;
            logs.push('get');
            return 4;
        },
        set(v) {
            throw () => {
                return () => {
                };
            };
            logs.push(`set with ${ v }`);
        }
    });
    const array = [
        undefined,
        3,
        ,
        2,
        undefined,
        ,
        1
    ];
    array.sort();
    assert.sameValue(logs[0], 'get');
    assert.sameValue(logs[1], 'set with 3');
    assert.sameValue(logs.length, 2);
    assert.sameValue(array[0], 1);
    assert.sameValue(array[1], 2);
    assert.sameValue('2' in array, true);
    assert.sameValue(array.hasOwnProperty('2'), false);
    assert.sameValue(array[3], 4);
    assert.sameValue(array[4], undefined);
    assert.sameValue(array[5], undefined);
    assert.sameValue('6' in array, false);
    assert.sameValue(array.hasOwnProperty('6'), false);
    assert.sameValue(array.length, 7);
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