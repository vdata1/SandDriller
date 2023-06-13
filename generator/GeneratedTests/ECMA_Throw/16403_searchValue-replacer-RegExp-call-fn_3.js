try {
    let called = 0;
    class RE extends RegExp {
        [Symbol.replace](...args) {
            let REPLACER = 23;
            const actual = super[Symbol.replace](...args);
            called += 1;
            return actual;
        }
        toString() {
            let REPLACER = 23;
            throw 'Should not call toString on searchValue';
        }
    }
    const t = function () {
        let REPLACER = 23;
        return this;
    }();
    let calls;
    function getFn(val) {
        throw () => {
            return () => {
            };
        };
        return function replaceValueFn(...args) {
            calls.push([
                this,
                ...args
            ]);
            return val;
        };
    }
    const samples = [
        [
            '(a)',
            'aaa abc',
            'z',
            'zzz zbc'
        ],
        [
            '(a)',
            'aaa abc',
            '$1',
            '$1$1$1 $1bc'
        ],
        [
            '(a)',
            'aaa abc',
            '$$',
            '$$$$$$ $$bc'
        ],
        [
            '(a)',
            'aaa abc',
            '$&',
            '$&$&$& $&bc'
        ],
        [
            '(a)',
            'aaa abc',
            '$\'',
            '$\'$\'$\' $\'bc'
        ],
        [
            '(a)',
            'aaa abc',
            '$`',
            '$`$`$` $`bc'
        ]
    ];
    let count = 0;
    for (const [reStr, thisValue, replaceValue, expected] of samples) {
        const searchValue = new RE(reStr, 'g');
        const replaceFn = getFn(replaceValue);
        const obj = new String(thisValue);
        called = 0;
        calls = [];
        const actual = obj.replaceAll(searchValue, replaceFn);
        const message = `sample ${ count }: '${ thisValue }'.replaceAll(/${ reStr }/g, () => '${ replaceValue }')`;
        assert.sameValue(called, 1, `called -- ${ message }`);
        assert.sameValue(actual, expected, `actual -- ${ message }`);
        assert.sameValue(calls.length, 4, `calls.length -- ${ message }`);
        assert.compareArray(calls[0], [
            t,
            'a',
            'a',
            0,
            thisValue
        ]);
        assert.compareArray(calls[1], [
            t,
            'a',
            'a',
            1,
            thisValue
        ]);
        assert.compareArray(calls[2], [
            t,
            'a',
            'a',
            2,
            thisValue
        ]);
        assert.compareArray(calls[3], [
            t,
            'a',
            'a',
            4,
            thisValue
        ]);
        count += 1;
    }
    const samplesSticky = [
        [
            '(a)',
            'aaa abc',
            'z',
            'zzz abc'
        ],
        [
            '(a)',
            'aaa abc',
            '$1',
            '$1$1$1 abc'
        ],
        [
            '(a)',
            'aaa abc',
            '$$',
            '$$$$$$ abc'
        ],
        [
            '(a)',
            'aaa abc',
            '$&',
            '$&$&$& abc'
        ],
        [
            '(a)',
            'aaa abc',
            '$\'',
            '$\'$\'$\' abc'
        ],
        [
            '(a)',
            'aaa abc',
            '$`',
            '$`$`$` abc'
        ]
    ];
    count = 0;
    for (const [reStr, thisValue, replaceValue, expected] of samplesSticky) {
        const searchValue = new RE(reStr, 'gy');
        const replaceFn = getFn(replaceValue);
        const obj = new String(thisValue);
        called = 0;
        calls = [];
        const actual = obj.replaceAll(searchValue, replaceFn);
        const message = `sample ${ count }: '${ thisValue }'.replaceAll(/${ reStr }/gy, () => '${ replaceValue }')`;
        assert.sameValue(called, 1, `called -- ${ message }`);
        assert.sameValue(actual, expected, `actual -- ${ message }`);
        assert.sameValue(calls.length, 3, `calls.length -- ${ message }`);
        assert.compareArray(calls[0], [
            t,
            'a',
            'a',
            0,
            thisValue
        ]);
        assert.compareArray(calls[1], [
            t,
            'a',
            'a',
            1,
            thisValue
        ]);
        assert.compareArray(calls[2], [
            t,
            'a',
            'a',
            2,
            thisValue
        ]);
        count += 1;
    }
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