try {
    var x = [];
    x[1] = 1;
    x[3] = 3;
    x[5] = 5;
    x.length = 4;
    if (x.length !== 4) {
        $ERROR('#1: x = []; x[1] = 1; x[3] = 3; x[5] = 5; x.length = 4; x.length === 4. Actual: ' + x.length);
    }
    if (x[5] !== undefined) {
        $ERROR('#2: x = []; x[1] = 1; x[3] = 3; x[5] = 5; x.length = 4; x[5] === undefined. Actual: ' + x[5]);
    }
    if (x[3] !== 3) {
        $ERROR('#3: x = []; x[1] = 1; x[3] = 3; x[5] = 5; x.length = 4; x[3] === 3. Actual: ' + x[3]);
    }
    x.length = new Number(6);
    if (x[5] !== undefined) {
        $ERROR('#4: x = []; x[1] = 1; x[3] = 3; x[5] = 5; x.length = 4; x.length = new Number(6); x[5] === undefined. Actual: ' + x[5]);
    }
    x.length = 0;
    if (x[0] !== undefined) {
        $ERROR('#5: x = []; x[1] = 1; x[3] = 3; x[5] = 5; x.length = 4; x.length = new Number(6); x.length = 0; x[0] === undefined. Actual: ' + x[0]);
    }
    x.length = 1;
    if (x[1] !== undefined) {
        $ERROR('#6: x = []; x[1] = 1; x[3] = 3; x[5] = 5; x.length = 4; x.length = new Number(6); x.length = 0; x.length = 1; x[1] === undefined. Actual: ' + x[1]);
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