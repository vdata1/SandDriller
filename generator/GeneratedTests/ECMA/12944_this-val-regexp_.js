try {
    assert.sameValue(/./.dotAll, false, '/./.dotAll');
    assert.sameValue(/./i.dotAll, false, '/./i.dotAll');
    assert.sameValue(/./g.dotAll, false, '/./g.dotAll');
    assert.sameValue(/./y.dotAll, false, '/./y.dotAll');
    assert.sameValue(/./m.dotAll, false, '/./m.dotAll');
    assert.sameValue(/./s.dotAll, true, '/./s.dotAll');
    assert.sameValue(/./is.dotAll, true, '/./is.dotAll');
    assert.sameValue(/./sg.dotAll, true, '/./sg.dotAll');
    assert.sameValue(/./sy.dotAll, true, '/./sy.dotAll');
    assert.sameValue(/./ms.dotAll, true, '/./ms.dotAll');
    assert.sameValue(new RegExp('.', '').dotAll, false, 'new RegExp(\'.\', \'\').dotAll');
    assert.sameValue(new RegExp('.', 'i').dotAll, false, 'new RegExp(\'.\', \'i\').dotAll');
    assert.sameValue(new RegExp('.', 'g').dotAll, false, 'new RegExp(\'.\', \'g\').dotAll');
    assert.sameValue(new RegExp('.', 'y').dotAll, false, 'new RegExp(\'.\', \'y\').dotAll');
    assert.sameValue(new RegExp('.', 'm').dotAll, false, 'new RegExp(\'.\', \'m\').dotAll');
    assert.sameValue(new RegExp('.', 's').dotAll, true, 'new RegExp(\'.\', \'s\').dotAll');
    assert.sameValue(new RegExp('.', 'is').dotAll, true, 'new RegExp(\'.\', \'is\').dotAll');
    assert.sameValue(new RegExp('.', 'sg').dotAll, true, 'new RegExp(\'.\', \'sg\').dotAll');
    assert.sameValue(new RegExp('.', 'sy').dotAll, true, 'new RegExp(\'.\', \'sy\').dotAll');
    assert.sameValue(new RegExp('.', 'ms').dotAll, true, 'new RegExp(\'.\', \'ms\').dotAll');
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