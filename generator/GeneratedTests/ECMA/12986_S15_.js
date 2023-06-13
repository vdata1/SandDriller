try {
    var __re = /\d+/;
    var __matched = [];
    var __expected = [
        '123',
        '123',
        '123',
        '123',
        '123',
        '123',
        '123',
        '123',
        '123',
        '123'
    ];
    do {
        var __executed = __re.exec('123 456 789');
        if (__executed !== null) {
            __matched.push(__executed[0]);
        } else {
            break;
        }
    } while (__matched.length < 10);
    if (__expected.length !== __matched.length) {
        $ERROR('#1: __executed = /\\d+/.exec("123 456 789"); __matched.length === ' + __expected.length + '.Actual: ' + __matched.length);
    }
    for (var index = 0; index < __expected.length; index++) {
        if (__expected[index] !== __matched[index]) {
            $ERROR('#2: __executed = /\\d+/.exec("123 456 789"); __matched[' + index + '] === ' + __expected[index] + '. Actual: ' + __matched[index]);
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