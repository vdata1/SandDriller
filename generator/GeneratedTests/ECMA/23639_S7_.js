try {
    var y = 3;
    var z = 2;
    var x = y * z;
    if (x !== 6) {
        $ERROR('#1: var\\nx\\n=\\ny\\n*\\nz\\n; x === 6. Actual: ' + x);
    }
    x = 0;
    var y = 3;
    var z = 2;
    var x = y * z;
    if (x !== 6) {
        $ERROR('#2: var\\nx\\n=\\ny\\n*\\nz\\n; x === 6. Actual: ' + x);
    }
    x = 0;
    var result;
    var y = 3;
    var z = 2;
    eval('\u2028var\u2028x\u2028=\u2028y\u2028*\u2028z\u2028; result = x;');
    if (result !== 6) {
        $ERROR('#3: eval("\\u2028var\\u2028x\\u2028=\\u2028y\\u2028*\\u2028z\\u2028; result = x;"); result === 6. Actual: ' + result);
    }
    result = 0;
    var y = 3;
    var z = 2;
    eval('\u2029var\u2029x\u2029=\u2029y\u2029*\u2029z\u2029; result = x;');
    if (result !== 6) {
        $ERROR('#4: eval("\\u2029var\\u2029x\\u2029=\\u2029y\\u2029*\\u2029z\\u2029; result = x;"); result === 6. Actual: ' + result);
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