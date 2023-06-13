try {
    var arr = /\x00/.exec('\0');
    if (arr === null || arr[0] !== '\0') {
        $ERROR('#0: var arr = /\\x00/.exec(\\u0000); arr[0] === "\\u0000". Actual. ' + (arr && arr[0]));
    }
    var arr = /\x01/.exec('\x01');
    if (arr === null || arr[0] !== '\x01') {
        $ERROR('#1: var arr = /\\x01/.exec(\\u0001); arr[0] === "\\u0001". Actual. ' + (arr && arr[0]));
    }
    var arr = /\x0A/.exec('\n');
    if (arr === null || arr[0] !== '\n') {
        $ERROR('#2: var arr = /\\x0A/.exec(\\u000A); arr[0] === "\\u000A". Actual. ' + (arr && arr[0]));
    }
    var arr = /\xFF/.exec('ÿ');
    if (arr === null || arr[0] !== 'ÿ') {
        $ERROR('#3: var arr = /\\xFF/.exec(\\u00FF); arr[0] === "\\u00FF". Actual. ' + (arr && arr[0]));
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