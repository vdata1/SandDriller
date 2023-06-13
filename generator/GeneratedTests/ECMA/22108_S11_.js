try {
    var x = true;
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#1: var x = true; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = new Boolean(true);
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#2: var x = new Boolean(true); var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = 1;
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#3: var x = 1; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = new Number(1);
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#4: var x = new Number(1); var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = '1';
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#5: var x = "1"; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = new String(1);
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#6: var x = new String(1); var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = undefined;
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#7: var x = undefined; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = null;
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#8: var x = null; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = {};
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#9: var x = {}; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = [
        1,
        2
    ];
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#10: var x = [1,2]; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = function () {
    };
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#11: var x = function() {}; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
    }
    var x = this;
    var object = { prop: x };
    if (object.prop !== x) {
        $ERROR('#12: var x = this; var object = {prop : x}; object.prop === x. Actual: ' + object.prop);
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