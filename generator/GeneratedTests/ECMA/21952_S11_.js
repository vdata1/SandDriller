try {
    if ((true || false) !== true) {
        $ERROR('#1: (true || false) === true');
    }
    if ((false || true) !== true) {
        $ERROR('#2: (false || true) === true');
    }
    var x = new Boolean(false);
    if ((x || true) !== x) {
        $ERROR('#3: var x = Boolean(false); (x || true) === x');
    }
    var y = new Boolean(true);
    if ((false || y) !== y) {
        $ERROR('#4: var y = Boolean(true); (false || y) === y');
    }
    var x = new Boolean(false);
    var y = new Boolean(true);
    if ((x || y) !== x) {
        $ERROR('#5: var x = new Boolean(false); var y = new Boolean(true); (x || y) === x');
    }
    var x = false;
    var y = new Boolean(true);
    if ((x || y) !== y) {
        $ERROR('#6: var x = false; var y = new Boolean(true); (x || y) === y');
    }
    var objectx = new Object();
    var objecty = new Object();
    objectx.prop = false;
    objecty.prop = 1.1;
    if ((objectx.prop || objecty.prop) !== objecty.prop) {
        $ERROR('#7: var objectx = new Object(); var objecty = new Object(); objectx.prop = false; objecty.prop = 1; (objectx.prop || objecty.prop) === objecty.prop');
    }
    var objectx = new Object();
    var objecty = new Object();
    objectx.prop = 1.1;
    objecty.prop = false;
    if ((objectx.prop || objecty.prop) !== objectx.prop) {
        $ERROR('#8: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1.1; objecty.prop = false; (objectx.prop || objecty.prop) === objectx.prop');
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