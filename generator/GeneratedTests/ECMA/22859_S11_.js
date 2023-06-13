try {
    if (typeof Array.prototype !== 'object')
        $ERROR('#1: typeof Array.prototype === "object". Actual: ' + typeof Array.prototype);
    if (typeof Array['prototype'] !== 'object')
        $ERROR('#2: typeof Array["prototype"] === "object". Actual: ' + typeof Array['prototype']);
    if (typeof Array.length !== 'number')
        $ERROR('#3: typeof Array.length === "number". Actual: ' + typeof Array.length);
    if (typeof Array['length'] !== 'number')
        $ERROR('#4: typeof Array["length"] === "number". Actual: ' + typeof Array['length']);
    if (typeof Array.prototype.constructor !== 'function')
        $ERROR('#5: typeof Array.prototype.constructor === "function". Actual: ' + typeof Array.prototype.constructor);
    if (typeof Array.prototype['constructor'] !== 'function')
        $ERROR('#6: typeof Array.prototype["constructor"] === "function". Actual: ' + typeof Array.prototype['constructor']);
    if (typeof Array.prototype.toString !== 'function')
        $ERROR('#7: typeof Array.prototype.toString === "function". Actual: ' + typeof Array.prototype.toString);
    if (typeof Array.prototype['toString'] !== 'function')
        $ERROR('#8: typeof Array.prototype["toString"] === "function". Actual: ' + typeof Array.prototype['toString']);
    if (typeof Array.prototype.join !== 'function')
        $ERROR('#9: typeof Array.prototype.join === "function". Actual: ' + typeof Array.prototype.join);
    if (typeof Array.prototype['join'] !== 'function')
        $ERROR('#10: typeof Array.prototype["join"] === "function". Actual: ' + typeof Array.prototype['join']);
    if (typeof Array.prototype.reverse !== 'function')
        $ERROR('#11: typeof Array.prototype.reverse === "function". Actual: ' + typeof Array.prototype.reverse);
    if (typeof Array.prototype['reverse'] !== 'function')
        $ERROR('#12: typeof Array.prototype["reverse"] === "function". Actual: ' + typeof Array.prototype['reverse']);
    if (typeof Array.prototype.sort !== 'function')
        $ERROR('#13: typeof Array.prototype.sort === "function". Actual: ' + typeof Array.prototype.sort);
    if (typeof Array.prototype['sort'] !== 'function')
        $ERROR('#14: typeof Array.prototype["sort"] === "function". Actual: ' + typeof Array.prototype['sort']);
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