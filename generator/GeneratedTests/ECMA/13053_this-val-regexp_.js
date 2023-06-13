try {
    assert.sameValue(/./.hasIndices, false, '/./.hasIndices');
    assert.sameValue(/./i.hasIndices, false, '/./i.hasIndices');
    assert.sameValue(/./g.hasIndices, false, '/./g.hasIndices');
    assert.sameValue(/./y.hasIndices, false, '/./y.hasIndices');
    assert.sameValue(/./m.hasIndices, false, '/./m.hasIndices');
    assert.sameValue(/./s.hasIndices, false, '/./s.hasIndices');
    assert.sameValue(/./u.hasIndices, false, '/./u.hasIndices');
    assert.sameValue(/./d.hasIndices, true, '/./d.hasIndices');
    assert.sameValue(/./di.hasIndices, true, '/./di.hasIndices');
    assert.sameValue(/./dg.hasIndices, true, '/./dg.hasIndices');
    assert.sameValue(/./dy.hasIndices, true, '/./dy.hasIndices');
    assert.sameValue(/./dm.hasIndices, true, '/./dm.hasIndices');
    assert.sameValue(/./ds.hasIndices, true, '/./ds.hasIndices');
    assert.sameValue(/./du.hasIndices, true, '/./du.hasIndices');
    assert.sameValue(new RegExp('.', '').hasIndices, false, 'new RegExp(\'.\', \'\').hasIndices');
    assert.sameValue(new RegExp('.', 'i').hasIndices, false, 'new RegExp(\'.\', \'i\').hasIndices');
    assert.sameValue(new RegExp('.', 'g').hasIndices, false, 'new RegExp(\'.\', \'g\').hasIndices');
    assert.sameValue(new RegExp('.', 'y').hasIndices, false, 'new RegExp(\'.\', \'y\').hasIndices');
    assert.sameValue(new RegExp('.', 'm').hasIndices, false, 'new RegExp(\'.\', \'m\').hasIndices');
    assert.sameValue(new RegExp('.', 's').hasIndices, false, 'new RegExp(\'.\', \'s\').hasIndices');
    assert.sameValue(new RegExp('.', 'u').hasIndices, false, 'new RegExp(\'.\', \'u\').hasIndices');
    assert.sameValue(new RegExp('.', 'd').hasIndices, true, 'new RegExp(\'.\', \'d\').hasIndices');
    assert.sameValue(new RegExp('.', 'di').hasIndices, true, 'new RegExp(\'.\', \'di\').hasIndices');
    assert.sameValue(new RegExp('.', 'dg').hasIndices, true, 'new RegExp(\'.\', \'dg\').hasIndices');
    assert.sameValue(new RegExp('.', 'dy').hasIndices, true, 'new RegExp(\'.\', \'dy\').hasIndices');
    assert.sameValue(new RegExp('.', 'dm').hasIndices, true, 'new RegExp(\'.\', \'dm\').hasIndices');
    assert.sameValue(new RegExp('.', 'ds').hasIndices, true, 'new RegExp(\'.\', \'ds\').hasIndices');
    assert.sameValue(new RegExp('.', 'du').hasIndices, true, 'new RegExp(\'.\', \'du\').hasIndices');
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