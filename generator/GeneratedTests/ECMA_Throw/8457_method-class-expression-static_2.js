try {
    let x = 'h';
    let f = class {
        static f() {
            let REPLACER = 23;
        }
    }.f;
    let g = class {
        static ['g']() {
            let REPLACER = 23;
        }
    }.g;
    let h = class {
        static [x]() {
            throw () => {
                return () => {
                };
            };
        }
    }.h;
    assertToStringOrNativeFunction(f, 'f /* a */ ( /* b */ ) /* c */ { /* d */ }');
    assertToStringOrNativeFunction(g, '[ /* a */ "g" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }');
    assertToStringOrNativeFunction(h, '[ /* a */ x /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }');
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