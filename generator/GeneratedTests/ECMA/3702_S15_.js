try {
    var x = [
        0,
        1
    ];
    var arr = x.splice(-2, -1, 2, 3);
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#0: var x = [0,1]; var arr = x.splice(-2,-1,2,3); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr.length !== 0) {
        $ERROR('#1: var x = [0,1]; var arr = x.splice(-2,-1,2,3); arr.length === 0. Actual: ' + arr.length);
    }
    if (x.length !== 4) {
        $ERROR('#2: var x = [0,1]; var arr = x.splice(-2,-1,2,3); x.length === 4. Actual: ' + x.length);
    }
    if (x[0] !== 2) {
        $ERROR('#3: var x = [0,1]; var arr = x.splice(-2,-1,2,3); x[0] === 2. Actual: ' + x[0]);
    }
    if (x[1] !== 3) {
        $ERROR('#4: var x = [0,1]; var arr = x.splice(-2,-1,2,3); x[1] === 3. Actual: ' + x[1]);
    }
    if (x[2] !== 0) {
        $ERROR('#5: var x = [0,1]; var arr = x.splice(-2,-1,2,3); x[2] === 0. Actual: ' + x[2]);
    }
    if (x[3] !== 1) {
        $ERROR('#6: var x = [0,1]; var arr = x.splice(-2,-1,2,3); x[3] === 1. Actual: ' + x[3]);
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