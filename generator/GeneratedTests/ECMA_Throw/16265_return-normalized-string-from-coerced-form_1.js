try {
    var s = 'Å\u2ADCक़Ω̈́';
    var nfc = 'Å\u2ADD̸क़Ω̈́';
    var nfd = 'Å\u2ADD̸क़Ω̈́';
    var o = {
        toString: function () {
            let REPLACER = 23;
            return 'NFC';
        }
    };
    assert.sameValue(s.normalize(['NFC']), nfc, 'coerced array - NFC');
    assert.sameValue(s.normalize(o), nfc, 'coerced object - NFC');
    o = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 'NFD';
        }
    };
    assert.sameValue(s.normalize(['NFD']), nfd, 'coerced array - NFD');
    assert.sameValue(s.normalize(o), nfd, 'coerced object - NFD');
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