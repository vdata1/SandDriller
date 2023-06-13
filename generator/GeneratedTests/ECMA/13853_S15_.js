try {
    var __matches = [
        '12',
        '34',
        '56',
        '78',
        '90'
    ];
    var __string = '123456abcde7890';
    if (__string.match(/\d{2}/g).length !== 5) {
        $ERROR('#1: __string = "123456abcde7890"; __string.match(/\\d{2}/g).length=== 5. Actual: ' + __string.match(/\d{2}/g).length);
    }
    for (var mi = 0; mi < __matches.length; mi++) {
        if (__string.match(/\d{2}/g)[mi] !== __matches[mi]) {
            $ERROR('#2.' + mi + ': __matches=["12", "34", "56", "78", "90"]; __string = "123456abcde7890"; __string.match(/\\d{2}/g)[' + mi + ']===__matches[' + mi + ']. Actual: ' + __string.match(/\d{2}/g)[mi]);
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