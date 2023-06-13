try {
    assertRelativeDateMs(new Date(1899, 11, 31, 23, 59, 59), -2208988801000);
    assertRelativeDateMs(new Date(1899, 12, 1, 0, 0, 0), -2208988800000);
    assertRelativeDateMs(new Date(1900, 0, 1, 0, 0, 0), -2208988800000);
    assertRelativeDateMs(new Date(1969, 11, 31, 23, 59, 59), -1000);
    assertRelativeDateMs(new Date(1969, 12, 1, 0, 0, 0), 0);
    assertRelativeDateMs(new Date(1970, 0, 1, 0, 0, 0), 0);
    assertRelativeDateMs(new Date(1999, 11, 31, 23, 59, 59), 946684799000);
    assertRelativeDateMs(new Date(1999, 12, 1, 0, 0, 0), 946684800000);
    assertRelativeDateMs(new Date(2000, 0, 1, 0, 0, 0), 946684800000);
    assertRelativeDateMs(new Date(2099, 11, 31, 23, 59, 59), 4102444799000);
    assertRelativeDateMs(new Date(2099, 12, 1, 0, 0, 0), 4102444800000);
    assertRelativeDateMs(new Date(2100, 0, 1, 0, 0, 0), 4102444800000);
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