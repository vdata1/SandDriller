try {
    var desc = Object.getOwnPropertyDescriptor(Object, 'isExtensible');
    var propertyAreCorrect = desc.writable === true && desc.enumerable === false && desc.configurable === true;
    var temp = Object.isExtensible;
    Object.isExtensible = '2010';
    var isWritable = Object.isExtensible === '2010';
    var isEnumerable = false;
    for (var prop in Object) {
        if (prop === 'isExtensible') {
            isEnumerable = true;
        }
    }
    delete Object.isExtensible;
    var isConfigurable = !Object.hasOwnProperty('isExtensible');
    assert(propertyAreCorrect, 'propertyAreCorrect !== true');
    assert(isWritable, 'isWritable !== true');
    assert.sameValue(isEnumerable, false, 'isEnumerable');
    assert(isConfigurable, 'isConfigurable !== true');
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