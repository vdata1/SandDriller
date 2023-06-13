try {
    var date = new Date();
    if (date + date !== date.toString() + date.toString()) {
        $ERROR('#1: var date = new Date(); date + date === date.toString() + date.toString(). Actual: ' + (date + date));
    }
    var date = new Date();
    if (date + 0 !== date.toString() + '0') {
        $ERROR('#2: var date = new Date(); date + 0 === date.toString() + "0". Actual: ' + (date + 0));
    }
    var date = new Date();
    if (date + true !== date.toString() + 'true') {
        $ERROR('#3: var date = new Date(); date + true === date.toString() + "true". Actual: ' + (date + true));
    }
    var date = new Date();
    if (date + new Object() !== date.toString() + '[object Object]') {
        $ERROR('#4: var date = new Date(); date + new Object() === date.toString() + "[object Object]". Actual: ' + (date + new Object()));
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