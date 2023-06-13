try {
    var __map = {};
    __map[1] = 'one';
    __map['two'] = 2;
    __map['3'] = 'tre';
    if (__map[1] !== 'one') {
        $ERROR('#1: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map[1] === "one". Actual: ' + __map[1]);
    }
    if (__map['two'] !== 2) {
        $ERROR('#2: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map["two"] === 2. Actual: ' + __map['two']);
    }
    if (__map['3'] !== 'tre') {
        $ERROR('#3: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map["3"] === "tre". Actual: ' + __map['3']);
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