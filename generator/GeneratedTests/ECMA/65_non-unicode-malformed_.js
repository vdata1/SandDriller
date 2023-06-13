try {
    assert(/\k<a>/.test('k<a>'));
    assert(/\k<4>/.test('k<4>'));
    assert(/\k<a/.test('k<a'));
    assert(/\k/.test('k'));
    assert(/(?<a>\a)/.test('a'));
    assert.compareArray(['k<a>'], 'xxxk<a>xxx'.match(/\k<a>/));
    assert.compareArray(['k<a'], 'xxxk<a>xxx'.match(/\k<a/));
    assert(/\k<a>(<a>x)/.test('k<a><a>x'));
    assert(/\k<a>\1/.test('k<a>\x01'));
    assert(/\1(b)\k<a>/.test('bk<a>'));
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