try {
    var __re = /(?:ab|cd)\d?/g;
    var __executed = __re.exec('aacd2233ab12nm444ab42');
    var __expected = ['cd2'];
    __expected.index = 2;
    __expected.input = 'aacd2233ab12nm444ab42';
    if (__executed.length !== __expected.length) {
        $ERROR('#1: __re = /(?:ab|cd)\\d?/g; __executed = __re.exec("aacd2233ab12nm444ab42"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
    }
    if (__executed.index !== __expected.index) {
        $ERROR('#2: __re = /(?:ab|cd)\\d?/g; __executed = __re.exec("aacd2233ab12nm444ab42"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
    }
    if (__executed.input !== __expected.input) {
        $ERROR('#3: __re = /(?:ab|cd)\\d?/g; __executed = __re.exec("aacd2233ab12nm444ab42"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
    }
    for (var index = 0; index < __expected.length; index++) {
        if (__executed[index] !== __expected[index]) {
            $ERROR('#4: __re = /(?:ab|cd)\\d?/g; __executed = __re.exec("aacd2233ab12nm444ab42"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
        }
    }
    __re.lastIndex = x;
    __executed = __re.exec('aacd2233ab12nm444ab42');
    __expected = ['cd2'];
    __expected.index = 2;
    __expected.input = 'aacd2233ab12nm444ab42';
    if (__executed.length !== __expected.length) {
        $ERROR('#5: __re = /(?:ab|cd)\\d?/g; __re.lastIndex = x; __executed = __re.exec("aacd2233ab12nm444ab42"); var x; __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
    }
    if (__executed.index !== __expected.index) {
        $ERROR('#6: __re = /(?:ab|cd)\\d?/g; __re.lastIndex = x; __executed = __re.exec("aacd2233ab12nm444ab42"); var x; __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
    }
    if (__executed.input !== __expected.input) {
        $ERROR('#7: __re = /(?:ab|cd)\\d?/g; __re.lastIndex = x; __executed = __re.exec("aacd2233ab12nm444ab42"); var x; __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
    }
    for (var index = 0; index < __expected.length; index++) {
        if (__executed[index] !== __expected[index]) {
            $ERROR('#8: __re = /(?:ab|cd)\\d?/g; __re.lastIndex = x; __executed = __re.exec("aacd2233ab12nm444ab42"); var x; __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
        }
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