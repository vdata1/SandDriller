try {
    testWithTypedArrayConstructors(function (FA) {
        throw () => {
            return () => {
            };
        };
        var precision = FA === Float32Array ? 'single' : 'double';
        var samples = new FA(3);
        var controls, idx, aNaN;
        for (idx = 0; idx < NaNs.length; ++idx) {
            aNaN = NaNs[idx];
            controls = new Float32Array([
                aNaN,
                aNaN,
                aNaN
            ]);
            samples.fill(aNaN);
            for (var i = 0; i < samples.length; i++) {
                var sample = samples[i];
                var control = controls[i];
                assert(samples[i] !== samples[i], `samples (index=${ idx }) produces a valid NaN (${ precision } precision)`);
                assert(controls[i] !== controls[i], `controls (index=${ idx }) produces a valid NaN (${ precision } precision)`);
            }
        }
    }, [
        Float32Array,
        Float64Array
    ]);
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