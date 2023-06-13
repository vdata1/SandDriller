try {
    var match;
    match = /\C/.exec('ABCDE');
    assert.sameValue(match[0], 'C');
    match = /O\PQ/.exec('MNOPQRS');
    assert.sameValue(match[0], 'OPQ');
    match = /\8/.exec('789');
    assert.sameValue(match[0], '8');
    match = /7\89/.exec('67890');
    assert.sameValue(match[0], '789');
    match = /\9/.exec('890');
    assert.sameValue(match[0], '9');
    match = /8\90/.exec('78900');
    assert.sameValue(match[0], '890');
    match = /(.)(.)(.)(.)(.)(.)(.)(.)\8\8/.exec('0123456777');
    assert.sameValue(match[0], '0123456777', 'DecimalEscape takes precedence over IdentityEscape (\\8)');
    match = /(.)(.)(.)(.)(.)(.)(.)(.)(.)\9\9/.exec('01234567888');
    assert.sameValue(match[0], '01234567888', 'DecimalEscape takes precedence over IdentityEscape (\\9)');
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