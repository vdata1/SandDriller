try {
    var obj = {};
    obj.join = Array.prototype.join;
    obj.length = 4.5;
    if (obj.join() !== ',,,') {
        $ERROR('#1: var obj = {}; obj.length = 4.5; obj.join = Array.prototype.join; obj.join() === ",,,". Actual: ' + obj.join());
    }
    obj[0] = undefined;
    obj[1] = 1;
    obj[2] = null;
    if (obj.join() !== ',1,,') {
        $ERROR('#1: var obj = {}; obj.length = 4.5; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join() === ",1,,". Actual: ' + obj.join());
    }
    if (obj.length !== 4.5) {
        $ERROR('#1: var obj = {}; obj.length = 4.5; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join(); obj.length === 4.5. Actual: ' + obj.length);
    }
    var obj = {};
    obj.join = Array.prototype.join;
    var x = new Number(4.5);
    obj.length = x;
    if (obj.join() !== ',,,') {
        $ERROR('#4: var obj = {}; var x = new Number(4.5); obj.length = x; obj.join = Array.prototype.join; obj.join() === ",,,". Actual: ' + obj.join());
    }
    obj[0] = undefined;
    obj[1] = 1;
    obj[2] = null;
    if (obj.join() !== ',1,,') {
        $ERROR('#5: var obj = {}; var x = new Number(4.5); obj.length = x; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join() === ",1,,". Actual: ' + obj.join());
    }
    if (obj.length !== x) {
        $ERROR('#6: var obj = {}; var x = new Number(4.5); obj.length = x; obj[0] = undefined; obj[1] = 1; obj[2] = null; obj.join = Array.prototype.join; obj.join(); obj.length === x. Actual: ' + obj.length);
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