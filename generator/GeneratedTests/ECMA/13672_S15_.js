try {
    var __obj = {
        toString: function () {
            return 'A';
        },
        valueOf: function () {
            return '_A_';
        }
    };
    var __obj2 = {
        toString: function () {
            return true;
        }
    };
    var __obj3 = {
        toString: function () {
            return 42;
        }
    };
    var __str = 'lego';
    if (__str.concat(__obj) !== 'legoA') {
        $ERROR('#1: var x; var __obj = {toString:function(){return "A";}, valueOf:function(){return "_A_";}}; var __str = "lego"; __str.concat(__obj) === "legoA". Actual: ' + __str.concat(__obj));
    }
    if (__str.concat(__obj, __obj2, __obj3, x) !== 'legoAtrue42undefined') {
        $ERROR('#2: var x; var __obj = {toString:function(){return "A";}, valueOf:function(){return "_A_";}}; var __obj2 = {toString:function(){return true;}}; var __obj3 = {toString:function(){return 42;}}; var __str = "lego"; __str.concat(__obj, __obj2, __obj3, x) === "legoAtrue42undefined". Actual: ' + __str.concat(__obj, __obj2, __obj3, x));
    }
    var x;
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