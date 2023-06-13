try {
    Array.prototype[2] = 2;
    var x = [
        0,
        1
    ];
    x.length = 3;
    if (x.hasOwnProperty('2') !== false) {
        $ERROR('#1: Array.prototype[2] = 2; x = [0,1]; x.length = 3; x.hasOwnProperty(\'2\') === false. Actual: ' + x.hasOwnProperty('2'));
    }
    x.length = 2;
    if (x[2] !== 2) {
        $ERROR('#2: Array.prototype[2] = 2; x = [0,1]; x.length = 3; x.length = 2; x[2] === 2. Actual: ' + x[2]);
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