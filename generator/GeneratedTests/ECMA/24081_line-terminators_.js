try {
    FOR1:
        for (var i = 1; i < 2; i++) {
            LABEL1:
                do {
                    break;
                    FOR1;
                } while (0);
        }
    assert.sameValue(i, 2, '#1: Since LineTerminator(U-000A) between break and Identifier not allowed break evaluates without label');
    FOR2:
        for (var i = 1; i < 2; i++) {
            LABEL2:
                do {
                    break;
                    FOR2;
                } while (0);
        }
    assert.sameValue(i, 2, '#2: Since LineTerminator(U-000D) between break and Identifier not allowed break evaluates without label');
    FOR3:
        for (var i = 1; i < 2; i++) {
            LABEL3:
                do {
                    break;
                    FOR3;
                } while (0);
        }
    assert.sameValue(i, 2, '#3: Since LineTerminator(U-2028) between break and Identifier not allowed break evaluates without label');
    FOR4:
        for (var i = 1; i < 2; i++) {
            LABEL4:
                do {
                    break;
                    FOR4;
                } while (0);
        }
    assert.sameValue(i, 2, '#4: Since LineTerminator(U-2029) between break and Identifier not allowed break evaluates without label');
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