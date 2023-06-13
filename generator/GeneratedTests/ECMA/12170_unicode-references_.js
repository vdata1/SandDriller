try {
    assert(compareArray([
        'bab',
        'b'
    ], 'bab'.match(/(?<b>.).\k<b>/u)));
    assert.sameValue(null, 'baa'.match(/(?<b>.).\k<b>/u));
    assert(compareArray([
        'bab',
        'b'
    ], 'bab'.match(/(?<a>\k<a>\w)../u)));
    assert.sameValue('b', 'bab'.match(/(?<a>\k<a>\w)../u).groups.a);
    assert(compareArray([
        'bab',
        'b'
    ], 'bab'.match(/\k<a>(?<a>b)\w\k<a>/u)));
    assert.sameValue('b', 'bab'.match(/\k<a>(?<a>b)\w\k<a>/u).groups.a);
    assert(compareArray([
        'bab',
        'b',
        'a'
    ], 'bab'.match(/(?<b>b)\k<a>(?<a>a)\k<b>/u)));
    let {a, b} = 'bab'.match(/(?<b>b)\k<a>(?<a>a)\k<b>/u).groups;
    assert.sameValue(a, 'a');
    assert.sameValue(b, 'b');
    assert(compareArray([
        'bab',
        'b'
    ], 'bab'.match(/\k<a>(?<a>b)\w\k<a>/)));
    assert(compareArray([
        'bab',
        'b',
        'a'
    ], 'bab'.match(/(?<b>b)\k<a>(?<a>a)\k<b>/)));
    assert.sameValue('a', /(?<a>a)(?<b>b)\k<a>/u.exec('aba').groups.a);
    assert.sameValue('b', /(?<a>a)(?<b>b)\k<a>/u.exec('aba').groups.b);
    assert.sameValue(undefined, /(?<a>a)(?<b>b)\k<a>/u.exec('aba').groups.c);
    assert.sameValue(undefined, /(?<a>a)(?<b>b)\k<a>|(?<c>c)/u.exec('aba').groups.c);
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