try {
    const re = /./;
    const result = re.exec('a');
    assert.sameValue(Object.getPrototypeOf(result), Array.prototype);
    assert(result.hasOwnProperty('groups'));
    assert.sameValue('a', result[0]);
    assert.sameValue(0, result.index);
    assert.sameValue(undefined, result.groups);
    verifyProperty(result, 'groups', {
        writable: true,
        enumerable: true,
        configurable: true
    });
    Array.prototype.groups = { a: 'b' };
    assert.sameValue('$<a>', 'a'.replace(re, '$<a>'));
    Array.prototype.groups = undefined;
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