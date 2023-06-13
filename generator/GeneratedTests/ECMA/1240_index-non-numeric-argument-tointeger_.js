try {
    assert.sameValue(typeof Array.prototype.at, 'function');
    let a = [
        0,
        1,
        2,
        3
    ];
    assert.sameValue(a.at(false), 0, 'a.at(false) must return 0');
    assert.sameValue(a.at(null), 0, 'a.at(null) must return 0');
    assert.sameValue(a.at(undefined), 0, 'a.at(undefined) must return 0');
    assert.sameValue(a.at(''), 0, 'a.at("") must return 0');
    assert.sameValue(a.at(function () {
    }), 0, 'a.at(function() {}) must return 0');
    assert.sameValue(a.at([]), 0, 'a.at([]) must return 0');
    assert.sameValue(a.at(true), 1, 'a.at(true) must return 1');
    assert.sameValue(a.at('1'), 1, 'a.at("1") must return 1');
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