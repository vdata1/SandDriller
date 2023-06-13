try {
    var subject;
    subject = /abc/;
    assert.sameValue(subject.compile(), subject, 'method return value (unspecified)');
    assert.sameValue(subject.source, new RegExp('').source, '[[OriginalSource]] (unspecified)');
    assert.sameValue(subject.test(''), true, '[[RegExpMatcher]] internal slot (unspecified)');
    subject = /abc/;
    assert.sameValue(subject.compile(undefined), subject, 'method return value (explicit undefined)');
    assert.sameValue(subject.source, new RegExp('').source, '[[OriginalSource]] (explicit undefined)');
    assert.sameValue(subject.test(''), true, '[[RegExpMatcher]] internal slot (explicit undefined)');
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