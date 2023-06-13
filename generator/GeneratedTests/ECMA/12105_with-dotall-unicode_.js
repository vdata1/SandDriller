try {
    for (let re of [
            /^.$/su,
            /^.$/sum
        ]) {
        assert(re.test('a'));
        assert(re.test('3'));
        assert(re.test('π'));
        assert(re.test('\u2027'));
        assert(re.test('\x85'));
        assert(re.test('\x0B'));
        assert(re.test('\f'));
        assert(re.test('\u180E'));
        assert(re.test('\uD800\uDF00'), 'Supplementary plane matched by a single .');
        assert(re.test('\n'));
        assert(re.test('\r'));
        assert(re.test('\u2028'));
        assert(re.test('\u2029'));
        assert(re.test('\uD800'));
        assert(re.test('\uDFFF'));
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