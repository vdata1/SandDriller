try {
    if (typeof Object.prototype !== 'object')
        $ERROR('#1: typeof Object.prototype === "object". Actual: ' + typeof Object.prototype);
    if (typeof Object['prototype'] !== 'object')
        $ERROR('#2: typeof Object["prototype"] === "object". Actual: ' + typeof Object['prototype']);
    if (typeof Object.toString !== 'function')
        $ERROR('#3: typeof Object.toString === "function". Actual: ' + typeof Object.toString);
    if (typeof Object['toString'] !== 'function')
        $ERROR('#4: typeof Object["toString"] === "function". Actual: ' + typeof Object['toString']);
    if (typeof Object.valueOf !== 'function')
        $ERROR('#5: typeof Object.valueOf === "function". Actual: ' + typeof Object.valueOf);
    if (typeof Object['valueOf'] !== 'function')
        $ERROR('#6: typeof Object["valueOf"] === "function". Actual: ' + typeof Object['valueOf']);
    if (typeof Object.constructor !== 'function')
        $ERROR('#7: typeof Object.constructor === "function". Actual: ' + typeof Object.constructor);
    if (typeof Object['constructor'] !== 'function')
        $ERROR('#8: typeof Object["constructor"] === "function". Actual: ' + typeof Object['constructor']);
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