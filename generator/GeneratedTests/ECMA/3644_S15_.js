try {
    var myComparefn = function (x, y) {
        if (x === undefined)
            return -1;
        if (y === undefined)
            return 1;
        return 0;
    };
    var x = new Array(2);
    x[1] = 1;
    x.sort(myComparefn);
    if (x.length !== 2) {
        $ERROR('#1: var x = new Array(2); x[1] = 1;  x.sort(myComparefn); x.length === 2. Actual: ' + x.length);
    }
    if (x[0] !== 1) {
        $ERROR('#2: var x = new Array(2); x[1] = 1;  x.sort(myComparefn); x[0] === 1. Actual: ' + x[0]);
    }
    if (x[1] !== undefined) {
        $ERROR('#3: var x = new Array(2); x[1] = 1;  x.sort(myComparefn); x[1] === undefined. Actual: ' + x[1]);
    }
    var x = new Array(2);
    x[0] = 1;
    x.sort(myComparefn);
    if (x.length !== 2) {
        $ERROR('#4: var x = new Array(2); x[0] = 1;  x.sort(myComparefn); x.length === 2. Actual: ' + x.length);
    }
    if (x[0] !== 1) {
        $ERROR('#5: var x = new Array(2); x[0] = 1;  x.sort(myComparefn); x[0] === 1. Actual: ' + x[0]);
    }
    if (x[1] !== undefined) {
        $ERROR('#6: var x = new Array(2); x[0] = 1;  x.sort(myComparefn); x[1] === undefined. Actual: ' + x[1]);
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