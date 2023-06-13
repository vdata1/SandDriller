try {
    if ((false && true) !== false) {
        $ERROR('#1: (false && true) === false');
    }
    if ((true && false) !== false) {
        $ERROR('#2: (true && false) === false');
    }
    var x = false;
    if ((x && true) !== false) {
        $ERROR('#3: var x = false; (x && true) === false');
    }
    var y = new Boolean(false);
    if ((true && y) !== y) {
        $ERROR('#4: var y = new Boolean(false); (true && y) === y');
    }
    var x = false;
    var y = true;
    if ((x && y) !== false) {
        $ERROR('#5: var x = false; var y = true; (x && y) === false');
    }
    var x = true;
    var y = new Boolean(false);
    if ((x && y) !== y) {
        $ERROR('#6: var x = true; var y = new Boolean(false); (x && y) === y');
    }
    var objectx = new Object();
    var objecty = new Object();
    objectx.prop = true;
    objecty.prop = 1.1;
    if ((objectx.prop && objecty.prop) !== objecty.prop) {
        $ERROR('#7: var objectx = new Object(); var objecty = new Object(); objectx.prop = true; objecty.prop = 1; (objectx.prop && objecty.prop) === objecty.prop');
    }
    var objectx = new Object();
    var objecty = new Object();
    objectx.prop = 0;
    objecty.prop = true;
    if ((objectx.prop && objecty.prop) !== objectx.prop) {
        $ERROR('#8: var objectx = new Object(); var objecty = new Object(); objectx.prop = 0; objecty.prop = true; (objectx.prop && objecty.prop) === objectx.prop');
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