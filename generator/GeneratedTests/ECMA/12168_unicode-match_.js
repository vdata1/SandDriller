try {
    assert(compareArray([
        'a',
        'a'
    ], 'bab'.match(/(?<a>a)/u)));
    assert(compareArray([
        'a',
        'a'
    ], 'bab'.match(/(?<a42>a)/u)));
    assert(compareArray([
        'a',
        'a'
    ], 'bab'.match(/(?<_>a)/u)));
    assert(compareArray([
        'a',
        'a'
    ], 'bab'.match(/(?<$>a)/u)));
    assert(compareArray([
        'bab',
        'a'
    ], 'bab'.match(/.(?<$>a)./u)));
    assert(compareArray([
        'bab',
        'a',
        'b'
    ], 'bab'.match(/.(?<a>a)(.)/u)));
    assert(compareArray([
        'bab',
        'a',
        'b'
    ], 'bab'.match(/.(?<a>a)(?<b>.)/u)));
    assert(compareArray([
        'bab',
        'ab'
    ], 'bab'.match(/.(?<a>\w\w)/u)));
    assert(compareArray([
        'bab',
        'bab'
    ], 'bab'.match(/(?<a>\w\w\w)/u)));
    assert(compareArray([
        'bab',
        'ba',
        'b'
    ], 'bab'.match(/(?<a>\w\w)(?<b>\w)/u)));
    let {a, b, c} = /(?<a>.)(?<b>.)(?<c>.)\k<c>\k<b>\k<a>/u.exec('abccba').groups;
    assert.sameValue(a, 'a');
    assert.sameValue(b, 'b');
    assert.sameValue(c, 'c');
    assert(compareArray('bab'.match(/(a)/u), 'bab'.match(/(?<a>a)/u)));
    assert(compareArray('bab'.match(/(a)/u), 'bab'.match(/(?<a42>a)/u)));
    assert(compareArray('bab'.match(/(a)/u), 'bab'.match(/(?<_>a)/u)));
    assert(compareArray('bab'.match(/(a)/u), 'bab'.match(/(?<$>a)/u)));
    assert(compareArray('bab'.match(/.(a)./u), 'bab'.match(/.(?<$>a)./u)));
    assert(compareArray('bab'.match(/.(a)(.)/u), 'bab'.match(/.(?<a>a)(.)/u)));
    assert(compareArray('bab'.match(/.(a)(.)/u), 'bab'.match(/.(?<a>a)(?<b>.)/u)));
    assert(compareArray('bab'.match(/.(\w\w)/u), 'bab'.match(/.(?<a>\w\w)/u)));
    assert(compareArray('bab'.match(/(\w\w\w)/u), 'bab'.match(/(?<a>\w\w\w)/u)));
    assert(compareArray('bab'.match(/(\w\w)(\w)/u), 'bab'.match(/(?<a>\w\w)(?<b>\w)/u)));
    assert(compareArray([
        'bab',
        'b'
    ], 'bab'.match(/(?<b>b).\1/u)));
    assert(compareArray([
        'baba',
        'b',
        'a'
    ], 'baba'.match(/(.)(?<a>a)\1\2/u)));
    assert(compareArray([
        'baba',
        'b',
        'a',
        'b',
        'a'
    ], 'baba'.match(/(.)(?<a>a)(?<b>\1)(\2)/u)));
    assert(compareArray([
        '<a',
        '<'
    ], '<a'.match(/(?<lt><)a/u)));
    assert(compareArray([
        '>a',
        '>'
    ], '>a'.match(/(?<gt>>)a/u)));
    assert(compareArray([
        'bab',
        'bab',
        'ab',
        'b'
    ], 'bab'.match(/(?<a>.(?<b>.(?<c>.)))/u)));
    assert(compareArray({
        a: 'bab',
        b: 'ab',
        c: 'b'
    }, 'bab'.match(/(?<a>.(?<b>.(?<c>.)))/u).groups));
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