try {
    assert(compareArray([
        'f',
        'c'
    ], 'abcdef'.match(/(?<=(?<a>\w){3})f/u)));
    assert.sameValue('c', 'abcdef'.match(/(?<=(?<a>\w){3})f/u).groups.a);
    assert.sameValue('b', 'abcdef'.match(/(?<=(?<a>\w){4})f/u).groups.a);
    assert.sameValue('a', 'abcdef'.match(/(?<=(?<a>\w)+)f/u).groups.a);
    assert.sameValue(null, 'abcdef'.match(/(?<=(?<a>\w){6})f/u));
    assert(compareArray([
        'f',
        ''
    ], 'abcdef'.match(/((?<=\w{3}))f/u)));
    assert(compareArray([
        'f',
        ''
    ], 'abcdef'.match(/(?<a>(?<=\w{3}))f/u)));
    assert(compareArray([
        'f',
        undefined
    ], 'abcdef'.match(/(?<!(?<a>\d){3})f/u)));
    assert.sameValue(null, 'abcdef'.match(/(?<!(?<a>\D){3})f/u));
    assert(compareArray([
        'f',
        undefined
    ], 'abcdef'.match(/(?<!(?<a>\D){3})f|f/u)));
    assert(compareArray([
        'f',
        undefined
    ], 'abcdef'.match(/(?<a>(?<!\D{3}))f|f/u)));
    assert(compareArray([
        'f',
        'c'
    ], 'abcdef'.match(/(?<=(?<a>\w){3})f/)));
    assert.sameValue('c', 'abcdef'.match(/(?<=(?<a>\w){3})f/).groups.a);
    assert.sameValue('b', 'abcdef'.match(/(?<=(?<a>\w){4})f/).groups.a);
    assert.sameValue('a', 'abcdef'.match(/(?<=(?<a>\w)+)f/).groups.a);
    assert.sameValue(null, 'abcdef'.match(/(?<=(?<a>\w){6})f/));
    assert(compareArray([
        'f',
        ''
    ], 'abcdef'.match(/((?<=\w{3}))f/)));
    assert(compareArray([
        'f',
        ''
    ], 'abcdef'.match(/(?<a>(?<=\w{3}))f/)));
    assert(compareArray([
        'f',
        undefined
    ], 'abcdef'.match(/(?<!(?<a>\d){3})f/)));
    assert.sameValue(null, 'abcdef'.match(/(?<!(?<a>\D){3})f/));
    assert(compareArray([
        'f',
        undefined
    ], 'abcdef'.match(/(?<!(?<a>\D){3})f|f/)));
    assert(compareArray([
        'f',
        undefined
    ], 'abcdef'.match(/(?<a>(?<!\D{3}))f|f/)));
    assert(compareArray([
        'fst',
        'snd'
    ], Object.getOwnPropertyNames(/(?<=(?<fst>.)|(?<snd>.))/u.exec('abcd').groups)));
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