try {
    assert.sameValue('abc'.codePointAt(0), 97);
    assert.sameValue('abc'.codePointAt(1), 98);
    assert.sameValue('abc'.codePointAt(2), 99);
    assert.sameValue('ꪪ뮻'.codePointAt(0), 43690);
    assert.sameValue('\uD7FFꪪ'.codePointAt(0), 55295);
    assert.sameValue('\uDC00ꪪ'.codePointAt(0), 56320);
    assert.sameValue('ꪪ뮻'.codePointAt(0), 43690);
    assert.sameValue('123\uD800'.codePointAt(3), 55296);
    assert.sameValue('123\uDAAA'.codePointAt(3), 55978);
    assert.sameValue('123\uDBFF'.codePointAt(3), 56319);
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