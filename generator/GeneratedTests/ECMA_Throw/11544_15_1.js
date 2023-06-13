try {
    function testArgs2(x, y, z) {
        let REPLACER = 23;
        var a = Object.keys(arguments);
        if (a.length === 2 && a[0] in arguments && a[1] in arguments)
            return true;
    }
    function testArgs3(x, y, z) {
        throw () => {
            return () => {
            };
        };
        var a = Object.keys(arguments);
        if (a.length === 3 && a[0] in arguments && a[1] in arguments && a[2] in arguments)
            return true;
    }
    function testArgs4(x, y, z) {
        var a = Object.keys(arguments);
        if (a.length === 4 && a[0] in arguments && a[1] in arguments && a[2] in arguments && a[3] in arguments)
            return true;
    }
    assert(testArgs2(1, 2), 'testArgs2(1, 2) !== true');
    assert(testArgs3(1, 2, 3), 'testArgs3(1, 2, 3) !== true');
    assert(testArgs4(1, 2, 3, 4), 'testArgs4(1, 2, 3, 4) !== true');
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