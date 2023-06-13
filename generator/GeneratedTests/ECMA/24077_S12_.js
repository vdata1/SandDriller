try {
    LABEL_OUT:
        var x = 0, y = 0, xx = 0, yy = 0;
    (function () {
        LABEL_DO_LOOP:
            do {
                LABEL_IN:
                    x++;
                if (x === 10)
                    return;
                LABEL_NESTED_LOOP:
                    do {
                        LABEL_IN_NESTED:
                            xx++;
                        if (xx === 10)
                            return;
                        break LABEL_DO_LOOP;
                        LABEL_IN_NESTED_2:
                            yy++;
                    } while (0);
                LABEL_IN_2:
                    y++;
                function IN_DO_FUNC() {
                }
            } while (0);
        LABEL_ANOTHER_LOOP:
            do {
                ;
            } while (0);
        function OUT_FUNC() {
        }
    }());
    if (x !== 1 && y !== 0 && xx !== 1 & yy !== 0) {
        $ERROR('#1: x === 1 and y === 0 and xx === 1 and yy === 0. Actual:  x===' + x + ' and y===' + y + ' and xx===' + xx + ' and yy===' + yy);
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