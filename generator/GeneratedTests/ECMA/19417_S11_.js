try {
    if (~'1' !== -2) {
        $ERROR('#1: ~"1" === -2. Actual: ' + ~'1');
    }
    if (~new String('0') !== -1) {
        $ERROR('#2: ~new String("0") === -1. Actual: ' + ~new String('0'));
    }
    if (~'x' !== -1) {
        $ERROR('#3: ~"x" === -1. Actual: ' + ~'x');
    }
    if (~'' !== -1) {
        $ERROR('#4: ~"" === -1. Actual: ' + ~'');
    }
    if (~new String('-2') !== 1) {
        $ERROR('#5: ~new String("-2") === 1. Actual: ' + ~new String('-2'));
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