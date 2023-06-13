try {
    var __obj = {};
    __obj.hole = undefined;
    if (__obj.hole !== undefined) {
        $ERROR('#1: var __obj={}; __obj.hole=undefined; __obj.hole === undefined. Actual: ' + __obj.hole);
    }
    if (__obj.notexist !== undefined) {
        $ERROR('#2: var __obj={}; __obj.hole=undefined; __obj.notexist === undefined. Actual: ' + __obj.notexist);
    }
    if (!('hole' in __obj)) {
        $ERROR('#3: var __obj={}; __obj.hole=undefined; "hole" in __obj');
    }
    if ('notexist' in __obj) {
        $ERROR('#4: var __obj={}; __obj.hole=undefined; "notexist" in __obj');
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