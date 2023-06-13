try {
    assert.sameValue([42].includes(43), false, '43');
    assert.sameValue(['test262'].includes('test'), false, 'string');
    assert.sameValue([
        0,
        'test262',
        undefined
    ].includes(''), false, 'the empty string');
    assert.sameValue([
        'true',
        false
    ].includes(true), false, 'true');
    assert.sameValue([
        '',
        true
    ].includes(false), false, 'false');
    assert.sameValue([
        undefined,
        false,
        0,
        1
    ].includes(null), false, 'null');
    assert.sameValue([null].includes(undefined), false, 'undefined');
    assert.sameValue([Symbol('1')].includes(Symbol('1')), false, 'symbol');
    assert.sameValue([{}].includes({}), false, 'object');
    assert.sameValue([[]].includes([]), false, 'array');
    var sample = [42];
    assert.sameValue(sample.includes(sample), false, 'this');
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