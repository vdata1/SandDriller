try {
    var result;
    var searchValue;
    searchValue = /./g;
    Object.defineProperty(searchValue, Symbol.replace, { value: undefined });
    result = 'aa /./g /./g aa'.replaceAll(searchValue, 'z');
    assert.sameValue(result, 'aa z z aa', '/./g');
    searchValue = /./gy;
    Object.defineProperty(searchValue, Symbol.replace, { value: undefined });
    result = 'aa /./gy /./gy aa'.replaceAll(searchValue, 'z');
    assert.sameValue(result, 'aa z z aa', '/./gy');
    searchValue = /./gi;
    Object.defineProperty(searchValue, Symbol.replace, { value: undefined });
    result = 'aa /./gi /./gi aa'.replaceAll(searchValue, 'z');
    assert.sameValue(result, 'aa z z aa', '/./gi');
    searchValue = /./iyg;
    Object.defineProperty(searchValue, Symbol.replace, { value: undefined });
    result = 'aa /./giy /./iyg /./gyi /./giy aa'.replaceAll(searchValue, 'z');
    assert.sameValue(result, 'aa z /./iyg /./gyi z aa', '/./iyg');
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