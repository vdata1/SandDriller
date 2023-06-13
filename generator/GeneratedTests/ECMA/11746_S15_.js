try {
    var arr = /\v/.exec('\x0B');
    if (arr === null || arr[0] !== '\x0B') {
        $ERROR('#1: var arr = /\\v/.exec("\\u000B"); arr[0] === "\\u000B". Actual. ' + (arr && arr[0]));
    }
    var arr = /\v\v/.exec('a\x0B\x0Bb');
    if (arr === null || arr[0] !== '\x0B\x0B') {
        $ERROR('#2: var arr = /\\v\\v/.exec("a\\u000B\\u000Bb"); arr[0] === "\\u000B\\u000B". Actual. ' + (arr && arr[0]));
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