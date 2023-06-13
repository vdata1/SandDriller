try {
    var s = 'ẛ̣';
    assert.sameValue(s.normalize('NFC'), 'ẛ̣', 'Normalized on NFC');
    assert.sameValue(s.normalize('NFD'), 'ẛ̣', 'Normalized on NFD');
    assert.sameValue(s.normalize('NFKC'), 'ṩ', 'Normalized on NFKC');
    assert.sameValue(s.normalize('NFKD'), 'ṩ', 'Normalized on NFKD');
    assert.sameValue('Å\u2ADCक़Ω̈́'.normalize('NFC'), 'Å\u2ADD̸क़Ω̈́', 'Normalized on NFC');
    assert.sameValue('Å\u2ADCक़Ω̈́'.normalize('NFD'), 'Å\u2ADD̸क़Ω̈́', 'Normalized on NFD');
    assert.sameValue('Å\u2ADCक़Ω̈́'.normalize('NFKC'), 'Å\u2ADD̸क़Ω̈́', 'Normalized on NFKC');
    assert.sameValue('Å\u2ADCक़Ω̈́'.normalize('NFKD'), 'Å\u2ADD̸क़Ω̈́', 'Normalized on NFKD');
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