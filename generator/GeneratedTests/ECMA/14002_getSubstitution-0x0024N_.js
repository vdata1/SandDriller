try {
    var str = 'ABC AAA ABC AAA';
    var result;
    result = str.replaceAll('ABC', '$1');
    assert.sameValue(result, '$1 AAA $1 AAA');
    result = str.replaceAll('ABC', '$2');
    assert.sameValue(result, '$2 AAA $2 AAA');
    result = str.replaceAll('ABC', '$3');
    assert.sameValue(result, '$3 AAA $3 AAA');
    result = str.replaceAll('ABC', '$4');
    assert.sameValue(result, '$4 AAA $4 AAA');
    result = str.replaceAll('ABC', '$5');
    assert.sameValue(result, '$5 AAA $5 AAA');
    result = str.replaceAll('ABC', '$6');
    assert.sameValue(result, '$6 AAA $6 AAA');
    result = str.replaceAll('ABC', '$7');
    assert.sameValue(result, '$7 AAA $7 AAA');
    result = str.replaceAll('ABC', '$8');
    assert.sameValue(result, '$8 AAA $8 AAA');
    result = str.replaceAll('ABC', '$9');
    assert.sameValue(result, '$9 AAA $9 AAA');
    var customRE = /./g;
    Object.defineProperty(customRE, Symbol.replace, { value: undefined });
    result = '--- /./g --- /a/g --- /./g ---'.replaceAll(customRE, 'a($1$1)');
    assert.sameValue(result, '--- a($1$1) --- /a/g --- a($1$1) ---');
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