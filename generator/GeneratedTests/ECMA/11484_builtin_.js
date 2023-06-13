try {
    assert(Object.isExtensible(Proxy.revocable), 'Object.isExtensible(Proxy.revocable) must return true');
    assert.sameValue(typeof Proxy.revocable, 'function', 'The value of `typeof Proxy.revocable` is "function"');
    assert.sameValue(Object.prototype.toString.call(Proxy.revocable), '[object Function]', 'Object.prototype.toString.call(Proxy.revocable) must return "[object Function]"');
    assert.sameValue(Object.getPrototypeOf(Proxy.revocable), Function.prototype, 'Object.getPrototypeOf(Proxy.revocable) must return the value of Function.prototype');
    assert.sameValue(Proxy.revocable.hasOwnProperty('prototype'), false, 'Proxy.revocable.hasOwnProperty(\'prototype\') must return false');
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