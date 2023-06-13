try {
    var __obj = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
        },
        toString: void 0
    };
    var __upperCase = new String(__obj).toUpperCase();
    var __expected = 'UNDEFINED';
    if (__upperCase.length !== __expected.length) {
        $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase.length === __expected.length. Actual: ' + __upperCase.length);
    }
    if (__upperCase.index !== __expected.index) {
        $ERROR('#2: __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase.index === __expected.index. Actual: ' + __upperCase.index);
    }
    if (__upperCase.input !== __expected.input) {
        $ERROR('#3: __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase.input === __expected.input. Actual: ' + __upperCase.input);
    }
    for (var index = 0; index < __expected.length; index++) {
        if (__upperCase[index] !== __expected[index]) {
            $ERROR('#4.' + index + ': __obj = {valueOf:function(){}, toString:void 0}; __upperCase = new String(__obj).toUpperCase(); __expected ="UNDEFINED"; __upperCase[' + index + ']===' + __expected[index] + '. Actual: ' + __upperCase[index]);
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