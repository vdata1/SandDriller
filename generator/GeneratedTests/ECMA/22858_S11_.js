try {
    if (typeof Function.prototype !== 'function')
        $ERROR('#1: typeof Function.prototype === "function". Actual: ' + typeof Function.prototype);
    if (typeof Function['prototype'] !== 'function')
        $ERROR('#2: typeof Function["prototype"] === "function". Actual: ' + typeof Function['prototype']);
    if (typeof Function.prototype.toString !== 'function')
        $ERROR('#3: typeof Function.prototype.toString === "function". Actual: ' + typeof Function.prototype.toString);
    if (typeof Function.prototype['toString'] !== 'function')
        $ERROR('#4: typeof Function.prototype["toString"] === "function". Actual: ' + typeof Function.prototype['toString']);
    if (typeof Function.prototype.length !== 'number')
        $ERROR('#5: typeof Function.prototype.length === "number". Actual: ' + typeof Function.prototype.length);
    if (typeof Function.prototype['length'] !== 'number')
        $ERROR('#6: typeof Function.prototype["length"] === "number". Actual: ' + typeof Function.prototype['length']);
    if (typeof Function.prototype.valueOf !== 'function')
        $ERROR('#7: typeof Function.prototype.valueOf === "function". Actual: ' + typeof Function.prototype.valueOf);
    if (typeof Function.prototype['valueOf'] !== 'function')
        $ERROR('#8: typeof Function.prototype["valueOf"] === "function". Actual: ' + typeof Function.prototype['valueOf']);
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