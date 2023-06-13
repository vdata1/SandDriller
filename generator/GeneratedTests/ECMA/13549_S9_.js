try {
    if (String.fromCharCode(0).charCodeAt(0) !== 0) {
        $ERROR('#1: String.fromCharCode(0).charCodeAt(0) === 0. Actual: ' + String.fromCharCode(0).charCodeAt(0));
    }
    if (String.fromCharCode(1).charCodeAt(0) !== 1) {
        $ERROR('#2: String.fromCharCode(1).charCodeAt(0) === 1. Actual: ' + String.fromCharCode(1).charCodeAt(0));
    }
    if (String.fromCharCode(-1).charCodeAt(0) !== 65535) {
        $ERROR('#3: String.fromCharCode(-1).charCodeAt(0) === 65535. Actual: ' + String.fromCharCode(-1).charCodeAt(0));
    }
    if (String.fromCharCode(65535).charCodeAt(0) !== 65535) {
        $ERROR('#4: String.fromCharCode(65535).charCodeAt(0) === 65535. Actual: ' + String.fromCharCode(65535).charCodeAt(0));
    }
    if (String.fromCharCode(65534).charCodeAt(0) !== 65534) {
        $ERROR('#5: String.fromCharCode(65534).charCodeAt(0) === 65534. Actual: ' + String.fromCharCode(65534).charCodeAt(0));
    }
    if (String.fromCharCode(65536).charCodeAt(0) !== 0) {
        $ERROR('#6: String.fromCharCode(65536).charCodeAt(0) === 0. Actual: ' + String.fromCharCode(65536).charCodeAt(0));
    }
    if (String.fromCharCode(4294967295).charCodeAt(0) !== 65535) {
        $ERROR('#7: String.fromCharCode(4294967295).charCodeAt(0) === 65535. Actual: ' + String.fromCharCode(4294967295).charCodeAt(0));
    }
    if (String.fromCharCode(4294967294).charCodeAt(0) !== 65534) {
        $ERROR('#8: String.fromCharCode(4294967294).charCodeAt(0) === 65534. Actual: ' + String.fromCharCode(4294967294).charCodeAt(0));
    }
    if (String.fromCharCode(4294967296).charCodeAt(0) !== 0) {
        $ERROR('#9: String.fromCharCode(4294967296).charCodeAt(0) === 0. Actual: ' + String.fromCharCode(4294967296).charCodeAt(0));
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