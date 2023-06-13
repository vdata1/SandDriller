try {
    var object = { prop: true };
    if (typeof object !== 'object') {
        $ERROR('#1: var object = {prop : true}; typeof object === "object". Actual: ' + typeof object);
    }
    if (object instanceof Object !== true) {
        $ERROR('#2: var object = {prop : true}; object instanceof Object === true');
    }
    if (object.toString !== Object.prototype.toString) {
        $ERROR('#3: var object = {prop : true}; object.toString === Object.prototype.toString. Actual: ' + object.toString);
    }
    if (object['prop'] !== true) {
        $ERROR('#4: var object = {prop : true}; object["prop"] === true');
    }
    if (object.prop !== true) {
        $ERROR('#5: var object = {prop : true}; object.prop === true');
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