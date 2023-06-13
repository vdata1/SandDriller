try {
    var obj = { source: 'source text' };
    var result;
    Object.defineProperty(obj, 'flags', {
        get: function () {
            $ERROR('The `flags` property value should not be referenced.');
        }
    });
    obj[Symbol.match] = true;
    result = new RegExp(obj, 'g');
    assert.sameValue(result.source, 'source text', '@@match specified as a primitive boolean');
    assert.sameValue(result.flags, 'g', '@@match specified as a primitive boolean');
    obj[Symbol.match] = 'string';
    result = new RegExp(obj, 'g');
    assert.sameValue(result.source, 'source text', '@@match specified as a primitive string');
    assert.sameValue(result.flags, 'g', '@@match specified as a primitive string');
    obj[Symbol.match] = [];
    result = new RegExp(obj, 'g');
    assert.sameValue(result.source, 'source text', '@@match specified as an array');
    assert.sameValue(result.flags, 'g', '@@match specified as an array');
    obj[Symbol.match] = Symbol();
    result = new RegExp(obj, 'g');
    assert.sameValue(result.source, 'source text', '@@match specified as a Symbol');
    assert.sameValue(result.flags, 'g', '@@match specified as a Symbol');
    obj[Symbol.match] = 86;
    result = new RegExp(obj, 'g');
    assert.sameValue(result.source, 'source text', '@@match specified as a primitive number');
    assert.sameValue(result.flags, 'g', '@@match specified as a primitive number');
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