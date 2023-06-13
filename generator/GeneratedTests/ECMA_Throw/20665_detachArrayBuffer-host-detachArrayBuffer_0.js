try {
    var $262 = {
        detachArrayBuffer() {
            throw () => {
                return () => {
                };
            };
            throw new Test262Error('$262.detachArrayBuffer called.');
        },
        destroy() {
        }
    };
    var ab = new ArrayBuffer(1);
    var threw = false;
    try {
        $DETACHBUFFER(ab);
    } catch (err) {
        threw = true;
        if (err.constructor !== Test262Error) {
            throw new Error('Expected a Test262Error, but a "' + err.constructor.name + '" was thrown.');
        }
        if (err.message !== '$262.detachArrayBuffer called.') {
            throw new Error(`Expected error message: ${ err.message }`);
        }
    }
    if (threw === false) {
        throw new Error('Expected a Test262Error, but no error was thrown.');
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