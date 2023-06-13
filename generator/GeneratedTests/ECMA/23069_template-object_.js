try {
    var templateObject;
    function tag(parameter) {
        templateObject = parameter;
    }
    tag`${ 1 }`;
    assert(Array.isArray(templateObject.raw), 'The template object is an array');
    assert(templateObject.hasOwnProperty('raw'));
    verifyNotEnumerable(templateObject, 'raw');
    verifyNotWritable(templateObject, 'raw');
    verifyNotConfigurable(templateObject, 'raw');
    assert(Array.isArray(templateObject), 'The "raw" object is an array');
    verifyEnumerable(templateObject, '0');
    verifyNotWritable(templateObject, '0');
    verifyNotConfigurable(templateObject, '0');
    verifyNotEnumerable(templateObject, 'length');
    verifyNotWritable(templateObject, 'length');
    verifyNotConfigurable(templateObject, 'length');
    verifyEnumerable(templateObject.raw, '0');
    verifyNotWritable(templateObject.raw, '0');
    verifyNotConfigurable(templateObject.raw, '0');
    verifyNotEnumerable(templateObject.raw, 'length');
    verifyNotWritable(templateObject.raw, 'length');
    verifyNotConfigurable(templateObject.raw, 'length');
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