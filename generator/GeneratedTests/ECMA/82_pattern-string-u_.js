try {
    var subject = /original value/ig;
    subject.compile('[\uD834\uDF06]', 'u');
    assert.sameValue(subject.source, new RegExp('[\uD834\uDF06]', 'u').source, '[[OriginalSource]] internal slot');
    assert.sameValue(subject.test('original value'), false, '[[RegExpMatcher]] internal slot (source)');
    assert.sameValue(subject.test('\uD834'), false, '[[RegExpMatcher]] internal slot (flags #1)');
    assert.sameValue(subject.test('\uDF06'), false, '[[RegExpMatcher]] internal slot (flags #2)');
    assert.sameValue(subject.test('\uD834\uDF06'), true, '[[RegExpMatcher]] internal slot (flags #3)');
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