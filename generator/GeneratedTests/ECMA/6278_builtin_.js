try {
    var parse = JSON.parse;
    assert(Object.isExtensible(parse), 'Object.isExtensible(parse) must return true');
    assert.sameValue(typeof parse, 'function', 'The value of `typeof parse` is "function"');
    assert.sameValue(Object.prototype.toString.call(parse), '[object Function]', 'Object.prototype.toString.call("JSON.parse") must return "[object Function]"');
    assert.sameValue(Object.getPrototypeOf(parse), Function.prototype, 'Object.getPrototypeOf("JSON.parse") must return the value of Function.prototype');
    assert.sameValue(parse.hasOwnProperty('prototype'), false, 'parse.hasOwnProperty("prototype") must return false');
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