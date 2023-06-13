try {
    var __re = RegExp.prototype;
    if (__re.hasOwnProperty('ignoreCase') !== true) {
        $ERROR('#0: __re = RegExp.prototype; __re.hasOwnProperty(\'ignoreCase\') === true');
    }
    if (__re.propertyIsEnumerable('ignoreCase') !== false) {
        $ERROR('#1: __re = RegExp.prototype; __re.propertyIsEnumerable(\'ignoreCase\') === false');
    }
    var count = 0;
    for (var p in __re) {
        if (p === 'ignoreCase')
            count++;
    }
    if (count !== 0) {
        $ERROR('#2: count = 0; __re = RegExp.prototype; for (p in __re){ if (p==="ignoreCase") count++; } count === 0. Actual: ' + count);
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