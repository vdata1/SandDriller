try {
    var obj = {
        0: 0,
        1: 1
    };
    obj.length = 2;
    obj.splice = Array.prototype.splice;
    var arr = obj.splice(0, -1, 2, 3);
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#0: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr.length !== 0) {
        $ERROR('#1: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); arr.length === 0. Actual: ' + arr.length);
    }
    if (obj.length !== 4) {
        $ERROR('#2: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj.length === 4. Actual: ' + obj.length);
    }
    if (obj[0] !== 2) {
        $ERROR('#3: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[0] === 2. Actual: ' + obj[0]);
    }
    if (obj[1] !== 3) {
        $ERROR('#4: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[1] === 3. Actual: ' + obj[1]);
    }
    if (obj[2] !== 0) {
        $ERROR('#5: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[2] === 0. Actual: ' + obj[2]);
    }
    if (obj[3] !== 1) {
        $ERROR('#6: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[3] === 1. Actual: ' + obj[3]);
    }
    if (obj[4] !== undefined) {
        $ERROR('#7: var obj = {0:0,1:1}; obj.length = 2; obj.splice = Array.prototype.splice; var arr = obj.splice(0,-1,2,3); obj[4] === undefined. Actual: ' + obj[4]);
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