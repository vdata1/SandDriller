try {
    var obj = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    obj.length = 4;
    obj.splice = Array.prototype.splice;
    var arr = obj.splice(0, 3, 4, 5);
    arr.getClass = Object.prototype.toString;
    if (arr.getClass() !== '[object ' + 'Array' + ']') {
        $ERROR('#1: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr is Array object. Actual: ' + arr.getClass());
    }
    if (arr.length !== 3) {
        $ERROR('#2: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr.length === 3. Actual: ' + arr.length);
    }
    if (arr[0] !== 0) {
        $ERROR('#3: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr[0] === 0. Actual: ' + arr[0]);
    }
    if (arr[1] !== 1) {
        $ERROR('#4: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr[1] === 1. Actual: ' + arr[1]);
    }
    if (arr[2] !== 2) {
        $ERROR('#5: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); arr[2] === 2. Actual: ' + arr[2]);
    }
    if (obj.length !== 3) {
        $ERROR('#6: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj.length === 3. Actual: ' + obj.length);
    }
    if (obj[0] !== 4) {
        $ERROR('#7: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[0] === 4. Actual: ' + obj[0]);
    }
    if (obj[1] !== 5) {
        $ERROR('#8: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[1] === 5. Actual: ' + obj[1]);
    }
    if (obj[2] !== 3) {
        $ERROR('#9: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[2] === 3. Actual: ' + obj[2]);
    }
    if (obj[3] !== undefined) {
        $ERROR('#10: var obj = {0:0,1:1,2:2,3:3}; obj.length = 4; obj.splice = Array.prototype.splice; var arr = obj.splice(0,3,4,5); obj[3] === undefined. Actual: ' + obj[3]);
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