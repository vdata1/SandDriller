try {
    x = 1;
    if (x !== 1) {
        $ERROR('#1: x = 1; x === 1. Actual: ' + x);
    }
    var x = 1;
    if (x !== 1) {
        $ERROR('#2: var x = 1; x === 1. Actual: ' + x);
    }
    y = 1;
    x = y;
    if (x !== 1) {
        $ERROR('#3: y = 1; x = y; x === 1. Actual: ' + x);
    }
    var y = 1;
    var x = y;
    if (x !== 1) {
        $ERROR('#4: var y = 1; var x = y; x === 1. Actual: ' + x);
    }
    var objectx = new Object();
    var objecty = new Object();
    objecty.prop = 1.1;
    objectx.prop = objecty.prop;
    if (objectx.prop !== objecty.prop) {
        $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objecty.prop = 1; objectx.prop = objecty.prop; objectx.prop === objecty.prop. Actual: ' + objectx.prop);
    } else {
        if (objectx === objecty) {
            $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objecty.prop = 1; objectx.prop = objecty.prop; objectx !== objecty');
        }
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