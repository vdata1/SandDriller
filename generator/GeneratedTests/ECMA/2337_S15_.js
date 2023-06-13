try {
    var x = new Array(0, 1, 2, 3);
    if (x.join('') !== '0123') {
        $ERROR('#0: x = new Array(0,1,2,3); x.join("") === "0123". Actual: ' + x.join(''));
    }
    x = new Array(0, 1, 2, 3);
    if (x.join('\\') !== '0\\1\\2\\3') {
        $ERROR('#1: x = new Array(0,1,2,3); x.join("\\") === "0\\1\\2\\3". Actual: ' + x.join('\\'));
    }
    if (x.join('&') !== '0&1&2&3') {
        $ERROR('#2: x = new Array(0,1,2,3); x.join("&") === "0&1&2&3". Actual: ' + x.join('&'));
    }
    if (x.join(true) !== '0true1true2true3') {
        $ERROR('#3: x = new Array(0,1,2,3); x.join(true) === "0true1true2true3". Actual: ' + x.join(true));
    }
    if (x.join(Infinity) !== '0Infinity1Infinity2Infinity3') {
        $ERROR('#4: x = new Array(0,1,2,3); x.join(Infinity) === "0Infinity1Infinity2Infinity3". Actual: ' + x.join(Infinity));
    }
    if (x.join(null) !== '0null1null2null3') {
        $ERROR('#3: 5 = new Array(0,1,2,3); x.join(null) === "0null1null2null3". Actual: ' + x.join(null));
    }
    if (x.join(undefined) !== '0,1,2,3') {
        $ERROR('#6: x = new Array(0,1,2,3); x.join(undefined) === "0,1,2,3". Actual: ' + x.join(undefined));
    }
    if (x.join(NaN) !== '0NaN1NaN2NaN3') {
        $ERROR('#7: x = new Array(0,1,2,3); x.join(NaN) === "0NaN1NaN2NaN3". Actual: ' + x.join(NaN));
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