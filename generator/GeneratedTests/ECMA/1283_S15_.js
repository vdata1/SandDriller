try {
    var a = [0];
    if (a.length !== 1) {
        $ERROR('expected a.length === 1, actually ' + a.length);
    }
    a.length = 3;
    if (a[1] !== undefined) {
        $ERROR('expected a[1] === undefined, actually ' + a[1]);
    }
    if (a[2] !== undefined) {
        $ERROR('expected a[2] === undefined, actually ' + a[2]);
    }
    Object.prototype[2] = 2;
    if (a[1] !== undefined) {
        $ERROR('expected a[1] === undefined, actually ' + a[1]);
    }
    if (a[2] !== 2) {
        $ERROR('expected a[2] === 2, actually ' + a[2]);
    }
    if (a.hasOwnProperty('1') !== false) {
        $ERROR('a.hasOwnProperty(\'1\') === false, actually ' + a.hasOwnProperty('1'));
    }
    if (a.hasOwnProperty('2') !== false) {
        $ERROR('a.hasOwnProperty(\'2\') === false, actually ' + a.hasOwnProperty('2'));
    }
    var b = a.concat();
    if (b.length !== 3) {
        $ERROR('expected b.length === 3, actually ' + b.length);
    }
    if (b[0] !== 0) {
        $ERROR('expected b[0] === 0, actually ' + b[0]);
    }
    if (b[1] !== undefined) {
        $ERROR('expected b[1] === undefined, actually ' + b[1]);
    }
    if (b[2] !== 2) {
        $ERROR('expected b[2] === 2, actually ' + b[2]);
    }
    if (b.hasOwnProperty('1') !== false) {
        $ERROR('expected b.hasOwnProperty(\'1\') === false, actually ' + b.hasOwnProperty('1'));
    }
    if (b.hasOwnProperty('2') !== true) {
        $ERROR('expected b.hasOwnProperty(\'2\') === true, actually ' + b.hasOwnProperty('2'));
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