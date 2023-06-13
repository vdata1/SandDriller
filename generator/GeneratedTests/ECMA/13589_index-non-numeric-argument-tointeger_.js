try {
    assert.sameValue(typeof String.prototype.at, 'function');
    let s = '01';
    assert.sameValue(s.at(false), '0', 's.at(false) must return 0');
    assert.sameValue(s.at(null), '0', 's.at(null) must return 0');
    assert.sameValue(s.at(undefined), '0', 's.at(undefined) must return 0');
    assert.sameValue(s.at(''), '0', 's.at("") must return 0');
    assert.sameValue(s.at(function () {
    }), '0', 's.at(function() {}) must return 0');
    assert.sameValue(s.at([]), '0', 's.at([]) must return 0');
    assert.sameValue(s.at(true), '1', 's.at(true) must return 1');
    assert.sameValue(s.at('1'), '1', 's.at("1") must return 1');
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