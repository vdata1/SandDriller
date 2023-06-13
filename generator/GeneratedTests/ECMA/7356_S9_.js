try {
    if (Object('some string').valueOf() !== 'some string') {
        $ERROR('#1: Object("some string").valueOf() === "some string". Actual: ' + Object('some string').valueOf());
    }
    if (typeof Object('some string') !== 'object') {
        $ERROR('#2: typeof Object("some string") === "object". Actual: ' + typeof Object('some string'));
    }
    if (Object('some string').constructor.prototype !== String.prototype) {
        $ERROR('#3: Object("some string").constructor.prototype === String.prototype. Actual: ' + Object('some string').constructor.prototype);
    }
    if (Object('').valueOf() !== '') {
        $ERROR('#4: Object("").valueOf() === false. Actual: ' + Object('').valueOf());
    }
    if (typeof Object('') !== 'object') {
        $ERROR('#5: typeof Object("") === "object". Actual: ' + typeof Object(''));
    }
    if (Object('').constructor.prototype !== String.prototype) {
        $ERROR('#6: Object("").constructor.prototype === String.prototype. Actual: ' + Object('').constructor.prototype);
    }
    if (Object('\r\t\b\n\x0B\f').valueOf() !== '\r\t\b\n\x0B\f') {
        $ERROR('#7: Object("\\r\\t\\b\\n\\v\\f").valueOf() === false. Actual: ' + Object('\r\t\b\n\x0B\f').valueOf());
    }
    if (typeof Object('\r\t\b\n\x0B\f') !== 'object') {
        $ERROR('#8: typeof Object("\\r\\t\\b\\n\\v\\f") === "object". Actual: ' + typeof Object('\r\t\b\n\x0B\f'));
    }
    if (Object('\r\t\b\n\x0B\f').constructor.prototype !== String.prototype) {
        $ERROR('#9: Object("\\r\\t\\b\\n\\v\\f").constructor.prototype === String.prototype. Actual: ' + Object('\r\t\b\n\x0B\f').constructor.prototype);
    }
    if (Object(String(10)).valueOf() !== '10') {
        $ERROR('#10: Object(String(10)).valueOf() === false. Actual: ' + Object(String(10)).valueOf());
    }
    if (typeof Object(String(10)) !== 'object') {
        $ERROR('#11: typeof Object(String(10)) === "object". Actual: ' + typeof Object(String(10)));
    }
    if (Object(String(10)).constructor.prototype !== String.prototype) {
        $ERROR('#12: Object(String(10)).constructor.prototype === String.prototype. Actual: ' + Object(String(10)).constructor.prototype);
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