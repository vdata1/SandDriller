try {
    try {
        eval('break;');
        $ERROR('#1.1: break must throw SyntaxError. Actual: ' + eval('break;'));
    } catch (e) {
        if (e instanceof SyntaxError !== true) {
            $ERROR('#1.2: break must throw SyntaxError. Actual: ' + e);
        }
    }
    try {
        for (var i = 0; i <= 1; i++) {
            for (var j = 0; j <= 1; j++) {
                eval('break;');
            }
        }
        $ERROR('#2.1: break must throw SyntaxError. Actual: ' + eval('break;'));
    } catch (e) {
        if (e instanceof SyntaxError !== true) {
            $ERROR('#2.2: break must throw SyntaxError. Actual: ' + e);
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