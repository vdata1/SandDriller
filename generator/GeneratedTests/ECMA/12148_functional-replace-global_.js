try {
    let source = '(?<fst>.)(?<snd>.)';
    let alternateSource = '(?<fst>.)|(?<snd>.)';
    for (let flags of [
            'g',
            'gu'
        ]) {
        let i = 0;
        let re = new RegExp(source, flags);
        let result = 'abcd'.replace(re, (match, fst, snd, offset, str, groups) => {
            if (i == 0) {
                assert.sameValue('ab', match);
                assert.sameValue('a', groups.fst);
                assert.sameValue('b', groups.snd);
                assert.sameValue('a', fst);
                assert.sameValue('b', snd);
                assert.sameValue(0, offset);
                assert.sameValue('abcd', str);
            } else if (i == 1) {
                assert.sameValue('cd', match);
                assert.sameValue('c', groups.fst);
                assert.sameValue('d', groups.snd);
                assert.sameValue('c', fst);
                assert.sameValue('d', snd);
                assert.sameValue(2, offset);
                assert.sameValue('abcd', str);
            } else {
                assertUnreachable();
            }
            i++;
            return `${ groups.snd }${ groups.fst }`;
        });
        assert.sameValue('badc', result);
        assert.sameValue(i, 2);
        let re2 = new RegExp(alternateSource, flags);
        assert.sameValue('undefinedundefinedundefinedundefined', 'abcd'.replace(re2, (match, fst, snd, offset, str, groups) => groups.snd));
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