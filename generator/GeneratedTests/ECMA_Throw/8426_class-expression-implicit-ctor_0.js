try {
    let A = class A {
    };
    let B = class B extends A {
    };
    let C = class C extends B {
        m() {
            throw () => {
                return () => {
                };
            };
        }
    };
    assertToStringOrNativeFunction(A, 'class /* a */ A /* b */ { /* c */ }');
    assertToStringOrNativeFunction(B, 'class /* a */ B /* b */ extends /* c */ A /* d */ { /* e */ }');
    assertToStringOrNativeFunction(C, 'class /* a */ C /* b */ extends /* c */ B /* d */ { /* e */ m /* f */ ( /* g */ ) /* h */ { /* i */ } /* j */ }');
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