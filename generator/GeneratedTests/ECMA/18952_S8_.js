try {
    var _map = {
        1: 'one',
        two: 2
    };
    _map[1] = 'uno';
    if (_map[1] !== 'uno') {
        $ERROR('#1: var _map={1:"one",two:2}; _map[1]="uno"; _map[1] === "uno". Actual: ' + _map[1]);
    }
    _map['1'] = 1;
    if (_map[1] !== 1) {
        $ERROR('#2: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map[1] === 1. Actual: ' + _map[1]);
    }
    _map['two'] = 'two';
    if (_map['two'] !== 'two') {
        $ERROR('#3: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map["two"] === "two". Actual: ' + _map['two']);
    }
    _map.two = 'duo';
    if (_map.two !== 'duo') {
        $ERROR('#4: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map.two="duo"; _map.two === "duo". Actual: ' + _map.two);
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